const express = require("express");
const app = express();
const morgan = require("morgan");

// Middleware
app.use(morgan("dev"));

//Variables
app.set("port", 8000);

app.listen(app.get("port"), () => {
  console.log("listening on port " + app.get("port"));
});
