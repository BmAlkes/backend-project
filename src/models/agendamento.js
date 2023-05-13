const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const agendamento = new Schema({
  sallonId: {
    type: mongoose.Types.ObjectId,
    ref: "Sallon",
    required: true,
  },
  clientId: {
    type: mongoose.Types.ObjectId,
    ref: "Client",
    required: true,
  },
  serviceId: {
    type: mongoose.Types.ObjectId,
    ref: "Service",
    required: true,
  },
  colaboradorId: {
    type: mongoose.Types.ObjectId,
    ref: "colaborador",
    required: true,
  },
  data: {
    type: Date,
    required: true,
  },
  comission: {
    type: Number,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },

  dateRegister: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("agendamento", agendamento);
