const {
  INVALID_REQUEST_ERROR,
  ROUTE_NOT_FOUND_ERROR,
} = require("../constant/error-map.js");

class RouteNotFoundError {
  constructor() {
    this.name = "RouteNotFound";
    this.code = ROUTE_NOT_FOUND_ERROR.code;
    this.message = ROUTE_NOT_FOUND_ERROR.message;
  }
}

class InvalidRequestError {
  constructor() {
    this.name = "InvalidRequestError";
    this.code = INVALID_REQUEST_ERROR.code;
    this.message = INVALID_REQUEST_ERROR.message;
  }
}

module.exports = {
  InvalidRequestError,
  RouteNotFoundError,
};
