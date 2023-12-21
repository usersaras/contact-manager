const logger = require("../config/logger");

class BadRequestError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "BadRequest";
    this.status = 400;

    logger.error(`${this.status}, ${this.name} - ${msg}`);
  }
}

module.exports = { BadRequestError };
