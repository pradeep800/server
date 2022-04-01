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
