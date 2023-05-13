const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sallonClient = new Schema({
  sallonId: {
    type: mongoose.Types.ObjectId,
    ref: "sallon",
    required: true,
  },
  clientId: {
    type: mongoose.Types.ObjectId,
    ref: "client",
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

module.exports = mongoose.model("sallonClient", sallonClient);
