const express = require("express");
let router = express.Router();
router.route("/").get((req, res) => {
  res.send("welcome to result world");
});
router.route("/:id").get((req, res) => {
  let id = req.params["id"].replace(/:/, "");

  res.send(id);
});
module.exports = router;
