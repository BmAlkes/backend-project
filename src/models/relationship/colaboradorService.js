const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const colaboradorService = new Schema({
  serviceId: {
    type: mongoose.Types.ObjectId,
    ref: "service",
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

module.exports = mongoose.model("colaboradorService", colaboradorService);
