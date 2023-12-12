const express = require("express");

const router = express.Router();

router.route("/").get((req, res) => {
  res.json({ sucess: true });
});

router.route("/").post((req, res) => {
  res.json({ sucess: true });
});

router.route("/").put((req, res) => {
  res.json({ sucess: true });
});

router.route("/").delete((req, res) => {
  res.json({ sucess: true });
});

module.exports = router;
