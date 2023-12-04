class ApplicationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ApplicationError";
  }
}

class ParameterError {
  constructor() {
    this.name = "ParameterError";
    this.code = PARAM_ERROR.code;
    this.message = PARAM_ERROR.message;
  }
}

class AuthError {
  constructor(type) {
    this.name = type;
    this.code = errorMap[type].code;
    this.message = errorMap[type].message;
  }
}

class BusinessLogicError {
  constructor(type) {
    this.name = type;
    this.code = errorMap[type].code;
    this.message = errorMap[type].message;
  }
}

module.exports = {
  ParameterError,
  AuthError,
  ApplicationError,
  BusinessLogicError,
};
