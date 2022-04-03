const express = require("express");
const post = require("./blogs/blogs");
let img = require("./images/image");
require("dotenv").config();
const cor = require("cors");
const port = process.env.port || 2000;
const app = express();
app.use(cor());
app.use("/blogs", post);
app.use("/image", img);
app.get("/", (req, res) => {
  res.send("hello  world");
});
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  }
  console.log("listening from port " + port);
});
