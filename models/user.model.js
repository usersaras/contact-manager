const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "User name is mandatory!"],
      unique: [true, "Username is taken!"],
    },
    email: {
      type: String,
      required: [true, "Email name is mandatory!"],
      unique: [true, "Email address is taken!"],
    },
    password: {
      type: String,
      required: [true, "Password is mandatory!"],
    },
  },
  { timeStamps: true }
);

module.exports = mongoose.model("user", userSchema);
