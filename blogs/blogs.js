let axios = require("axios");
const express = require("express");
const data = require("./data.json");
const fs = require("fs");
let router = express.Router();
router.route("/").get((req, res) => {
  res.send(data.data);
});

router.route("/:id").get((req, res) => {
  let id = req.params.id;
  console.log(id);
  if (data.data.length >= parseInt(id)) {
    res.send(data.data[id - 1]);
  } else {
    res.send("not present");
  }
});
module.exports = router;
