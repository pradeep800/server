const express = require("express");
let router = express.Router();
router.route("/").get("/blog", (req, res) => {
  res.send("welcome to result world");
});
router.route("/:id", (req, res) => {
  res.send(req.params());
});
