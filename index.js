import fetch from "node-fetch";

function ProPresenter(ip,port) {
	this.ip = ip
    this.port = port
	if (ip === undefined | port === undefined) {
		console.error('NO IP AND/OR PORT SPECIFIED FOR PROPRESENTER')
		return
	}
	return this
}

// Custom API error to throw
function ApiError(message, data, status) {
  let response = null;
  let isObject = false;

  // We are trying to parse response
  try {
    response = JSON.parse(data);
    isObject = true;
  } catch (e) {
    response = data;
  }

  this.response = response;
  this.message = message;
  this.status = status;
  this.toString = function () {
    return `${this.message}\nResponse:\n${
      isObject ? JSON.stringify(this.response, null, 2) : this.response
    }`;
  };
}

// API wrapper function
const fetchResource = (path, userOptions = {}) => {
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
  const url = `${this.ip}:${this.port}/${path}`;

  // Detect is we are uploading a file
  const isFile = options.body instanceof File;

  // Stringify JSON data
  // If body is not a file
  if (options.body && typeof options.body === "object" && !isFile) {
    options.body = JSON.stringify(options.body);
  }

  // Variable which will be used for storing response
  let response = null;

  return (
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
          throw parsedResponse;
        }

        // Request succeeded
        return parsedResponse;
      })
      .catch((error) => {
        // Throw custom API error
        // If response exists it means HTTP error occured
        if (response) {
          throw new ApiError(
            `Request failed with status ${response.status}.`,
            error,
            response.status
          );
        } else {
          throw new ApiError(error.toString(), null, "REQUEST_FAILED");
        }
      })
  );
};

/**
 * Requests the status of all available layers.
 * @returns Status of all available layers.
 */
ProPresenter.statusLayers = () => {
  return fetchResource("/v1/status/layers");
};

/**
 * Requests the general information about the currently active ProPresenter instance
 * @returns General information about the currently active ProPresenter instance
 */
ProPresenter.version = () => {
  return fetchResource("/version");
};

exports = module.exports = ProPresenter;
