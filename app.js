const { configDotenv } = require("dotenv");
const express = require("express");
const logger = require("./config/logger");

configDotenv();

const contactsRouter = require("./routes/contact.route");
const usersRouter = require("./routes/user.route");

const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/db");
const routeLogger = require("./middleware/routeLogger");

connectDb();
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(routeLogger);

app.use("/api/contacts", contactsRouter);
app.use("/api/users", usersRouter);

app.use(errorHandler);

app.listen(port, () => {
  logger.info(`Server running on port ${port} !`);
});
