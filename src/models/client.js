const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const client = new Schema({
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
  birthday: {
    type: String,
    required: true,
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
  sex: {
    type: String,
    enum: ["M", "F"],
  },

  dateRegister: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    required: true,
    enum: ["A", "I"],
    default: "A",
  },
  document: {
    type: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
  },
});

module.exports = mongoose.model("Client", client);
