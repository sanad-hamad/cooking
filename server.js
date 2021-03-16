const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "welcome to home page" });
});

mysql.createConnection({
  host: dbconfig.Host,
  user: dbconfig.USER,
  password: dbconfig.password,
  database: dbconfig.DB,
});

const port = process.env.PORT || 8080;

require("./app/routes/customer.routes.js")(app);

app.listen(port, () => console.log(`start at port no ${port}`));
