const express = require("express");
const blogs = require("./blogs/blogs");
let img = require("./images/image");

const cor = require("cors");
const port = 300;
const app = express();
app.use(cor());
app.use("/blogs", blogs);
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
