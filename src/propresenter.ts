export type JSONValue = Promise<
  string | number | boolean | { [x: string]: JSONValue } | JSONValue[]
>;

export class ProPresenter {
  ip: string;
  port: number;

  constructor(ip: string, port: number) {
    this.ip = ip;
    this.port = port;
  }

  //
  /**
   * API wrapper function, use fetch to send/retrieve the data from ProPresenter
   * @param path
   * @param userOptions
   * @returns Promise from fetch
   */
  getDataFromProPresenter = (path: string, userOptions: any): JSONValue => {
    // Define default options
    const defaultOptions = {};
    // Define default headers
    const defaultHeaders = {};

    const options = {
      // Merge options
      ...defaultOptions,
      ...userOptions,
      // Merge headers
      headers: {
        ...defaultHeaders,
        ...userOptions.headers,
      },
    };

    // Build Url
    const url = `http://${this.ip}:${this.port}${path}`;
    return fetch(url, options)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .then((responseJson: JSONValue) => {
        responseJson["success"] = path;
        return responseJson;
      })
      .catch((error: string) => {
        return error;
      });
  };

  /**
   * Requests the general information about the currently active ProPresenter instance
   * @returns General information about the currently active ProPresenter instance
   */
  version() {
    return this.getDataFromProPresenter("/version", []);
  }

  /**
   * ANNOUNCEMENT
   */

  /**
   * Requests the currently active announcement presentation.
   * @returns the currently active announcement presentation.
   */
  announcementGetActive() {
    return this.getDataFromProPresenter("/v1/announcement/active", []);
  }
  /**
   * Requests the index of the current slide/cue within the currently active announcement.
   * @returns The index of the current slide/cue within the currently active announcement.
   */
  announcementGetSlideIndex() {
    return this.getDataFromProPresenter("/v1/announcement/slide_index", []);
  }
  /**
   * Focuses the currently active announcement presentation.
   */
  announcementActiveFocus() {
    return this.getDataFromProPresenter("/v1/announcement/active/focus", []);
  }
  /**
   * Retriggers the currently active announcement presentation (starts from the beginning).
   */
  announcementTrigger() {
    return this.getDataFromProPresenter("/v1/announcement/active/trigger", []);
  }
  /**
   * Triggers the next cue in the active announcement presentation (if there is one).
   */
  announcementNextTrigger() {
    return this.getDataFromProPresenter(
      "/v1/announcement/active/next/trigger",
      []
    );
  }
  /**
   * Triggers the previous cue in the currently active announcement presentation (if there is one).
   */
  announcementPreviousTrigger() {
    return this.getDataFromProPresenter(
      "/v1/announcement/active/previous/trigger",
      []
    );
  }
  /**
   * Triggers the specified cue in the currently active announcement presentation.
   * @param {string} index
   */
  announcementActiveIndexTrigger(index: string | number) {
    return this.getDataFromProPresenter(
      `/v1/announcement/active/${index}/trigger`,
      []
    );
  }
  /**
   * Performs the requested timeline operation for the active announcment presentation.
   * @param {play,pause,rewind} operation
   */
  announcementActiveTimelineOperation(operation) {
    return this.getDataFromProPresenter(
      `/v1/announcement/active/timeline/${operation}`,
      []
    );
  }
  /**
   * Requests the current state of the active announcement timeline.
   * @returns The current state of the active announcement timeline.
   */
  announcementGetActiveTimelineOperation() {
    return this.getDataFromProPresenter(`/v1/announcement/active/timeline`, []);
  }
  /**
   * AUDIO
   */

  /**
   * Requests a list with all the configured audio playlists.
   * @returns a list with all the configured audio playlists.
   */
  audioGetPlaylists() {
    return this.getDataFromProPresenter(`/v1/audio/playlists`, []);
  }
  /**
   * Requests a list of all the audio items in the specified audio playlist.
   * @param {string} playlist_id
   * @returns a list of all the audio items in the specified audio playlist.
   */
  audioGetPlaylistsByPlaylistId(playlist_id) {
    return this.getDataFromProPresenter(
      `/v1/audio/playlists/${playlist_id}`,
      []
    );
  }
  /**
   * Requests a chunked data update every time the specified audio playlist changes.
   * @param {string} playlist_id
   * @returns a chunked data update every time the specified audio playlist changes.
   */
  audioGetPlaylistsByPlaylistIdUpdates(playlist_id) {
    return this.getDataFromProPresenter(
      `/v1/audio/playlists/${playlist_id}/updates`,
      []
    );
  }
  /**
   * Requests the currently focused audio playlist
   * @returns The currently focused audio playlist
   */
  audioGetPlaylistsFocused() {
    return this.getDataFromProPresenter(`/v1/audio/playlists/focused`, []);
  }
  /**
   * Requests the currently active audio playlist
   * @returns The currently active audio playlist
   */
  audioGetPlaylistsActive() {
    return this.getDataFromProPresenter(`/v1/audio/playlists/active`, []);
  }
  /**
   * Focuses the next audio playlist.
   */
  audioPlaylistsNextFocus() {
    return this.getDataFromProPresenter(`/v1/audio/playlists/next/focus`, []);
  }
  /**
   * Focuses the previous audio playlist.
   */
  audioPlaylistsPreviousFocus() {
    return this.getDataFromProPresenter(
      `/v1/audio/playlists/previous/focus`,
      []
    );
  }
  /**
   * Focuses the active audio playlist.
   */
  audioPlaylistsActiveFocus() {
    return this.getDataFromProPresenter(`/v1/audio/playlists/active/focus`, []);
  }
  /**
   * Focuses the specified audio playlist.
   * @param {string} playlist_id
   */
  audioPlaylistsByPlaylistIdFocus(playlist_id) {
    return this.getDataFromProPresenter(
      `/v1/audio/playlists/${playlist_id}/focus`,
      []
    );
  }
  /**
   * Triggers the focused audio playlist.
   */
  audioPlaylistsFocusedTrigger() {
    return this.getDataFromProPresenter(
      `/v1/audio/playlists/focused/trigger`,
      []
    );
  }
  /**
   * Triggers the active audio playlist (restarts from the beginning).
   */
  audioPlaylistsActiveTrigger() {
    return this.getDataFromProPresenter(
      `/v1/audio/playlists/active/trigger`,
      []
    );
  }
  /**
   * Triggers the specified audio playlist.
   * @param {string} playlist_id
   */
  audioPlaylistsByPlaylistIdTrigger(playlist_id) {
    return this.getDataFromProPresenter(
      `/v1/audio/playlists/${playlist_id}/trigger`,
      []
    );
  }
  /**
   * Triggers the next item in the focused audio playlist.
   */
  audioPlaylistsFocusedNextTrigger() {
    return this.getDataFromProPresenter(
      `/v1/audio/playlists/focused/next/trigger`,
      []
    );
  }
  /**
   * Triggers the previous item in the focused audio playlist.
   */
  audioPlaylistsFocusedPreviousTrigger() {
    return this.getDataFromProPresenter(
      `/v1/audio/playlists/focused/previous/trigger`,
      []
    );
  }
  /**
   * Triggers the specified item in the focused audio playlist.
   * @params {string} id
   */
  audioPlaylistsFocusedIdTrigger(id) {
    return this.getDataFromProPresenter(
      `/v1/audio/playlists/focused/${id}/trigger`,
      []
    );
  }
  /**
   * Triggers the next item in the active audio playlist.
   */
  audioPlaylistsActiveNextTrigger() {
    return this.getDataFromProPresenter(
      `/v1/audio/playlists/active/next/trigger`,
      []
    );
  }
  /**
   * Triggers the previous item in the active audio playlist.
   */
  audioPlaylistsActivedPreviousTrigger() {
    return this.getDataFromProPresenter(
      `/v1/audio/playlists/active/previous/trigger`,
      []
    );
  }
  /**
   * Triggers the specified item in the active audio playlist.
   * @params {string} id
   */
  audioPlaylistsActiveIdTrigger(id) {
    return this.getDataFromProPresenter(
      `/v1/audio/playlists/active/${id}/trigger`,
      []
    );
  }
  /**
   * Triggers the next item in the specified audio playlist.
   * @param {string} playlist_id
   */
  audioPlaylistsByPlaylistIdNextTrigger(playlist_id) {
    return this.getDataFromProPresenter(
      `/v1/audio/playlists/${playlist_id}/next/trigger`,
      []
    );
  }
  /**
   * Triggers the previous item in the specified audio playlist.
   * @param {string} playlist_id
   */
  audioPlaylistsByPlaylistIdPreviousTrigger(playlist_id) {
    return this.getDataFromProPresenter(
      `/v1/audio/playlists/${playlist_id}/previous/trigger`,
      []
    );
  }

  /**
   * CAPTURE
   */

  /**
   * Requests the current capture status and capture time.
   * @returns The current capture status and capture time.
   */
  captureGetStatus() {
    return this.getDataFromProPresenter(`/v1/capture/status`, []);
  }
  /**
   * Performs the requested capture operation (start, stop).
   * @param operation (start, stop)
   */
  captureOperation(operation: "start" | "stop") {
    return this.getDataFromProPresenter(`/v1/capture/${operation}`, []);
  }
  /**
   * Requests the current capture settings.
   * @returns The current capture settings.
   */
  captureGetsettings() {
    return this.getDataFromProPresenter(`/v1/capture/settings`, []);
  }
  /**
   * Requests a list of all available capture modes for the capture type (disk, rtmp, resi).
   * @param type (disk, rtmp, resi)
   * @returns A list of all available capture modes for the capture type (disk, rtmp, resi).
   */
  captureEncodingsType(type: "disk" | "rtmp" | "resi") {
    return this.getDataFromProPresenter(`/v1/capture/encodings/${type}`, []);
  }
  /**
   * CLEAR
   */
  /**
   * Clears the specified layer (audio, props, messages, announcements, slide, media, video_input).
   * @param {string} layer (audio, props, messages, announcements, slide, media, video_input)
   */
  clearLayer(
    layer:
      | "audio"
      | "props"
      | "messages"
      | "announcements"
      | "slide"
      | "media"
      | "video_input"
  ) {
    return this.getDataFromProPresenter(`/v1/clear/layer/${layer}`, []);
  }
  /**
   * Requests the details of the specified clear group.
   * @param {string} id (name, index or UUID)
   * @returns The details of the specified clear group.
   */
  clearGetGroupId(id: string) {
    return this.getDataFromProPresenter(`/v1/clear/group/${id}`, []);
  }
  /**
   * Sets the details of the specified clear group.
   * @param {string} id (name, index or UUID)
   * @returns The details of the specified clear group.
   */
  clearSetGroupId(id: string) {
    return this.getDataFromProPresenter(`/v1/clear/group/${id}`, {
      method: "PUT",
    });
  }
  /**
   * Deletes the specified clear group.
   * @param {string} id (name, index or UUID)
   */
  clearDeleteGroupId(id: string) {
    return this.getDataFromProPresenter(`/v1/clear/group/${id}`, {
      method: "DELETE",
    });
  }
  /**
   * Requests the image data for the icon of the specified clear group.
   * @param {string} id (name, index or UUID)
   * @returns The image data for the icon of the specified clear group.
   */
  clearGetGroupIdIcon(id: string) {
    return this.getDataFromProPresenter(`/v1/clear/group/${id}/icon`, []);
  }
  /**
   * Sets the custom icon of the specified clear group.
   * @param {string} id (name, index or UUID)
   * @returns
   */
  clearSetGroupIdIcon(id: string) {
    return this.getDataFromProPresenter(`/v1/clear/group/${id}/icon`, {
      method: "PUT",
    });
  }
  /**
   * Triggers the specified clear group.
   * @param {string} id (name, index or UUID)
   */
  clearGroupIdTrigger(id: string) {
    return this.getDataFromProPresenter(`/v1/clear/group/${id}/trigger`, []);
  }
  /**
   * Requests a list of all the configured clear groups.
   * @returns A list of all the configured clear groups.
   */
  clearGetGroup() {
    return this.getDataFromProPresenter(`/v1/clear/groups`, []);
  }
  /**
   * DOUBLE CHECK THIS FOR MISSING PARAMS
   * Create a clear group with the details specified.
   * @returns The created group.
   */
  clearCreateGroup() {
    return this.getDataFromProPresenter(`/v1/clear/groups`, { method: "POST" });
  }
  /**
   * GLOBAL GROUPS
   */
  /**
   * Requests a list of all the configured global groups.
   * @returns A list of all the configured global groups.
   */
  groupsGet() {
    return this.getDataFromProPresenter(`/v1/groups`, []);
  }
  /*


Library
GET/v1/libraries
Requests a list of all the configured libraries.
GET/v1/library/{id}
Requests an array of all items in the specified library.
GET/v1/library/{library_id}/{presentation_id}/trigger
Triggers the first cue of the specified presentation in the specified library.
GET/v1/library/{library_id}/{presentation_id}/{index}/trigger
Triggers the specified cue of the specified presentation in the specified library.
Looks
GET/v1/looks
Requests a list of all configured audience looks, except the live look.
POST/v1/looks
Creates a new audience look with the specified details.
GET/v1/look/current
Requests the details of the currently live audience look.
PUT/v1/look/current
Sets the details of the currently live audience look.
GET/v1/look/{id}
Requests the details of the specified audience look.
PUT/v1/look/{id}
Sets the details of the specified audience look.
DELETE/v1/look/{id}
Deletes the specified audience look from the saved looks.
GET/v1/look/{id}/trigger
Triggers the specified audience look to make it the live/current look.
Macro
GET/v1/macros
Requests a list of all the configured macros.
GET/v1/macro/{id}
Requests the details of the specified macro.
PUT/v1/macro/{id}
Sets the details of the specified macro.
DELETE/v1/macro/{id}
Deletes the specified macro.
GET/v1/macro/{id}/trigger
Triggers the specified macro.
Masks
GET/v1/masks
Requests a list of all configured masks.
GET/v1/mask/{id}
Requests the details of the specified mask.
GET/v1/mask/{id}/thumbnail
Requests a thumbnail image of the specified mask at the given quality value.
Media
GET/v1/media/playlists
Requests a list of all the configured media playlists.
GET/v1/media/playlist/{playlist_id}
Requests a list of all the media items in the specified media playlist.
GET/v1/media/playlist/{playlist_id}/updates
Requests a chunked data update every time the specified media playlist changes.
GET/v1/media/{uuid}/thumbnail
Requests a thumbnail image of the specified media item at the given quality value.
GET/v1/media/playlist/focused
Returns the identifier of the currently focused media playlist
GET/v1/media/playlist/active
Returns the identifier of the currently active media playlist.
GET/v1/media/playlist/next/focus
Sets the focus to the next media playlist.
GET/v1/media/playlist/previous/focus
Sets the focus to the previous media playlist.
GET/v1/media/playlist/active/focus
Sets the focus to the active media playlist.
GET/v1/media/playlist/{playlist_id}/focus
Sets the focus to the specified media playlist.
GET/v1/media/playlist/focused/trigger
Triggers the first item in the focused media playlist.
GET/v1/media/playlist/active/trigger
Triggers the first item in the active media playlist.
GET/v1/media/playlist/{playlist_id}/trigger
Triggers the first item in the specified media playlist.
GET/v1/media/playlist/focused/next/trigger
Triggers the next item in the focused media playlist.
GET/v1/media/playlist/focused/previous/trigger
Triggers the previous item in the focused media playlist.
GET/v1/media/playlist/focused/{media_id}/trigger
Triggers the specified item in the focused media playlist.
GET/v1/media/playlist/active/next/trigger
Triggers the next item in the active media playlist.
GET/v1/media/playlist/active/previous/trigger
Triggers the previous item in the active media playlist.
GET/v1/media/playlist/active/{media_id}/trigger
Triggers the specified item in the active media playlist.
GET/v1/media/playlist/{playlist_id}/next/trigger
Triggers the next item in the specified media playlist.
GET/v1/media/playlist/{playlist_id}/previous/trigger
Triggers the previous item in the specified media playlist.
GET/v1/media/playlist/{playlist_id}/{media_id}/trigger
Triggers the specified item in the specified media playlist.
Message
GET/v1/messages
Requests a list of all configured messages.
POST/v1/messages
Creates a new message with specified details.
GET/v1/message/{id}
Requests the details of the specified message.
PUT/v1/message/{id}
Sets the details of the specified message.
DELETE/v1/message/{id}
Deletes the specified message.
POST/v1/message/{id}/trigger
Triggers / Shows the specified message.
GET/v1/message/{id}/clear
Clears / Hides the specified message.
Miscellaneous
GET/v1/find_my_mouse
Executes the "Find My Mouse" operation.
Playlist
GET/v1/playlists
Requests a list of all configured playlists.
POST/v1/playlists
Creates a playlist with the specified details.
GET/v1/playlist/{playlist_id}
Requests a list of the items in the specified playlist.
PUT/v1/playlist/{playlist_id}
Sets the contents of the specified playlist.
POST/v1/playlist/{playlist_id}
Creates a playlist with the specified details underneath the specified playlist or playlist folder.
GET/v1/playlist/active
Requests the details of the active playlist.
GET/v1/playlist/focused
Requests the details of the currently focused playlist.
GET/v1/playlist/next/focus
Moves the focus to the next playlist.
GET/v1/playlist/previous/focus
Moves the focus to the previous playlist.
GET/v1/playlist/active/presentation/focus
Moves the focus to the currently active playlist for the presentation destination.
GET/v1/playlist/active/announcement/focus
Moves the focus to the currently active playlist for the announcement destination.
GET/v1/playlist/focused/trigger
Triggers the first item in the currently focused playlist.
GET/v1/playlist/active/presentation/trigger
Triggers the first item in the currently active playlist for the presentation destination.
GET/v1/playlist/active/announcement/trigger
Triggers the first item in the currently active playlist for the announcement destination.
GET/v1/playlist/focused/next/trigger
Triggers the next item in the currently focused playlist.
GET/v1/playlist/focused/previous/trigger
Triggers the previous item in the currently focused playlist.
GET/v1/playlist/{identifier}/updates
Requests a chunked data update every time the specified audio playlist changes.
GET/v1/playlist/{identifier}/focus
Moves the focus to the specified playlist.
GET/v1/playlist/{identifier}/trigger
Triggers the first item in the specified playlist.
GET/v1/playlist/{identifier}/next/trigger
Triggers the next item in the specified playlist.
GET/v1/playlist/{identifier}/previous/trigger
Triggers the previous item in the specified playlist.
GET/v1/playlist/{identifier}/{index}/trigger
Triggers the specified item in the specified playlist.
GET/v1/playlist/focused/{index}/trigger
Triggers the specified item in the focused playlist.
GET/v1/playlist/active/presentation/{index}/trigger
Triggers the specified item in the currently active playlist for the presentation destination.
GET/v1/playlist/active/announcement/{index}/trigger
Triggers the specified item in the currently active playlist for the announcement destination.
Presentation
GET/v1/presentation/active
Requests the details of the currently active presentation.
GET/v1/presentation/focused
Gets the currently focused presentation.
GET/v1/presentation/slide_index
Requests the index of the current slide/cue within the currently active presentation.
GET/v1/presentation/chord_chart
Requests the current chord chart image (if available) at the given quality value.
GET/v1/presentation/chord_chart/updates
Requests a chunked data update every time the chord chart changes.
GET/v1/presentation/{uuid}
Requests the details of the specified presentation.
GET/v1/presentation/active/timeline
Requests the current state of the active presentation timeline.
GET/v1/presentation/focused/timeline
Requests the current state of the focused presentation timeline.
GET/v1/presentation/active/timeline/{operation}
Performs the requested timeline operation for the active presentation.
GET/v1/presentation/focused/timeline/{operation}
Performs the requested timeline operation for the currently active presentation (play, pause, rewind).
GET/v1/presentation/{uuid}/timeline/{operation}
Performs the requested timeline operation for the specified presentation (play, pause, rewind).
GET/v1/presentation/{uuid}/thumbnail/{index}
Requests a thumbnail image of the specified cue inside the specified presentation at the given quality value.
GET/v1/presentation/next/focus
Sets the focus to the next presentation.
GET/v1/presentation/previous/focus
Sets the focus to the previous presentation.
GET/v1/presentation/active/focus
Sets the focus to the active presentation.
GET/v1/presentation/{uuid}/focus
Sets the focus to the specified presentation.
GET/v1/presentation/focused/trigger
Triggers the focused presentation.
GET/v1/presentation/focused/next/trigger
Triggers the next cue of the focused presentation.
GET/v1/presentation/focused/previous/trigger
Triggers the previous cue of the focused presentation.
GET/v1/presentation/focused/{index}/trigger
Triggers the specified cue of the focused presentation.
GET/v1/presentation/active/trigger
Retriggers the active presentation from the start.
GET/v1/presentation/active/next/trigger
Triggers the next cue of the active presentation.
GET/v1/presentation/active/previous/trigger
Triggers the previous cue of the active presentation.
GET/v1/presentation/active/{index}/trigger
Triggers the specified cue of the active presentation.
GET/v1/presentation/{uuid}/trigger
Triggers the specified presentation.
GET/v1/presentation/{uuid}/next/trigger
Triggers the next cue of the specified presentation.
GET/v1/presentation/{uuid}/previous/trigger
Triggers the previous cue of the specified presentation.
GET/v1/presentation/{uuid}/{index}/trigger
Triggers the specified cue of the specified presentation.
GET/v1/presentation/focused/group/{group_id}/trigger
Triggers the specified group of the focused presentation.
GET/v1/presentation/active/group/{group_id}/trigger
Triggers the specified group of the active presentation.
GET/v1/presentation/{uuid}/group/{group_id}/trigger
Triggers the specified group of the specified presentation.
Prop
GET/v1/props
Gets a list of all the props.
GET/v1/prop/{id}
Requests the details of the specified prop.
DELETE/v1/prop/{id}
Deletes the specified prop.
GET/v1/prop/{id}/trigger
Triggers the specified prop.
GET/v1/prop/{id}/clear
Clears the specified prop.
GET/v1/prop/{id}/thumbnail
Requests a thumbnail image of the specified prop at the given quality value.
Stage
GET/v1/stage/message
Requests the currently active stage message.
PUT/v1/stage/message
Shows the specified stage message on the configured stage screen.
DELETE/v1/stage/message
Hides the currently displayed stage message from the configured stage screen.
GET/v1/stage/layout_map
Requests the currently selected stage layout for each configured stage screen.
PUT/v1/stage/layout_map
Sets the specified stage message to the corresponding stage screens.
GET/v1/stage/screens
Requests a list of the configured stage screens.
GET/v1/stage/screen/{id}/layout
Requests the current stage layout for the specified stage screen.
GET/v1/stage/screen/{id}/layout/{layout_id}
Sets the specified stage layout for the specified stage screen.
GET/v1/stage/layouts
Requests a list of the configured stage layouts.
DELETE/v1/stage/layout/{id}
Deletes the specified stage layout.
GET/v1/stage/layout/{id}/thumbnail
Requests a thumbnail image of the specified stage layout at the given quality value.
Status
GET/version
Requests the general information about the currently active ProPresenter instance.
GET/v1/status/layers
Requests the status of all available layers.
GET/v1/status/stage_screens
Requests the status of the stage screens.
PUT/v1/status/stage_screens
Sets the status of the stage screens.
GET/v1/status/audience_screens
Requests the status of the audience screens.
PUT/v1/status/audience_screens
Sets the status of the audience screens.
GET/v1/status/screens
Requests the details of all configured screens.
GET/v1/status/slide
Requests the current/next slide text and image UUIDs.
POST/v1/status/updates
Aggregates the data from one or more streaming endpoints into a single streaming endpoint.
Theme
GET/v1/themes
Requests a list of all configured themes and theme slides.
GET/v1/theme/{id}
Requests the details of the theme and theme slides.
GET/v1/theme/{id}/slides/{theme_slide}
Requests the details of the specified theme slide within the specified theme.
PUT/v1/theme/{id}/slides/{theme_slide}
Sets the details of the specified theme slide within the specified theme.
GET/v1/theme/{id}/slides/{theme_slide}/thumbnail
Requests a thumbnail image of the specified theme slide at the given quality value.
Timer
GET/v1/timers
Requests the details for all configured timers.
POST/v1/timers
Creates a new timer with the specified details.
GET/v1/timers/current
Requests the current time for all configured timers.
GET/v1/timers/{operation}
Performs the requested operation for all configured timers (start, stop, reset).
GET/v1/timer/{id}
Requests the details of the specified timer.
PUT/v1/timer/{id}
Sets the details of the specified timer.
DELETE/v1/timer/{id}
Deletes the specified timer.
GET/v1/timer/{id}/{operation}
Performs the requested operation on the specified timer (start, stop, reset).
GET/v1/timer/system_time
Requests the current system time.
GET/v1/timer/video_countdown
Requests the current value of the video countdown timer.
Transport
GET/v1/transport/{layer}/play
Plays the content on the specified layer (presentation, announcement, audio).
GET/v1/transport/{layer}/pause
Pauses the content on the specified layer (presentation, announcement, audio).
GET/v1/transport/{layer}/skip_backward/{time}
Moves backward in the content on the specified layer by the specified number of seconds (presentation, announcement, audio).
GET/v1/transport/{layer}/skip_forward/{time}
Moves forward in the content on the specified layer by the specified number of seconds (presentation, announcement, audio).
GET/v1/transport/{layer}/go_to_end
Moves to the end on a certain layer
GET/v1/transport/{layer}/time
Requests the current transport time for the specified layer (presentation, announcement, audio).
PUT/v1/transport/{layer}/time
Moves to the specified time for the specified layer (presentation, announcement, audio).
GET/v1/transport/{layer}/auto_advance
Requests the auto-advance status for the specified layer (presentation, announcement).
DELETE/v1/transport/{layer}/auto_advance
Cancels the auto-advance for the specified layer (presentation, announcement).
GET/v1/transport/{layer}/current
Requests the details of the currently playing content for the specified layer (presentation, announcement, audio).
Trigger
GET/v1/trigger/media/next
Triggers the next item in the currently active media playlist.
GET/v1/trigger/media/previous
Triggers the previous item in the currently active media playlist.
GET/v1/trigger/audio/next
Triggers the next item in the currently active audio playlist.
GET/v1/trigger/audio/previous
Triggers the previous item in the currently active audio playlist.
GET/v1/trigger/next
Triggers the next cue or item in the currently active playlist or library.
GET/v1/trigger/previous
Triggers the previous cue or item in the currently active playlist or library.
Video Input
GET/v1/video_inputs
Requests the contents of the video inputs playlist.
GET/v1/video_inputs/{id}/trigger
Triggers a video input from the video inputs playlist.

  */
}
