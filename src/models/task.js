const mongoose = require("mongoose");

const Task = mongoose.model("Task", {
  title: {
    type: String,
    required: true,
    trim: true,
  },
  amount: {
    type: Number,
    required: true,
    trim: true,
  },
  date: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = Task;
