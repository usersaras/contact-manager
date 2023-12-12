const { configDotenv } = require("dotenv");
const express = require("express");
configDotenv();

const contactsRouter = require("./routes/contact.route");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/db");

connectDb();
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
