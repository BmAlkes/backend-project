const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const colaborador = new Schema({
  name: {
    type: String,
    required: [true, "name required"],
  },
  picture: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "email required"],
  },
  sex: {
    type: String,
    enum: ["M", "F"],
  },
  birthday: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    default: null,
  },
  status: {
    type: String,
    required: true,
    enum: ["A", "I"],
    default: "A",
  },
  accountBank: {
    titular: {
      type: String,
      required: true,
    },
    agencia: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    titular: {
      type: String,
      required: true,
    },
    recipientId: {
      type: String,
      required: true,
    },
    dataCadastro: {
      type: Date,
      default: Date.now(),
    },
  },
  phone: String,
});

module.exports = mongoose.model("colaborador", colaborador);
