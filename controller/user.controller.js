const asyncHandler = require("express-async-handler");
const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { configDotenv } = require("dotenv");
const { BadRequestError } = require("../errors/errors");
const User = require("../models/user.model");
const logger = require("../config/logger");

configDotenv();

//@desc Create a user
//@route POST /api/users/register
//@access public
const createUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    throw new BadRequestError("Username, email, and password are mandatory!");
  }

  const userEmailAvailable = await User.findOne({ email });
  const userUsernameAvailable = await User.findOne({ username });

  if (userEmailAvailable) {
    // TODO: make conflict error
    throw new BadRequestError(`'${email}' is already taken!`);
  }
  if (userUsernameAvailable) {
    throw new BadRequestError(`'${username}' is already taken!`);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({ username, email, password: hashedPassword });

  if (!user) {
    logger.info(`User with following details was created: ${user}`);
    res
      .status(StatusCodes.CREATED)
      .json({ success: true, msg: "New user created" });
  } else {
    throw new Error("Error creating user");
  }
});

//@desc Login user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Both email and password are required!");
  }

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    console.log(user._id);
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user._id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "30m" }
    );
    res.status(StatusCodes.OK).json({ success: true, accessToken });
  } else {
    res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ success: false, msg: "Could not login!" });
  }
});

//@desc Create a user
//@route GET /api/users/
//@access private
const getAllUsers = asyncHandler(async (req, res) => {
  res.json({ msg: "get all users" });
});

//@desc Get current user
//@route GET /api/users/me
//@access private
const getCurrentUser = asyncHandler(async (req, res) => {
  res.json({
    success: true,
    data: {
      ...req.user,
    },
  });
});

module.exports = {
  createUser,
  loginUser,
  getAllUsers,
  getCurrentUser,
};
