const express = require("express");
const con = require("./config");
let router = express.Router();
router.route("/").get((req, res) => {
  con.query("select * from post", (err, result) => {
    let a = JSON.stringify(result);
    res.send(a);
  });
});
router.route("/:id").get((req, res) => {
  let id = req.params["id"].replace(/:/, "");
  con.query(`select * from post where id=${id}`, (err, result) => {
    if (err) {
      res.send("error");
    }
    let a = JSON.stringify(result);
    res.send(a);
  });
});

module.exports = router;
