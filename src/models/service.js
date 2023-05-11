const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const service = new Schema({
  sallonId: {
    type: mongoose.Types.ObjectId,
    ref: "sallon",
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  commision: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  recurrence: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["A", "I"],
    default: "A",
  },
});

module.exports = mongoose.model("Service", service);
