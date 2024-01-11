// models/linedPaperModel.js
const mongoose = require("mongoose");

const linedPaperSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: "true",
  },
  downloadLink: {
    type: {
      word: String,
      pdf: String,
    },
    required: true,
  },
  image: {
    type: String,
  },
});

const LinedPaper = mongoose.model("LinedPaper", linedPaperSchema);

module.exports = LinedPaper;
