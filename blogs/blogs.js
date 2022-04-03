const express = require("express");
const temp = require("./blog_data");
let router = express.Router();
router.route("/").get((req, res) => {});
router.route("/:id").get((req, res) => {
  temp().then(
    (result) => {},
    (err) => {
      res.send("error");
    }
  );
  let id = req.params["id"].replace(/:/, "");
  res.send(id);
});
module.exports = router;
