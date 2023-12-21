const mongoose = require("mongoose");
const logger = require("./logger");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);

    logger.info(
      `Database connected ${connect.connection.host} ${connect.connection.name}`
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDb;
