const express = require("express");
let router = express.Router();
router.route("/").get((req, res) => {
  res.send("welcome to result world");
});
router.route("/blogs").get((req, res) => {
  res.send("hello world");
});
module.exports = router;
