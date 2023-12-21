const express = require("express");
const {
  createUser,
  loginUser,
  getAllUsers,
  getCurrentUser,
} = require("../controller/user.controller");

const router = express.Router();

router.route("/").get(getAllUsers);
router.route("/register").post(createUser);
router.route("/login").post(loginUser);
router.route("/me").post(getCurrentUser);

module.exports = router;
