const express = require("express");
const router = express.Router();
const {
  getAllContacts,
  createContact,
  getContact,
} = require("../controller/contact.controller");

router.route("/").get(getAllContacts);

router.route("/").post(createContact);

router.route("/:id").get(getContact);

router.route("/:id").put((req, res) => {
  res.json({ sucess: true });
});

router.route("/:id").delete((req, res) => {
  res.json({ sucess: true });
});

module.exports = router;
