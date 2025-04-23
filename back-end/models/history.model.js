const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("History", historySchema);
