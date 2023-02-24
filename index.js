// import fetch from "node-fetch";
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

class ProPresenter {
  constructor(ip, port) {
    this.ip = ip;
    this.port = port;
  }

  // API wrapper function
  fetchResource = (path, userOptions) => {
    return new Promise((resolve) => {
      if (!this.ip || !this.port) {
        resolve({ error: "Missing IP and/or Port." });
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
      console.log(url);
      // console.log(JSON.stringify(options))
      // Variable which will be used for storing response
      let response = null;

      fetch(url, options)
        .then((responseObject) => {
          // Saving response for later use in lower scopes
          response = responseObject;
          // HTTP unauthorized
          if (response.status === 401) {
            // Handle unauthorized requests
            // Maybe redirect to login page?
          }

          // Check for error HTTP error codes
          if (response.status < 200 || response.status >= 300) {
            // Get response as text
            return response.text();
          }

          // Get response as json
          return response.json();
        })
        // "parsedResponse" will be either text or javascript object depending if
        // "response.text()" or "response.json()" got called in the upper scope
        .then((parsedResponse) => {
          // Check for HTTP error codes
          if (response.status < 200 || response.status >= 300) {
            // Throw error
            resolve({ error: `Wrong Status: ${parsedResponse}` });
          }

          // Request succeeded
          resolve({ success: path, result: parsedResponse });
        })
        .catch((error) => {
          // Throw custom API error
          // If response exists it means HTTP error occured
          if (response) {
            resolve({
              error: `Request failed with status ${response.status}.`,
            });
          } else {
            resolve({ error: `Request failed: ${error}.` });
          }
        });
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
  async version() {
    return await this.fetchResource("/version", []).catch((err) => {
      console.log("Crashed" + err);
    });
  }
}

module.exports = ProPresenter;
