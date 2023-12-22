const logger = require("../config/logger");
const { StatusCodes } = require("http-status-codes");

class BadRequestError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "BadRequest";
    this.status = StatusCodes.BAD_REQUEST;

    logger.error(`${this.status}, ${this.name} - ${msg}`);
  }
}

class NotFoundError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "NotFound";
    this.status = StatusCodes.NOT_FOUND;

    logger.error(`${this.status}, ${this.name} - ${msg}`);
  }
}

class ForbiddenError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "Forbidden";
    this.status = StatusCodes.FORBIDDEN;

    logger.error(`${this.status}, ${this.name} - ${msg}`);
  }
}

class UnauhtorizedError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "Unauthorized";
    this.status = StatusCodes.UNAUTHORIZED;

    logger.error(`${this.status}, ${this.name} - ${msg}`);
  }
}

class ConflictError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "Conflict";
    this.status = StatusCodes.CONFLICT;

    logger.error(`${this.status}, ${this.name} - ${msg}`);
  }
}

module.exports = {
  BadRequestError,
  NotFoundError,
  ForbiddenError,
  UnauhtorizedError,
  ConflictError,
};
