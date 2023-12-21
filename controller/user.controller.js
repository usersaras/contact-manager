const asyncHandler = require("express-async-handler");

//@desc Create a user
//@route POST /api/users/register
//@access public
const createUser = asyncHandler(async (req, res) => {
  res.json({ msg: "create new user route" });
});

//@desc Login user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ msg: "Login user" });
});

//@desc Create a user
//@route GET /api/users/
//@access public
const getAllUsers = asyncHandler(async (req, res) => {
  res.json({ msg: "get all users" });
});

//@desc Get current user
//@route GET /api/users/me
//@access private
const getCurrentUser = asyncHandler(async (req, res) => {
  res.json({ msg: "get current user" });
});

module.exports = {
  createUser,
  loginUser,
  getAllUsers,
  getCurrentUser,
};
