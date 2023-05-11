const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sallon = new Schema({
  name: {
    type: String,
    required: [true, "name required"],
  },
  picture: String,
  capa: String,
  email: {
    type: String,
    required: [true, "email required"],
  },
  password: {
    type: String,
    default: null,
  },
  phone: String,
  adress: {
    city: String,
    number: String,
    country: String,
  },
  geo: {
    type: String,
    coordinates: Array,
  },
  dateRegister: {
    type: Date,
    default: Date.now,
  },
});
sallon.index({ geo: "2dsphere" });
module.exports = mongoose.model("Sallon", sallon);
