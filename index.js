// import fetch from "node-fetch";
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

class ProPresenter {
  constructor(ip, port) {
    this.ip = ip;
    this.port = port;
  }

  // API wrapper function
  getDataFromProPresenter = (path, userOptions) => {
    if (!this.ip || !this.port) {
      return { error: "Missing IP and/or Port." };
    }
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
      .then((responseJson) => {
        responseJson.success = path;
        return responseJson;
      })
      .catch((error) => {
        return error;
      });
  };

  /**
   * Requests the status of all available layers.
   * @returns Status of all available layers.
   */
  statusLayers() {
    return this.fetchResource("/v1/status/layers", []);
  }

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
  announcementActive() {
    return this.getDataFromProPresenter("/v1/announcement/active", []);
  }
  /**
   * Requests the index of the current slide/cue within the currently active announcement.
   * @returns The index of the current slide/cue within the currently active announcement.
   */
  announcementSlideIndex() {
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
  announcementActiveIndexTrigger(index) {
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
  announcementActiveTimelineOperation() {
    return this.getDataFromProPresenter(`/v1/announcement/active/timeline`, []);
  }
  /**
   * AUDIO
   */

  /**
   * Requests a list with all the configured audio playlists.
   * @returns a list with all the configured audio playlists.
   */
  audioPlaylists() {
    return this.getDataFromProPresenter(`/v1/audio/playlists`, []);
  }
  /**
   * Requests a list of all the audio items in the specified audio playlist.
   * @param {string} playlist_id
   * @returns a list of all the audio items in the specified audio playlist.
   */
  audioPlaylistsByPlaylistId(playlist_id) {
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
  audioPlaylistsByPlaylistIdUpdates(playlist_id) {
    return this.getDataFromProPresenter(
      `/v1/audio/playlists/${playlist_id}/updates`,
      []
    );
  }
  /**
   * Requests the currently focused audio playlist
   * @returns The currently focused audio playlist
   */
  audioPlaylistsFocused() {
    return this.getDataFromProPresenter(`/v1/audio/playlists/focused`, []);
  }
  /**
   * Requests the currently active audio playlist
   * @returns The currently active audio playlist
   */
  audioPlaylistsActive() {
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
}

module.exports = ProPresenter;
