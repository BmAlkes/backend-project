const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const file = new Schema({
  referenceId: {
    type: Schema.Types.ObjectId,
    refPath: "model",
  },
  path: {
    type: String,
    required: true,
    enum: ["service", "sallon"],
  },
  dateRegister: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Files", file);
