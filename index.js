const express = require ("express");
const debug = require("debug")("http");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mysql = require("mysql");
const app = express();


const userRoutes = require("./routes/users.js");
const connection = require("./models/database.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

dotenv.config();
const port = process.env.PORT || 8080;

handleDB = () => {
  connection.connect(function(err) {
    if (err) {
      console.log("Database error : " + err);
      setTimeout(handleDB, 2000);
    }
    console.log("Connected!!");
  });

  connection.on("error", function(err) {
    console.log("db error", err);
  });
};

handleDB();

app.listen(port, () => {
  debug(`Start server at port : ${port}`);
  console.log(`Server running on port: ${port}`);
});

app.use("/notes", userRoutes);