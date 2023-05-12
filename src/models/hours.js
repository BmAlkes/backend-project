const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const hours = new Schema({
  sallonId: {
    type: mongoose.Types.ObjectId,
    ref: "sallon",
    required: true,
  },
  registerDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Hours", hours);
