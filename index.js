const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectToDataBase = require("./database");

const app = express();
dotenv.config();
// Middleware
app.use(morgan("dev"));

//Variables
app.set("port", 8000);
connectToDataBase();
app.listen(app.get("port"), () => {
  console.log("listening on port " + app.get("port"));
});
