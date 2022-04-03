const express = require("express");
const post = require("./blogs/blogs");
require("dotenv").config();
const port = process.env.port || 2000;
const app = express();
app.use("/blogs", post);
app.get("/", (req, res) => {
  res.send("hello  world");
});
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  }
  console.log("listening from port " + port);
});
