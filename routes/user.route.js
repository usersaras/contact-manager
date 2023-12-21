const express = require("express");
const {
  createUser,
  loginUser,
  getAllUsers,
  getCurrentUser,
} = require("../controller/user.controller");
const authenticateUser = require("../middleware/authenticateUser");

const router = express.Router();

router.route("/").get(getAllUsers);
router.route("/register").post(createUser);
router.route("/login").post(loginUser);
router.route("/me").get(authenticateUser, getCurrentUser);

module.exports = router;
