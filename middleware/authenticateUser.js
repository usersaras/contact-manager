const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const logger = require("../config/logger");

const authenticateUser = asyncHandler((req, res, next) => {
  logger.info("Authenticating user ...");
  let token;

  let authHeader = req.headers.authorization || req.headers.Authorization;

  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        throw new Error("Unauthorized user!");
      }
      req.user = decoded.user;
      logger.info("User authenticated!");

      next();
    });
  }

  if (!token) {
    logger.error("JWT missing!");
    throw new Error("Token not found!");
  }
});

module.exports = authenticateUser;
