export type JSONValue = // TODO: Perhaps JSONResponseAndPath is a better name?
  | {
      data: any;
      status: number;
      command: string; // TODO: Perhaps path is a better name?
    }
  | Promise<JSONValue>;

export type StatusJSON = 
{
  url: string;
  data: any;
}

export type StatusCallback  = (StatusJSON) => void;

export type ProPresenterLayerName = "audio" | "props" | "messages" | "announcements" | "slide" | "media" | "video_input"
export type ProPresenterCaptureOperation = "start" | "stop"
export type ProPresenterCaptureType = "disk" | "rtmp" | "resi"
export type ProPresenterTimelineOperation =  "play" | "pause" | "rewind"
export type ProPresenterTimerOperation = "start" | "stop" | "reset"
export type ProPresenterLayerWithTransportControl = "presentation" | "announcement" | "audio"
export type ProPresenterLayerWithTransportControlAndAutoAdvance = "presentation" | "announcement"


export class ProPresenter {
  ip: string; // TODO: Perhaps host is a better name? (As either a hostname or IP string would work)
  port: number;
  timeout: number; // User-defined timeout for all network fetch operations. If not explicitly set, this module will default to 2 seconds. This default is much shorter than the Node default fetch timeout of 30 seconds, making it more suitable for remote-control situations.
  #statusAbortController: AbortController; // Used to abort fetch of chunked status updates.

  constructor(ip: string, port: number, timeout: number = 2000) {
    this.ip = ip;
    this.port = port;
    this.timeout = timeout;
    this.#statusAbortController = null;  // Class level AbortController for the single, persistant Status connection that gets live feedback (through callbacks) for all registered endpoints. When you want to change endpoints/callbacks, any current status connection is dropped and replaced with a new one.
  }

  /**
   * API wrapper function, use fetch to send/retrieve the data from ProPresenter
   * @param path
   * @param userOptions (optional)
   * @returns Promise from fetch
   */
  private sendRequestToProPresenter = (path: string, userOptions?: any) => {
    // AbortController - used for user-defined request timeout. A new one is made per request sent
    const abortController = new AbortController();
    
    // Define default options
    const defaultOptions = {};
    // Define default headers
    const defaultHeaders = {};
    if (!userOptions) userOptions = [];

    const options = {
      // Merge options
      ...defaultOptions,
      ...userOptions,
      signal: abortController.signal, // Used to abort fetch, in case of no reponse within user-defined timeout
      // Merge headers
      headers: {
        ...defaultHeaders,
        ...userOptions.headers,
      },
    };

    // Build Url
    const url = `http://${this.ip}:${this.port}${path}`;
    const resultObj: JSONValue = { data: null, status: null, command: path };

    // Prepare to abort fetch if not completed within user-defined timeout
    const timeoutId = setTimeout(() => abortController.abort(), this.timeout);

    return fetch(url, options)
      .then((response) => {
        clearTimeout(timeoutId); // Response received - clear pending abort for user-defined timeout
        resultObj.status = response.status;
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) // Check if response from Pro7 contains a JSON body. Some Pro7 API GET requests (eg most /trigger's) return only a header without any response body
          return response.json();
        else
          return JSON.stringify(null);  // Convention: For responses from Pro7 that do not have a body, return "null"
      })
      .then((result) => {
        resultObj.data = result;
        return resultObj;
      });
  };


  /**
   * Register etc will POST to /v1/status/updates and handle the processing of streaming responses by calling callbacks with returned data
   * @param statusEndPointsAndCallbacks Dictionary of endpoints {[key: string]: StatusCallback} where the key is the get URL and the value is callback function
   * @param timeout Optional network timeout for status connection. Defaults to 2000msec
   */
  registerCallbacksForStatusUpdates(statusEndPointsAndCallbacks: {[key: string]: StatusCallback}, timeout = 2000) {
    const self = this;

    // The following three private functions are used to create and maintain the persistant Status connection.
    // The fetchStatusWithTimeout function implements a simple fetch with timeout (and ability to aobort the connection)
    function fetchStatusWithTimeout(options): Promise<Response> {
      const { timeout = 2000 } = options;
  
      return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
          reject(new Error("Request timed out"));
        }, timeout);
        
        const statusEndPoints = Object.keys(statusEndPointsAndCallbacks);
        const statusUrl = `http://${self.ip}:${self.port}/v1/status/updates`;
        console.log("ProPresenter API module: About to start persistant status connection to " + statusUrl + ", for endpoints & callbacks: " + '[' + Object.keys(statusEndPointsAndCallbacks).map(key => `'${key}': ${statusEndPointsAndCallbacks[key].name}(statusJSONObject)`).join(', ') + ']');
  
        return fetch(statusUrl, {
          method: "POST",
          body: JSON.stringify(statusEndPoints),
          headers: { "Content-Type": "application/json" },
          signal: self.#statusAbortController.signal,
        }).then(
          (response) => {
            clearTimeout(timer);
            resolve(response);
          },
          (err) => {
            clearTimeout(timer);
            reject(err);
          }
        );
      });
    }
  
    // The readStream function uses recursion to process chunked responses from ProPresenter.
    function readStream(reader, decoder, buffer) {
      return new Promise<void>((resolve, reject) => {
        const timeoutId = setTimeout(() => {
          reject(new Error("Read stream timed out"));
        }, timeout);
  
        function processChunk({ done, value }) {
          clearTimeout(timeoutId);
  
          if (done) {
            // Process any remaining buffer content if it contains a complete JSON object
            console.log('Done reading stream');
            if (buffer.trim()) {
              try {
                const statusJSONObject: StatusJSON = JSON.parse(buffer); 
                //onJSONUpdate(json);
                const streamingCallbacks = Object.values(statusEndPointsAndCallbacks);
                const callback:(StatusCallback) = streamingCallbacks[statusJSONObject.url];
                if (callback) {
                  callback(statusJSONObject);
                }
              } catch (e) {
                console.error("Failed to parse JSON:", e);
              }
            }
            return resolve();
          }
  
          // Decode the chunk into a string
          buffer += decoder.decode(value, { stream: true });
  
          // Split the buffer by the delimiter '\r\n\r\n' to get indiviual updates in an array
          let statusUpdates = buffer.split("\r\n\r\n");
  
          // The last item in the newly split array is either an incomplete JSON or an empty string, so we keep it in the buffer
          buffer = statusUpdates.pop();
  
          // The remaining status updates in the newly split array are complete JSON status updates, so let's process each one
          statusUpdates.forEach((statusUpdateJSON) => {
            if (statusUpdateJSON.trim()) {
              // Ensure it's not an empty string
              try {
                const jsonStatusUpdateObject = JSON.parse(statusUpdateJSON);
                //console.log("Got Update for URL: " + jsonStatusUpdateObject.url);
                // TODO: remove: this.statusAbortController = Object.values(statusEndPointsAndCallbacks);
                const callback = statusEndPointsAndCallbacks[jsonStatusUpdateObject.url];
                if (callback) {
                  callback(jsonStatusUpdateObject);
                }
              } catch (e) {
                console.error("Failed to parse JSON:", e);
              }
            }
          });
  
          return reader.read().then(processChunk).catch(reject);
        }
  
        reader.read().then(processChunk).catch(reject);
      });
    }
  
    // connectAndStartProcessing initiates the persistant status connection (and ensures there is only a single persistant Status connection)
    function connectAndStartProcessing() {
      // Check for and abort any in-progress status connection (only allow one at a time, cancel any in-progress)
      if (self.#statusAbortController) {
        self.#statusAbortController.abort();
      }

      self.#statusAbortController = new AbortController(); // Assign a new AbortController to class level statusAbortController
      fetchStatusWithTimeout({ timeout })
        .then((response) => {
          if (!response.ok) {
            // TODO: (emit?) status disconnected
            // TODO: Decide between throwing error, or (emit?)
            // Details of error may be in body (eg invalid status urls)
            return response.text().then((text) => {
              throw new Error(
                `HTTP Error! Status: ${response.status} Body: ${text}`
              );
            });
          }
          // TODO: (emit?) status connected
          const reader = response.body.getReader();
          const decoder = new TextDecoder();
          let buffer = "";
          return readStream(reader, decoder, buffer);
        })
        .then(() => {
          // TODO: (emit?) status disconnected
          console.log( "Chunked status fetch completed. Retrying connection...");
          setTimeout(connectAndStartProcessing, 2000); // Retry after time TODO: configurable retry time?
        })
        .catch((error) => {
          // TODO: (emit?) status disconnected
          console.error("Error processing JSON stream:", error);
          console.log("Retrying connection...");
          setTimeout(connectAndStartProcessing, 2000); // Retry after time TODO: configurable retry time?
        });
    }

    connectAndStartProcessing();
  }

  /**
   * ANNOUNCEMENT
   */

  /**
   * Requests the currently active announcement presentation.
   * @returns the currently active announcement presentation.
   */
  announcementGetActive() {
    return this.sendRequestToProPresenter("/v1/announcement/active");
  }
  /**
   * Requests the index of the current slide/cue within the currently active announcement.
   * @returns The index of the current slide/cue within the currently active announcement.
   */
  announcementGetSlideIndex() {
    return this.sendRequestToProPresenter("/v1/announcement/slide_index");
  }
  /**
   * Focuses the currently active announcement presentation.
   */
  announcementActiveFocus() {
    return this.sendRequestToProPresenter("/v1/announcement/active/focus");
  }
  /**
   * Retriggers the currently active announcement presentation (starts from the beginning).
   */
  announcementTrigger() {
    return this.sendRequestToProPresenter("/v1/announcement/active/trigger");
  }
  /**
   * Triggers the next cue in the active announcement presentation (if there is one).
   */
  announcementNextTrigger() {
    return this.sendRequestToProPresenter("/v1/announcement/active/next/trigger");
  }
  /**
   * Triggers the previous cue in the currently active announcement presentation (if there is one).
   */
  announcementPreviousTrigger() {
    return this.sendRequestToProPresenter(
      "/v1/announcement/active/previous/trigger"
    );
  }
  /**
   * Triggers the specified cue in the currently active announcement presentation.
   * @param {string} index
   */
  announcementActiveIndexTrigger(index: string | number) {
    return this.sendRequestToProPresenter(
      `/v1/announcement/active/${index}/trigger`
    );
  }
  /**
   * Performs the requested timeline operation for the active announcment presentation.
   * @param {play,pause,rewind} operation
   */
  announcementActiveTimelineOperation(operation) {
    return this.sendRequestToProPresenter(
      `/v1/announcement/active/timeline/${operation}`
    );
  }
  /**
   * Requests the current state of the active announcement timeline.
   * @returns The current state of the active announcement timeline.
   */
  announcementGetActiveTimelineOperation() { // TODO: fix this name
    return this.sendRequestToProPresenter(`/v1/announcement/active/timeline`);
  }
  /**
   * AUDIO
   */

  /**
   * Requests the currently active audio playlist
   * @returns The currently active audio playlist
   */
  audioGetPlaylistActive() {
    return this.sendRequestToProPresenter(`/v1/audio/playlist/active`);
  }
  /**
   * Focuses the active audio playlist.
   */
  audioPlaylistActiveFocus() {
    return this.sendRequestToProPresenter(`/v1/audio/playlist/active/focus`);
  }
  /**
   * Triggers the next item in the active audio playlist.
   */
  audioPlaylistActiveNextTrigger() {
    return this.sendRequestToProPresenter(
      `/v1/audio/playlist/active/next/trigger`
    );
  }
  /**
   * Triggers the previous item in the active audio playlist.
   */
  audioPlaylistActivePreviousTrigger() {
    return this.sendRequestToProPresenter(
      `/v1/audio/playlist/active/previous/trigger`
    );
  }
  /**
   * Triggers the active audio playlist (restarts from the beginning).
   */
  audioPlaylistActiveTrigger() {
    return this.sendRequestToProPresenter(`/v1/audio/playlist/active/trigger`);
  }
  /**
   * Triggers the specified item in the active audio playlist.
   * @params {string} id
   */
  audioPlaylistActiveIdTrigger(id) {
    return this.sendRequestToProPresenter(`/v1/audio/playlist/active/${id}/trigger`);
  }
  /**
   * Requests the currently focused audio playlist
   * @returns The currently focused audio playlist
   */
  audioGetPlaylistFocused() {
    return this.sendRequestToProPresenter(`/v1/audio/playlist/focused`);
  }
  /**
   * Triggers the next item in the focused audio playlist.
   */
  audioPlaylistFocusedNextTrigger() {
    return this.sendRequestToProPresenter(`/v1/audio/playlist/focused/next/trigger`);
  }
  /**
   * Triggers the previous item in the focused audio playlist.
   */
  audioPlaylistFocusedPreviousTrigger() {
    return this.sendRequestToProPresenter(`/v1/audio/playlist/focused/previous/trigger`);
  }
  /**
   * Triggers the focused audio playlist.
   */
  audioPlaylistFocusedTrigger() {
    return this.sendRequestToProPresenter(`/v1/audio/playlist/focused/trigger`);
  }
  /**
   * Triggers the specified item in the focused audio playlist.
   * @params {string} id
   */
  audioPlaylistFocusedIdTrigger(id) {
    return this.sendRequestToProPresenter(`/v1/audio/playlist/focused/${id}/trigger`);
  }
  /**
   * Focuses the next audio playlist.
   */
  audioPlaylistNextFocus() {
    return this.sendRequestToProPresenter(`/v1/audio/playlist/next/focus`);
  }
  /**
   * Focuses the previous audio playlist.
   */
  audioPlaylistPreviousFocus() {
    return this.sendRequestToProPresenter(`/v1/audio/playlist/previous/focus`);
  }
  /**
   * Requests a list of all the audio items in the specified audio playlist.
   * @param {string} playlist_id
   * @returns a list of all the audio items in the specified audio playlist.
   */
  audioGetPlaylistByPlaylistId(playlist_id) {
    return this.sendRequestToProPresenter(`/v1/audio/playlist/${playlist_id}`);
  }
  /**
   * Focuses the specified audio playlist.
   * @param {string} playlist_id
   */
  audioFocusPlaylistByPlaylistId(playlist_id) {
    return this.sendRequestToProPresenter(`/v1/audio/playlist/${playlist_id}/focus`);
  }
  /**
   * Triggers the next item in the specified audio playlist.
   * @param {string} playlist_id
   */
  audioPlaylistByPlaylistIdNextTrigger(playlist_id) {
    return this.sendRequestToProPresenter(
      `/v1/audio/playlist/${playlist_id}/next/trigger`
    );
  }
  /**
   * Triggers the previous item in the specified audio playlist.
   * @param {string} playlist_id
   */
  audioPlaylistByPlaylistIdPreviousTrigger(playlist_id) {
    return this.sendRequestToProPresenter(
      `/v1/audio/playlist/${playlist_id}/previous/trigger`
    );
  }
  /**
   * Triggers the specified audio playlist.
   * @param {string} playlist_id
   */
  audioPlaylistByPlaylistIdTrigger(playlist_id) {
    return this.sendRequestToProPresenter(`/v1/audio/playlist/${playlist_id}/trigger`);
  }
  /**
   * Requests a chunked data update every time the specified audio playlist changes.
   * @param {string} playlist_id
   * @returns a chunked data update every time the specified audio playlist changes.
   * TODO: returns nothing unless chunked parameter is set to true - this seem redundant as you can register a status update callback for /audio/playlist/{playlist_id}
   */
  audioGetPlaylistsByPlaylistIdUpdates(playlist_id) {
    return this.sendRequestToProPresenter(`/v1/audio/playlists/${playlist_id}/updates`);
  }
  /**
   * Requests a list with all the configured audio playlists.
   * @returns a list with all the configured audio playlists.
   */
  audioGetPlaylists() {
    return this.sendRequestToProPresenter(`/v1/audio/playlists`);
  }
  /**
   * CAPTURE
   */

  /**
   * Requests the current capture status and capture time.
   * @returns The current capture status and capture time.
   */
  captureGetStatus() {
    return this.sendRequestToProPresenter(`/v1/capture/status`);
  }
  /**
   * Performs the requested capture operation (start, stop).
   * @param {ProPresenterCaptureOperation} operation
   */
  captureOperation(operation: ProPresenterCaptureOperation ) {
    return this.sendRequestToProPresenter(`/v1/capture/${operation}`);
  }
  /**
   * Requests the current capture settings.
   * @returns The current capture settings.
   */
  captureGetsettings() {
    return this.sendRequestToProPresenter(`/v1/capture/settings`);
  }
  /**
   * Requests a list of all available capture modes for the capture type (disk, rtmp, resi).
   * @param {ProPresenterCaptureType} type
   * @returns A list of all available capture modes for the capture type (disk, rtmp, resi).
   */
  captureEncodingsType(type: ProPresenterCaptureType ) {
    return this.sendRequestToProPresenter(`/v1/capture/encodings/${type}`);
  }
  /**
   * CLEAR
   */
  /**
   * Clears the specified layer (audio, props, messages, announcements, slide, media, video_input).
   * @param {ProPresenterLayerName} layer
   */
  clearLayer(layer: ProPresenterLayerName) {
    return this.sendRequestToProPresenter(`/v1/clear/layer/${layer}`);
  }
  /**
   * Requests the details of the specified clear group.
   * @param {string} id (name, index or UUID)
   * @returns The details of the specified clear group.
   */
  clearGetGroupId(id: string) {
    return this.sendRequestToProPresenter(`/v1/clear/group/${id}`);
  }
  /**
   * Sets the details of the specified clear group.
   * @param {string} id (name, index or UUID)
   * @returns The details of the specified clear group.
   */
  clearSetGroupId(id: string) {
    return this.sendRequestToProPresenter(`/v1/clear/group/${id}`, {
      method: "PUT",
    });
  }
  /**
   * Deletes the specified clear group.
   * @param {string} id (name, index or UUID)
   */
  clearDeleteGroupId(id: string) {
    return this.sendRequestToProPresenter(`/v1/clear/group/${id}`, {
      method: "DELETE",
    });
  }
  /**
   * Requests the image data for the icon of the specified clear group.
   * @param {string} id (name, index or UUID)
   * @returns The image data for the icon of the specified clear group.
   */
  clearGetGroupIdIcon(id: string) {
    return this.sendRequestToProPresenter(`/v1/clear/group/${id}/icon`);
  }
  /**
   * Sets the custom icon of the specified clear group.
   * @param {string} id (name, index or UUID)
   * @returns
   */
  clearSetGroupIdIcon(id: string) {
    return this.sendRequestToProPresenter(`/v1/clear/group/${id}/icon`, {
      method: "PUT",
    });
  }
  /**
   * Triggers the specified clear group.
   * @param {string} id (name, index or UUID)
   */
  clearGroupIdTrigger(id: string) {
    return this.sendRequestToProPresenter(`/v1/clear/group/${id}/trigger`);
  }
  /**
   * Requests a list of all the configured clear groups.
   * @returns A list of all the configured clear groups.
   */
  clearGetGroup() {
    return this.sendRequestToProPresenter(`/v1/clear/groups`);
  }
  /**
   * DOUBLE CHECK THIS FOR MISSING PARAMS
   * Create a clear group with the details specified.
   * @param {sting} name
   * @param {string[]} layers
   * @param {boolean} stop_timeline_announcements
   * @param {boolean} stop_timeline_presentation
   * @param {boolean} clear_next_presentation
   * @returns The created group.
   */
  clearCreateGroup(
    name: string,
    layers: string[],
    stop_timeline_announcements: boolean,
    stop_timeline_presentation: boolean,
    clear_next_presentation: boolean
  ) {
    return this.sendRequestToProPresenter(`/v1/clear/groups`, {
      method: "POST",
      body: {
        id: {
          id: "942C3FC3-C4B2-44F7-A55D-4CC913BB8A5D", // ignored
          name: name,
          index: 3, // ignored
        },
        icon: "All",
        tint: {
          red: 0,
          green: 0.54,
          blue: 0.87,
          alpha: 1,
        },
        layers: layers,
        stop_timeline_announcements: stop_timeline_announcements,
        stop_timeline_presentation: stop_timeline_presentation,
        clear_next_presentation: clear_next_presentation,
      },
    });
  }
  /**
   * GLOBAL GROUPS
   */
  /**
   * Requests a list of all the configured global groups.
   * @returns A list of all the configured global groups.
   */
  groupsGet() {
    return this.sendRequestToProPresenter(`/v1/groups`);
  }

  /**
   * LIBRARY
   */

  /**
   * Requests a list of all the configured libraries.
   * @returns A list of all the configured libraries.
   */
  libraryGet() {
    return this.sendRequestToProPresenter(`/v1/libraries`);
  }
  /**
   * Requests an array of all items in the specified library.
   * @params { string } id (UUID, name, or index)
   * @returns An array of all items in the specified library.
   */
  libraryGetById(id: string) {
    return this.sendRequestToProPresenter(`/v1/library/${id}`);
  }

  /**
   * Triggers the first cue of the specified presentation in the specified library.
   * @param library_id
   * @param presentation_id
   */
  libraryByIdPresentationIdTrigger(
    library_id: string,
    presentation_id: string
  ) {
    return this.sendRequestToProPresenter(
      `/v1/library/${library_id}/${presentation_id}/trigger`
    );
  }
  /**
   * Triggers the specified cue of the specified presentation in the specified library.
   * @param library_id
   * @param presentation_id
   * @param cue
   */
  libraryByIdPresentationIdCueTrigger(
    library_id: string,
    presentation_id: string,
    cue: string
  ) {
    return this.sendRequestToProPresenter(
      `/v1/library/${library_id}/${presentation_id}/${cue}/trigger`
    );
  }
  /**
   * LOOKS
   */

  /**
   * Requests a list of all configured audience looks, except the live look.
   * @returns A list of all configured audience looks, except the live look.
   */
  lookGet() {
    return this.sendRequestToProPresenter(`/v1/looks`);
  }
  // /**
  //  * Creates a new audience look with the specified details.
  //  */
  // lookCreate() {
  //   return this.sendRequestToProPresenter(`/v1/looks`, { method: "POST" });
  // }
  /**
   * Requests the details of the currently live audience look.
   * @returns The details of the currently live audience look.
   */
  lookGetCurrent() {
    return this.sendRequestToProPresenter(`/v1/looks/current`);
  }
  /**
   * Requests the details of the currently live audience look.
   * @returns The details of the currently live audience look.
   */
  lookSetCurrent() {
    return this.sendRequestToProPresenter(`/v1/looks/current`, { method: "PUT" });
  }
  /**
   * Requests the details of the specified audience look.
   * @param {string} id
   * @returns The details of the specified audience look.
   */
  lookGetId(id: string) {
    return this.sendRequestToProPresenter(`/v1/looks${id}`);
  }
  /**
   * Sets the details of the specified audience look.
   * @param {string} id
   */
  lookSetId(id: string) {
    return this.sendRequestToProPresenter(`/v1/looks${id}`, { method: "PUT" });
  }
  /**
   * Deletes the specified audience look from the saved looks.
   * @param {string} id
   */
  lookDeleteId(id: string) {
    return this.sendRequestToProPresenter(`/v1/looks${id}`, { method: "DELETE" });
  }
  /**
   * Triggers the specified audience look to make it the live/current look.
   * @param {string} id
   */
  lookIdTrigger(id: string) {
    return this.sendRequestToProPresenter(`/v1/looks${id}/trigger`);
  }
  /**
   * MACRO
   */

  /**
   * Requests a list of all the configured macros.
   * @returns A list of all the configured macros.
   */
  marcosGet() {
    return this.sendRequestToProPresenter(`/v1/macros`);
  }
  /**
   * Requests the details of the specified macro.
   * @param {string} id
   * @returns The details of the specified macro.
   */
  marcosIdGet(id: string) {
    return this.sendRequestToProPresenter(`/v1/macros${id}`);
  }
  /**
   * Sets the details of the specified macro.
   * @param {string} id
   */
  marcosIdSet(id: string) {
    return this.sendRequestToProPresenter(`/v1/macros${id}`, { method: "PUT" });
  }
  /**
   * Deletes the specified macro.
   * @param {string} id
   */
  marcosIdDelete(id: string) {
    return this.sendRequestToProPresenter(`/v1/macros${id}`, {
      method: "DELETE",
    });
  }
  /**
   * Triggers the specified macro.
   * @param {string} id
   */
  marcosIdTriggerGet(id: string) {
    return this.sendRequestToProPresenter(`/v1/macros${id}/trigger`);
  }
  /**
   * MASKS
   */
  /**
   * Requests a list of all configured masks.
   * @returns A list of all configured masks.
   */
  masksGet() {
    return this.sendRequestToProPresenter(`/v1/masks`);
  }
  /**
   * Requests the details of the specified mask.
   * @param {string} id
   * @returns The details of the specified mask.
   */
  masksIdGet(id: string) {
    return this.sendRequestToProPresenter(`/v1/masks/${id}`);
  }
  /**
   * Requests a thumbnail image of the specified mask at the given quality value.
   * @param {string} id
   * @returns A thumbnail image of the specified mask at the given quality value.
   */
  masksIdThumbnailGet(id: string) {
    return this.sendRequestToProPresenter(`/v1/masks/${id}/thumbnail`);
  }
  /**
   * MEDIA
   */
  /**
   * Requests a list of all the configured media playlists.
   * @returns A list of all the configured media playlists.
   */
  mediaPlaylistsGet() {
    return this.sendRequestToProPresenter(`/v1/media/playlists`);
  }
  /**
   * Requests a list of all the media items in the specified media playlist.
   * @param {string} playlist_id
   * @returns A list of all the media items in the specified media playlist.
   */
  mediaPlaylistByPlaylistIdGet(playlist_id: string) {
    return this.sendRequestToProPresenter(`/v1/media/playlist/${playlist_id}`);
  }
  /**
   * Requests a chunked data update every time the specified media playlist changes.
   * @param {string} playlist_id
   * @returns A chunked data update every time the specified media playlist changes.
   */
  mediaPlaylistByPlaylistIdUpdatesGet(playlist_id: string) {
    return this.sendRequestToProPresenter(
      `/v1/media/playlist/${playlist_id}/updates`
    );
  }
  /**
   * Requests a thumbnail image of the specified media item at the given quality value.
   * @param {string} playlist_id
   * @returns A thumbnail image of the specified media item at the given quality value.
   */
  mediaByUUIDThumbnailsGet(uuid: string) {
    return this.sendRequestToProPresenter(`/v1/media/${uuid}/thumbnail`);
  }
  /**
   * Returns the identifier of the currently focused media playlist
   * @returns The identifier of the currently focused media playlist
   */
  mediaPlaylistFocusedGet() {
    return this.sendRequestToProPresenter(`/v1/media/playlist/focused`);
  }
  /**
   * Returns the identifier of the currently active media playlist.
   * @returns The identifier of the currently active media playlist
   */
  mediaPlaylistActiveGet() {
    return this.sendRequestToProPresenter(`/v1/media/playlist/active`);
  }
  /**
   * Sets the focus to the next media playlist.
   */
  mediaPlaylistNextFocus() {
    return this.sendRequestToProPresenter(`/v1/media/playlist/next/focus`);
  }
  /**
   * Sets the focus to the previous media playlist.
   */
  mediaPlaylistPreviousFocus() {
    return this.sendRequestToProPresenter(`/v1/media/playlist/previous/focus`);
  }
  /**
   * Sets the focus to the active media playlist.
   */
  mediaPlaylistActiveFocus() {
    return this.sendRequestToProPresenter(`/v1/media/playlist/active/focus`);
  }
  /**
   * Sets the focus to the specified media playlist.
   * @param {string} playlist_id
   */
  mediaPlaylistPlaylistIdFocus(playlist_id: string) {
    return this.sendRequestToProPresenter(
      `/v1/media/playlist/${playlist_id}/focus`
    );
  }
  /**
   * Triggers the first item in the focused media playlist.
   */
  mediaPlaylistFocusedTrigger() {
    return this.sendRequestToProPresenter(`/v1/media/playlist/focused/trigger`);
  }
  /**
   * Triggers the first item in the active media playlist.
   */
  mediaPlaylistActiveTrigger() {
    return this.sendRequestToProPresenter(`/v1/media/playlist/active/trigger`);
  }
  /**
   * Triggers the first item in the specified media playlist.
   * @param {string} playlist_id
   */
  mediaPlaylistPlaylistIdTrigger(playlist_id: string) {
    return this.sendRequestToProPresenter(
      `/v1/media/playlist/${playlist_id}/trigger`
    );
  }
  /**
   * Triggers the next item in the focused media playlist.
   */
  mediaPlaylistFocusedNextTrigger() {
    return this.sendRequestToProPresenter(
      `/v1/media/playlist/focused/next/trigger`
    );
  }
  /**
   * Triggers the previous item in the focused media playlist.
   */
  mediaPlaylistFocusedPreviousTrigger() {
    return this.sendRequestToProPresenter(
      `/v1/media/playlist/focused/previous/trigger`
    );
  }
  /**
   * Triggers the specified item in the focused media playlist.
   * @param {string} media_id
   */
  mediaPlaylistFocusedMediaIdTrigger(media_id: string) {
    return this.sendRequestToProPresenter(
      `/v1/media/playlist/focused/${media_id}/trigger`
    );
  }
  /**
   * Triggers the next item in the active media playlist.
   */
  mediaPlaylistActiveNextTrigger() {
    return this.sendRequestToProPresenter(
      `/v1/media/playlist/active/next/trigger`
    );
  }
  /**
   * Triggers the previous item in the active media playlist.
   */
  mediaPlaylistActivePreviousTrigger() {
    return this.sendRequestToProPresenter(
      `/v1/media/playlist/active/previous/trigger`
    );
  }
  /**
   * Triggers the specified item in the active media playlist.
   * @param {string} media_id
   */
  mediaPlaylistActiveMediaIdTrigger(media_id: string) {
    return this.sendRequestToProPresenter(
      `/v1/media/playlist/active/${media_id}/trigger`
    );
  }
  /**
   * Triggers the next item in the specified media playlist.
   * @param {string} playlist_id
   */
  mediaPlaylistPlaylistIdNextTrigger(playlist_id: string) {
    return this.sendRequestToProPresenter(
      `/v1/media/playlist/${playlist_id}/next/trigger`
    );
  }
  /**
   * Triggers the previous item in the specified media playlist.
   * @param {string} playlist_id
   */
  mediaPlaylistPlaylistIdPreviousTrigger(playlist_id: string) {
    return this.sendRequestToProPresenter(
      `/v1/media/playlist/${playlist_id}/previous/trigger`
    );
  }
  /**
   * Triggers the previous item in the specified media playlist.
   * @param {string} playlist_id
   * @param {string} media_id
   */
  mediaPlaylistPlaylistIdMediaIdTrigger(playlist_id: string, media_id: string) {
    return this.sendRequestToProPresenter(
      `/v1/media/playlist/${playlist_id}/${media_id}/trigger`
    );
  }

  /**
   * MESSAGE
   */

  /**
   * Requests a list of all configured messages.
   * @returns A list of all configured messages.
   */
  messagesGet() {
    return this.sendRequestToProPresenter(`/v1/messages`);
  }
  // /**
  //  * Creates a new message with specified details.
  //  * @param TODO
  //  */
  // messagesCreate() {
  //   return this.sendRequestToProPresenter(`/v1/message`, { method: "POST" });
  // }
  /**
   * Requests the details of the specified message.
   * @returns The details of the specified message.
   * @param {string} id
   */
  messagesIdGet(id: string) {
    return this.sendRequestToProPresenter(`/v1/message${id}`);
  }
  /**
   * Sets the details of the specified message.
   * @param {string} id
   */
  messagesIdSet(id: string) {
    return this.sendRequestToProPresenter(`/v1/message${id}`, { method: "PUT" });
  }
  /**
   * Deletes the specified message.
   * @param {string} id
   */
  messagesIdDelete(id: string) {
    return this.sendRequestToProPresenter(`/v1/message${id}`, {
      method: "DELETE",
    });
  }
  // /**
  //  * Triggers / Shows the specified message.
  //  * @param {string} id
  //  */
  // messagesIdTrigger(id: string) {
  //   return this.sendRequestToProPresenter(`/v1/message${id}/trigger`, {
  //     method: "POST",
  //   });
  // }
  /**
   * Clears / Hides the specified message.
   * @param {string} id
   */
  messagesIdClear(id: string) {
    return this.sendRequestToProPresenter(`/v1/message${id}/clear`);
  }
  /**
   * MISCELLANEOUS
   */

  /**
   * Executes the "Find My Mouse" operation.
   */
  findMyMouse() {
    return this.sendRequestToProPresenter(`/v1/find_my_mouse`);
  }

  /**
   * PLAYLIST
   */

  /**
   * Requests a list of all configured playlists.
   * @returns A list of all configured playlists.
   */
  playlistsGet() {
    return this.sendRequestToProPresenter(`/v1/playlists`);
  }
  // /**
  //  * Creates a playlist with the specified details.
  //  */
  // playlistsCreate() {
  //   return this.sendRequestToProPresenter(`/v1/playlists`, { method: "POST" });
  // }
  /**
   * Requests a list of the items in the specified playlist.
   * @returns Alist of the items in the specified playlist.
   */
  playlistPlaylistIdGet(playlist_id: string) {
    return this.sendRequestToProPresenter(`/v1/playlist/${playlist_id}`);
  }
  /**
   * Sets the contents of the specified playlist.
   */
  playlistPlaylistIdSet(playlist_id: string) {
    return this.sendRequestToProPresenter(`/v1/playlist/${playlist_id}`, {
      method: "PUT",
    });
  }
  // /**
  //  * Creates a playlist with the specified details underneath the specified playlist or playlist folder.
  //  */
  // playlistPlaylistIdCreate(playlist_id: string) {
  //   return this.sendRequestToProPresenter(`/v1/playlist/${playlist_id}`, {
  //     method: "POST",
  //   });
  // }
  /**
   * Requests the details of the active playlist.
   * @returns The details of the active playlist.
   */
  playlistActiveGet() {
    return this.sendRequestToProPresenter(`/v1/playlist/active`);
  }
  /**
   * Requests the details of the currently focused playlist.
   * @returns The details of the currently focused playlist.
   */
  playlistFocusedGet() {
    return this.sendRequestToProPresenter(`/v1/playlist/focused`);
  }
  /**
   * Moves the focus to the next playlist.
   */
  playlistNextFocus() {
    return this.sendRequestToProPresenter(`/v1/playlist/next/focus`);
  }
  /**
   * Moves the focus to the previous playlist.
   */
  playlistPreviousFocus() {
    return this.sendRequestToProPresenter(`/v1/playlist/previous/focus`);
  }
  /**
   * Moves the focus to the currently active playlist for the presentation destination.
   */
  playlistActivePresentationFocus() {
    return this.sendRequestToProPresenter(
      `/v1/playlist/active/presentation/focus`
    );
  }
  /**
   * Moves the focus to the currently active playlist for the announcement destination.
   */
  playlistActiveAnnouncementFocus() {
    return this.sendRequestToProPresenter(
      `/v1/playlist/active/announcement/focus`
    );
  }
  /**
   * Triggers the first item in the currently focused playlist.
   */
  playlistFocusedTrigger() {
    return this.sendRequestToProPresenter(`/v1/playlist/focused/trigger`);
  }
  /**
   * Triggers the first item in the currently active playlist for the presentation destination.
   */
  playlistActivePresentationTrigger() {
    return this.sendRequestToProPresenter(
      `/v1/playlist/active/presentation/trigger`
    );
  }
  /**
   * Triggers the first item in the currently active playlist for the announcement destination.
   */
  playlistActiveAnnouncementTrigger() {
    return this.sendRequestToProPresenter(
      `/v1/playlist/active/announcement/trigger`
    );
  }
  /**
   * Triggers the next item in the currently focused playlist.
   */
  playlistFocusedNextTrigger() {
    return this.sendRequestToProPresenter(`/v1/playlist/focused/next/trigger`);
  }
  /**
   * Triggers the previous item in the currently focused playlist.
   */
  playlistFocusedPreviousTrigger() {
    return this.sendRequestToProPresenter(
      `/v1/playlist/focused/previous/trigger`
    );
  }
  /**
   * Requests a chunked data update every time the specified audio playlist changes.
   * @param {string} identifier
   * @returns A chunked data update every time the specified audio playlist changes.
   */
  playlistIdentifierUpdates(identifier: string) {
    return this.sendRequestToProPresenter(`/v1/playlist/${identifier}/updates`);
  }
  /**
   * Moves the focus to the specified playlist.
   * @param {string} identifier
   */
  playlistIdentifierFocus(identifier: string) {
    return this.sendRequestToProPresenter(`/v1/playlist/${identifier}/focus`);
  }
  /**
   * Triggers the first item in the specified playlist.
   * @param {string} identifier
   */
  playlistIdentifierTrigger(identifier: string) {
    return this.sendRequestToProPresenter(`/v1/playlist/${identifier}/trigger`);
  }
  /**
   * Triggers the next item in the specified playlist.
   * @param {string} identifier
   */
  playlistIdentifierNextTrigger(identifier: string) {
    return this.sendRequestToProPresenter(
      `/v1/playlist/${identifier}/next/trigger`
    );
  }
  /**
   * Triggers the previous item in the specified playlist.
   * @param {string} identifier
   */
  playlistIdentifierPreviousTrigger(identifier: string) {
    return this.sendRequestToProPresenter(
      `/v1/playlist/${identifier}/previous/trigger`
    );
  }
  /**
   * Triggers the specified item in the specified playlist.
   * @param {string} identifier
   * @param {string} index
   */
  playlistIdentifierIndexTrigger(identifier: string, index: string) {
    return this.sendRequestToProPresenter(
      `/v1/playlist/${identifier}/${index}/trigger`
    );
  }
  /**
   * Triggers the specified item in the focused playlist.
   * @param {string} index
   */
  playlistFocusedIndexTrigger(index: string) {
    return this.sendRequestToProPresenter(
      `/v1/playlist/focused/${index}/trigger`
    );
  }
  /**
   * Triggers the specified item in the currently active playlist for the presentation destination.
   * @param {string} index
   */
  playlistActivePresentationIndexTrigger(index: string) {
    return this.sendRequestToProPresenter(
      `/v1/playlist/active/presentation/${index}/trigger`
    );
  }
  /**
   * Triggers the specified item in the currently active playlist for the announcement destination.
   * @param {string} index
   */
  playlistActiveAnnouncementIndexTrigger(index: string) {
    return this.sendRequestToProPresenter(
      `/v1/playlist/active/announcement/${index}/trigger`
    );
  }
  /**
   * PRESENTATION
   */

  /**
   * Requests the details of the currently active presentation.
   * @returns The details of the currently active presentation.
   */
  presentationActiveGet() {
    return this.sendRequestToProPresenter(`/v1/presentation/active`);
  }
  /**
   * Gets the currently focused presentation.
   * @returns The currently focused presentation.
   */
  presentationFocusedGet() {
    return this.sendRequestToProPresenter(`/v1/presentation/focused`);
  }
  /**
   * Requests the index of the current slide/cue within the currently active presentation.
   * @returns The index of the current slide/cue within the currently active presentation.
   */
  presentationSlideIndexGet() {
    return this.sendRequestToProPresenter(`/v1/presentation/slide_index`);
  }
  /**
   * Requests the current chord chart image (if available) at the given quality value.
   * @returns The current chord chart image (if available) at the given quality value.
   */
  presentationChordChartGet() {
    return this.sendRequestToProPresenter(`/v1/presentation/chord_chart`);
  }
  /**
   * Requests a chunked data update every time the chord chart changes.
   * @returns A chunked data update every time the chord chart changes.
   */
  presentationChordChartUpdates() {
    return this.sendRequestToProPresenter(`/v1/presentation/chord_chart/updates`);
  }
  /**
   * Requests the details of the specified presentation.
   * @param {string} uuid
   * @returns The details of the specified presentation.
   */
  presentationUUIDGet(uuid: string) {
    return this.sendRequestToProPresenter(`/v1/presentation/${uuid}`);
  }
  /**
   * Requests the current state of the active presentation timeline.
   * @returns The current state of the active presentation timeline.
   */
  presentationActiveTimeline() {
    return this.sendRequestToProPresenter(`/v1/presentation/active/timeline`);
  }
  /**
   * Requests the current state of the focused presentation timeline.
   * @returns The current state of the focused presentation timeline.
   */
  presentationFocusedTimeline() {
    return this.sendRequestToProPresenter(`/v1/presentation/focused/timeline`);
  }
  /**
   * Performs the requested timeline operation for the currently active presentation (play, pause, rewind).
   * @param {ProPresenterTimelineOperation} operation
   */
  presentationActiveTimelineOperation(operation: ProPresenterTimelineOperation) {
    return this.sendRequestToProPresenter(
      `/v1/presentation/active/timeline/${operation}`
    );
  }
  /**
   * Performs the requested timeline operation for the currently focused presentation (play, pause, rewind).
   * @param {ProPresenterTimelineOperation} operation
   */
  presentationFocusedTimelineOperation(operation: ProPresenterTimelineOperation) {
    return this.sendRequestToProPresenter(
      `/v1/presentation/focused/timeline/${operation}`
    );
  }
  /**
   * Performs the requested timeline operation for the specified presentation (play, pause, rewind).
   * @param {string} uuid
   * @param {ProPresenterTimelineOperation} operation
   */
  presentationUUIDFocusedTimelineOperation(
    uuid: string,
    operation: ProPresenterTimelineOperation
  ) {
    return this.sendRequestToProPresenter(
      `/v1/presentation/${uuid}/timeline/${operation}`
    );
  }
  /**
   * Requests a thumbnail image of the specified cue inside the specified presentation at the given quality value.
   * @param {string} uuid
   * @param {string} index
   * @retuns A thumbnail image of the specified cue inside the specified presentation at the given quality value.
   */
  presentationUUIDThumbnailIndex(uuid: string, index: string) {
    return this.sendRequestToProPresenter(
      `/v1/presentation/${uuid}/thumbnail/${index}`
    );
  }

  /**
   * Sets the focus to the next presentation.
   */
  presentationNextFocus() {
    return this.sendRequestToProPresenter(`/v1/presentation/next/focus`);
  }
  /**
   * Sets the focus to the previous presentation.
   */
  presentationPreviousFocus() {
    return this.sendRequestToProPresenter(`/v1/presentation/previous/focus`);
  }
  /**
   * Sets the focus to the active presentation.
   */
  presentationActiveFocus() {
    return this.sendRequestToProPresenter(`/v1/presentation/active/focus`);
  }
  /**
   * Sets the focus to the specified presentation.
   * @param {string} uuid
   */
  presentationUUIDFocus(uuid: string) {
    return this.sendRequestToProPresenter(`/v1/presentation/${uuid}/focus`);
  }
  /**
   * Triggers the focused presentation.
   */
  presentationFocusedTrigger() {
    return this.sendRequestToProPresenter(`/v1/presentation/focused/trigger`);
  }
  /**
   * Triggers the next cue of the focused presentation.
   */
  presentationFocusedNextTrigger() {
    return this.sendRequestToProPresenter(
      `/v1/presentation/focused/next/trigger`
    );
  }
  /**
   * Triggers the previous cue of the focused presentation.
   */
  presentationFocusedPreviousTrigger() {
    return this.sendRequestToProPresenter(
      `/v1/presentation/focused/previous/trigger`
    );
  }
  /**
   * Triggers the specified cue of the focused presentation.
   * @param {string} index
   */
  presentationFocusedIndexTrigger(index: string) {
    return this.sendRequestToProPresenter(
      `/v1/presentation/focused/${index}/trigger`
    );
  }
  /**
   * Retriggers the active presentation from the start.
   */
  presentationActiveTrigger() {
    return this.sendRequestToProPresenter(`/v1/presentation/active/trigger`);
  }
  /**
   * Triggers the next cue of the active presentation.
   */
  presentationActiveNextTrigger() {
    return this.sendRequestToProPresenter(`/v1/presentation/active/next/trigger`);
  }
  /**
   * Triggers the previous cue of the active presentation.
   */
  presentationActivePreviousTrigger() {
    return this.sendRequestToProPresenter(
      `/v1/presentation/active/previous/trigger`
    );
  }
  /**
   * Triggers the specified cue of the active presentation.
   * @param {string} index
   */
  presentationActiveIndexTrigger(index: string) {
    return this.sendRequestToProPresenter(
      `/v1/presentation/active/${index}/trigger`
    );
  }
  /**
   * Triggers the specified presentation.
   * @param {string} uuid
   */
  presentationUUIDTrigger(uuid: string) {
    return this.sendRequestToProPresenter(`/v1/presentation/${uuid}/trigger`);
  }
  /**
   * Triggers the next cue of the specified presentation.
   */
  presentationUUIDNextTrigger(uuid: string) {
    return this.sendRequestToProPresenter(
      `/v1/presentation/${uuid}/next/trigger`
    );
  }
  /**
   * Triggers the previous cue of the specified presentation.
   */
  presentationUUIDPreviousTrigger(uuid: string) {
    return this.sendRequestToProPresenter(
      `/v1/presentation/${uuid}/previous/trigger`
    );
  }
  /**
   * Triggers the specified cue of the specified presentation.
   * @param {string} index
   */
  presentationUUIDIndexTrigger(uuid: string, index: string) {
    return this.sendRequestToProPresenter(
      `/v1/presentation/${uuid}/${index}/trigger`
    );
  }
  /**
   * Triggers the specified group of the focused presentation.
   * @param {string} group_id
   */
  presentationFocusedGroupGroup_IdTrigger(group_id: string) {
    return this.sendRequestToProPresenter(
      `/v1/presentation/focused/group/${group_id}/trigger`
    );
  }
  /**
   * Triggers the specified group of the active presentation.
   * @param {string} group_id
   */
  presentationActiveGroupGroup_IdTrigger(group_id: string) {
    return this.sendRequestToProPresenter(
      `/v1/presentation/active/group/${group_id}/trigger`
    );
  }
  /**
   * Triggers the specified group of the specified presentation.
   * @param {string} uuid
   * @param {string} group_id
   */
  presentationUUIDGroupGroup_IdTrigger(uuid: string, group_id: string) {
    return this.sendRequestToProPresenter(
      `/v1/presentation/${uuid}/group/${group_id}/trigger`
    );
  }

  /**
   * PROP
   */

  /**
   * Gets a list of all the props.
   * @returns A list of all the props.
   */
  propGet() {
    return this.sendRequestToProPresenter(`/v1/props`);
  }
  /**
   * Requests the details of the specified prop.
   * @param id
   * @returns The details of the specified prop.
   */
  propId(id: string) {
    return this.sendRequestToProPresenter(`/v1/prop/${id}`);
  }

  /**
   * Deletes the specified prop.
   * @param id
   */
  propIdDelete(id: string) {
    return this.sendRequestToProPresenter(`/v1/prop/${id}`, { method: "DELETE" });
  }

  /**
   * Triggers the specified prop.
   * @param id
   */
  propIdTrigger(id: string) {
    return this.sendRequestToProPresenter(`/v1/prop/${id}/trigger`);
  }
  /**
   * Clears the specified prop.
   * @param id
   */
  propIdClear(id: string) {
    return this.sendRequestToProPresenter(`/v1/prop/${id}/clear`);
  }
  /**
   * Requests a thumbnail image of the specified prop at the given quality value.
   * @param id
   * @returns A thumbnail image of the specified prop at the given quality value.
   */
  propIdThumbnail(id: string) {
    return this.sendRequestToProPresenter(`/v1/prop/${id}/thumbnail`);
  }

  /**
   * STAGE
   */

  /**
   * Requests the currently active stage message.
   * @returns The currently active stage message.
   */
  stageMessageGet() {
    return this.sendRequestToProPresenter(`/v1/stage/message`);
  }
  /**
   * Shows the specified stage message on the configured stage screen.
   */
  stageMessage() {
    return this.sendRequestToProPresenter(`/v1/stage/message`, { method: "PUT" });
  }
  /**
   * Hides the currently displayed stage message from the configured stage screen.
   */
  stageMessageHide() {
    return this.sendRequestToProPresenter(`/v1/stage/message`, {
      method: "DELETE",
    });
  }
  /**
   * Requests the currently selected stage layout for each configured stage screen.
   * @returns The currently selected stage layout for each configured stage screen.
   */
  stageLayoutMap() {
    return this.sendRequestToProPresenter(`/v1/stage/layout_map`);
  }
  /**
   * Sets the specified stage message to the corresponding stage screens.
   * NOT READY
   */
  stageLayoutMapSet() {
    return this.sendRequestToProPresenter(`/v1/stage/layout_map`, {
      method: "PUT",
    });
  }
  /**
   * Requests a list of the configured stage screens.
   * @returns A list of the configured stage screens.
   */
  stageScreensGet() {
    return this.sendRequestToProPresenter(`/v1/stage/screens`);
  }
  /**
   * Requests the current stage layout for the specified stage screen.
   * @param id
   * @returns The current stage layout for the specified stage screen.
   */
  stageScreenIdLayout(id: string) {
    return this.sendRequestToProPresenter(`/v1/stage/screen/${id}/layout`);
  }
  /**
   * Sets the specified stage layout for the specified stage screen.
   * @param id
   * @param layout_id
   */
  stageScreenIdLayoutId(id: string, layout_id: string) {
    return this.sendRequestToProPresenter(
      `/v1/stage/screen/${id}/layout/${layout_id}`
    );
  }

  /**
   * Requests a list of the configured stage layouts.
   * @returns A list of the configured stage layouts.
   */
  stageLayoutsGet() {
    return this.sendRequestToProPresenter(`/v1/stage/layouts`);
  }
  /**
   * Deletes the specified stage layout.
   */
  stageLayoutIdDelete(id: string) {
    return this.sendRequestToProPresenter(`/v1/stage/layout/${id}`, {
      method: "DELETE",
    });
  }
  /**
   * Requests a thumbnail image of the specified stage layout at the given quality value.
   * @returns A thumbnail image of the specified stage layout at the given quality value.
   */
  stageLayoutIdThumbnail(id: string) {
    return this.sendRequestToProPresenter(`/v1/stage/layout/${id}/thumbnail`);
  }

  /**
   * STATUS
   */

  /**
   * Requests the general information about the currently active ProPresenter instance
   * @returns General information about the currently active ProPresenter instance
   */
  version() {
    return this.sendRequestToProPresenter(`/version`);
  }

  /**
   * Requests the status of all available layers.
   * @returns The status of all available layers.
   */
  statusLayers() {
    return this.sendRequestToProPresenter(`/v1/status/layers`);
  }
  /**
   * Requests the status of the stage screens.
   * @returns The status of the stage screens.
   */
  statusStageScreens() {
    return this.sendRequestToProPresenter(`/v1/status/stage_screens`);
  }
  /**
   * Sets the status of the stage screens.
   * NOT READY
   */
  statusStageScreensSet() {
    return this.sendRequestToProPresenter(`/v1/status/stage_screens`, {
      method: "PUT",
    });
  }
  /**
   * Requests the status of the audience screens.
   * @returns The status of the audience screens.
   */
  statusAudienceScreens() {
    return this.sendRequestToProPresenter(`/v1/status/audience_screens`);
  }
  /**
   * Sets the status of the audience screens.
   * NOT READY
   */
  statusAudienceScreensSet() {
    return this.sendRequestToProPresenter(`/v1/status/audience_screens`, {
      method: "PUT",
    });
  }
  /**
   * Requests the details of all configured screens.
   * @returns The details of all configured screens.
   */
  statusScreens() {
    return this.sendRequestToProPresenter(`/v1/status/screens`);
  }
  /**
   * Requests the current/next slide text and image UUIDs.
   * @returns The Requests the current/next slide text and image UUIDs.
   */
  statusSlide() {
    return this.sendRequestToProPresenter(`/v1/status/slide`);
  }
  /**
   * Aggregates the data from one or more streaming endpoints into a single streaming endpoint.
   * NOT READY
   */
  statusUpdate() {
    return this.sendRequestToProPresenter(`/v1/status/update`, {
      method: "POST",
    });
  }

  /**
   * THEME
   */

  /**
   * Requests a list of all configured themes and theme slides.
   * @returns A list of all configured themes and theme slides.
   */
  themesGet() {
    return this.sendRequestToProPresenter(`/v1/themes`);
  }
  /**
   * Requests the details of the theme and theme slides.
   * @param id
   * @returns The details of the theme and theme slides.
   */
  themesIdGet(id: string) {
    return this.sendRequestToProPresenter(`/v1/themes/${id}`);
  }
  /**
   * Requests the details of the specified theme slide within the specified theme.
   * @param id
   * @param theme_slide
   * @returns The details of the specified theme slide within the specified theme.
   */
  themesIdSlidesThemeSlide(id: string, theme_slide: string) {
    return this.sendRequestToProPresenter(
      `/v1/themes/${id}/slides/${theme_slide}`
    );
  }
  /**
   * Sets the details of the specified theme slide within the specified theme.
   * @param id
   * @param theme_slide
   * NOT READY
   */
  themesIdSlidesThemeSlideSet(id: string, theme_slide: string) {
    return this.sendRequestToProPresenter(
      `/v1/themes/${id}/slides/${theme_slide}`,
      { method: "PUT" }
    );
  }
  /**
   * Requests a thumbnail image of the specified theme slide at the given quality value.
   * @param id
   * @param theme_slide
   * @returns The details of the specified theme slide within the specified theme.
   */
  themesIdSlidesThemeSlideThumbnail(id: string, theme_slide: string) {
    return this.sendRequestToProPresenter(
      `/v1/themes/${id}/slides/${theme_slide}/thumbnail`
    );
  }

  /**
   * TIMER
   */

  /**
   * Requests the details for all configured timers.
   * @returns The details for all configured timers.
   */
  timersGet() {
    return this.sendRequestToProPresenter(`/v1/timers`);
  }
  /**
   * Creates a new timer with the specified details.
   * @param
   * NOT READY
   */
  timerCreate() {
    return this.sendRequestToProPresenter(`/v1/timers`, { method: "POST" });
  }
  /**
   * Requests the current time for all configured timers.
   * @returns The current time for all configured timers.
   */
  timersCurrent() {
    return this.sendRequestToProPresenter(`/v1/timers/current`);
  }
  /**
   * Performs the requested operation for all configured timers.
   * @param {ProPresenterTimerOperation} operation
   */
  timersOperation(operation: ProPresenterTimerOperation) {
    return this.sendRequestToProPresenter(`/v1/timers/${operation}`);
  }
  /**
   * Requests the details of the specified timer.
   * @param id
   * @returns The details of the specified timer.
   */
  timerIdGet(id: string) {
    return this.sendRequestToProPresenter(`/v1/timer/${id}`);
  }
  /**
   * Sets the details of the specified timer.
   * @param id
   * NOT READY
   */
  timerIdSet(id: string) {
    return this.sendRequestToProPresenter(`/v1/timer/${id}`, { method: "PUT" });
  }
  /**
   * Deletes the specified timer.
   * @param id
   */
  timerIdDelete(id: string) {
    return this.sendRequestToProPresenter(`/v1/timer/${id}`, {
      method: "DELETE",
    });
  }
  /**
   * Performs the requested operation on the specified timer.
   * @param id
   * @param {ProPresenterTimerOperation} operation
   */
  timerIdOperation(id: string, operation: ProPresenterTimerOperation) {
    return this.sendRequestToProPresenter(`/v1/timer/${id}/${operation}`);
  }

  /**
   * Requests the current system time.
   * @returns The current system time.
   */
  timerSystemTime() {
    return this.sendRequestToProPresenter(`/v1/timer/system_time`);
  }
  /**
   * Requests the current value of the video countdown timer.
   * @returns The current value of the video countdown timer.
   */
  timerVideoCountdown() {
    return this.sendRequestToProPresenter(`/v1/timer/video_countdown`);
  }

  /**
   * TRANSPORT
   */

  /**
   * Plays the content on the specified layer.
   * @param {ProPresenterLayerWithTransportControl} layer
   */
  transportLayerPlay(layer: ProPresenterLayerWithTransportControl) {
    return this.sendRequestToProPresenter(`/v1/transport/${layer}/play`);
  }
  /**
   * Pauses the content on the specified layer.
   * @param {ProPresenterLayerWithTransportControl} layer
   */
  transportLayerPause(layer: ProPresenterLayerWithTransportControl) {
    return this.sendRequestToProPresenter(`/v1/transport/${layer}/pause`);
  }
  /**
   * Moves backward in the content on the specified layer by the specified number of seconds.
   * @param {ProPresenterLayerWithTransportControl} layer
   * @param {number} time in seconds
   */
  transportLayerSkipBackwardTime(
    layer: ProPresenterLayerWithTransportControl,
    time: number
  ) {
    return this.sendRequestToProPresenter(
      `/v1/transport/${layer}/skip_backward/${time}`
    );
  }
  /**
   * Moves forward in the content on the specified layer by the specified number of seconds.
   * @param {ProPresenterLayerWithTransportControl} layer
   * @param {number} time in seconds
   */
  transportLayerSkipForwardTime(
    layer: ProPresenterLayerWithTransportControl,
    time: number
  ) {
    return this.sendRequestToProPresenter(
      `/v1/transport/${layer}/skip_forward/${time}`
    );
  }
  /**
   * Moves to the end on a certain layer
   * @param {ProPresenterLayerWithTransportControl} layer
   */
  transportLayerGoToEnd(layer: ProPresenterLayerWithTransportControl) {
    return this.sendRequestToProPresenter(`/v1/transport/${layer}/go_to_end`);
  }
  /**
   * Requests the current transport time for the specified layer.
   * @param {ProPresenterLayerWithTransportControl} layer
   * @returns The current transport time for the specified layer.
   */
  transportLayerTime(layer: ProPresenterLayerWithTransportControl) {
    return this.sendRequestToProPresenter(`/v1/transport/${layer}/time`);
  }
  /**
   * Moves to the specified time for the specified layer
   * @param {ProPresenterLayerWithTransportControl} layer
   * @param time in seconds?
   * NOT READY
   */
  transportLayerTimeSet(layer: ProPresenterLayerWithTransportControl) {
    return this.sendRequestToProPresenter(`/v1/transport/${layer}/time`, {
      method: "PUT",
    });
  }
  /**
   * Requests the auto-advance status for the specified layer.
   * @param {ProPresenterLayerWithTransportControlAndAutoAdvance} layer
   * @returns The auto-advance status for the specified layer.
   */
  transportLayerAutoAdvance(layer: ProPresenterLayerWithTransportControlAndAutoAdvance) {
    return this.sendRequestToProPresenter(`/v1/transport/${layer}/auto_advance`);
  }
  /**
   * Cancels the auto-advance for the specified layer.
   * @param {: ProPresenterLayerWithTransportControlAndAutoAdvance} layer
   */
  transportLayerAutoAdvanceDelete(layer: ProPresenterLayerWithTransportControlAndAutoAdvance) {
    return this.sendRequestToProPresenter(`/v1/transport/${layer}/auto_advance`, {
      method: "DELETE",
    });
  }
  /**
   * Requests the details of the currently playing content for the specified layer
   * @param {ProPresenterLayerWithTransportControl} layer
   * @returns The details of the currently playing content for the specified layer
   */
  transportLayerCurrent(layer: ProPresenterLayerWithTransportControl) {
    return this.sendRequestToProPresenter(`/v1/transport/${layer}/current`);
  }

  /**
   * TRIGGER
   */

  /**
   * Triggers the next item in the currently active media playlist.
   */
  triggerMediaNext() {
    return this.sendRequestToProPresenter(`/v1/trigger/media/next`);
  }
  /**
   * Triggers the previous item in the currently active media playlist.
   */
  triggerMediaPrevious() {
    return this.sendRequestToProPresenter(`/v1/trigger/media/next`);
  }
  /**
   * Triggers the next item in the currently active media playlist.
   */
  triggerAudioNext() {
    return this.sendRequestToProPresenter(`/v1/trigger/audio/next`);
  }
  /**
   * Triggers the previous item in the currently active audio playlist.
   */
  triggerAudioPrevious() {
    return this.sendRequestToProPresenter(`/v1/trigger/audio/previous`);
  }
  /**
   * Triggers the next cue or item in the currently active playlist or library.
   */
  triggerNext() {
    return this.sendRequestToProPresenter(`/v1/trigger/next`);
  }
  /**
   * Triggers the previous cue or item in the currently active playlist or library.
   */
  triggerPrevious() {
    return this.sendRequestToProPresenter(`/v1/trigger/previous`);
  }

  /**
   * VIDEO
   */
  /**
   * Requests the contents of the video inputs playlist.
   * @returns The contents of the video inputs playlist.
   */
  videoInputs() {
    return this.sendRequestToProPresenter(`/v1/video_inputs`);
  }
  /**
   * Triggers a video input from the video inputs playlist.
   * @param id
   */
  videoInputsIdTrigger(id: string) {
    return this.sendRequestToProPresenter(`/v1/video_inputs/${id}/trigger`);
  }
}