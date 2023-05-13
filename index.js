const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectToDataBase = require("./database");
const cors = require("cors");

const app = express();
dotenv.config();
// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//Variables
app.set("port", 8000);
connectToDataBase();

app.use("/sallon", require("./src/routes/sallon.routes"));
app.listen(app.get("port"), () => {
  console.log("listening on port " + app.get("port"));
});
