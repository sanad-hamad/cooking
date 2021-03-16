const mysql = require("mysql");
const dbConfig = require("../config/db.config");

const connection = mysql.createConnection({
  host: dbConfig.Host,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});
connection.connect((error) => {
  if (error) {
    console.log(error);
  }
  console.log("Successfully connected to the database");
});

module.exports = connection;
