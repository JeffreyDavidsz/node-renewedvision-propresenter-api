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
}

module.exports = ProPresenter;
