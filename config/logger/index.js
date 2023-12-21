const winston = require("winston");
const { combine, timestamp, printf, colorize, align } = winston.format;

const logger = winston.createLogger({
  level: "info",
  format: combine(
    colorize({ all: true }),
    timestamp({
      format: "YYYY-MM-DD hh:mm:ss.SSS A",
    }),
    align(),
    printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)
  ),
  transports: [new winston.transports.Console()],
});

logger.transports[0].level = "debug";

logger.add(
  new winston.transports.File({
    filename: "http.log",
    level: "http",
  })
);

module.exports = logger;
