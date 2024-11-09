const mongoose = require("mongoose");

const MessagesSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  userID: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Messages", MessagesSchema);
