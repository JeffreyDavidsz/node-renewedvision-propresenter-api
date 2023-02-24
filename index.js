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
  async statusLayers() {
    return await this.fetchResource("/v1/status/layers", []);
  }

  /**
   * Requests the general information about the currently active ProPresenter instance
   * @returns General information about the currently active ProPresenter instance
   */
  version() {
    return this.getDataFromProPresenter("/version", []);
  }
}

module.exports = ProPresenter;
