const { configDotenv } = require("dotenv");
const express = require("express");
configDotenv();

const contactsRouter = require("./routes/contact.route");

const app = express();

const port = process.env.PORT || 3000;

app.use("/api/contacts", contactsRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
