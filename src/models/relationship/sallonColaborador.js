const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sallonColaborador = new Schema({
  sallonId: {
    type: mongoose.Types.ObjectId,
    ref: "sallon",
    required: true,
  },
  colaboradorId: {
    type: mongoose.Types.ObjectId,
    ref: "colaborador",
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["A", "I"],
    default: "A",
  },
  dateRegister: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("SalonColaborador", sallonColaborador);
