const express = require("express");
const router = require("./get/blogs");
const post = require("./post/blogs");
require("dotenv").config();
const port = process.env.port;
const app = express();
const blogs = require("./get/blogs");
app.get("/", (req, res) => {
  res.send("nothing here");
});
app.use("/blogs", blogs);
// app.use("/post", post);
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  }
  console.log("listening from port " + port);
});
