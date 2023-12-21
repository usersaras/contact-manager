const logger = require("../config/logger");

const routeLogger = (req, res, next) => {
  const { method, url } = req;
  logger.http(`${method} ${url}`);
  next();
};

module.exports = routeLogger;
