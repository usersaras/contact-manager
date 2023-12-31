const express = require("express");
const router = express.Router();
const {
  getAllContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
} = require("../controller/contact.controller");
const authenticateUser = require("../middleware/authenticateUser");

router.use(authenticateUser);

router.route("/").get(getAllContacts);

router.route("/").post(createContact);

router.route("/:id").get(getContact);

router.route("/:id").put(updateContact);

router.route("/:id").delete(deleteContact);

module.exports = router;
