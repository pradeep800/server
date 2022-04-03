const fs = require("fs");
const express = require("express");
const router = express.Router();
router.route("/").get((req, res) => {
  res.status(201).send("your in image folder");
});
const img = __dirname + "/1.jpg";
router.route("/:id").get((req, res) => {
  res.sendFile(img);
});
module.exports = router;
