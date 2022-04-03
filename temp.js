/*
// con.query(`select * from post where id=${id}`, (err, result) => {
  //   if (err) {
  //     res.send("error");
  //   }
  //   let a = JSON.stringify(result);
  //   res.send(a);
  // });
   con.query("select * from post", (err, result) => {
    let a = JSON.stringify(result);
    res.send(a);
  });
  const mysql = require("mysql");
const con = mysql.createConnection({
  host: "localhost",
  user: "cars",
  password: "passworld",
  database: "portfolio",
});

con.connect((err) => {
  if (err) {
    console.log("error in connection", err);
  }
});
module.exports = con;

*/
