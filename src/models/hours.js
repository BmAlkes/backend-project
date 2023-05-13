const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const hours = new Schema({
  sallonId: {
    type: mongoose.Types.ObjectId,
    ref: "sallon",
    required: true,
  },
  colaborador: {
    type: mongoose.Types.ObjectId,
    ref: "colaborador",
    required: true,
  },
  especialities: [
    {
      type: mongoose.Types.ObjectId,
      ref: "service",
      required: true,
    },
  ],
  registerDate: {
    type: Date,
    default: Date.now,
  },
  days: {
    type: Array,
    required: true,
  },
  initial: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Hours", hours);
