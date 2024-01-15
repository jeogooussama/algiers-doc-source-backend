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
  downloadLinks: {
    word: {
      type: String,
      required: true,
    },
    pdf: {
      type: String,
    },
  },
  image: {
    type: String,
  },
  type: {
    type: String,
    default: 'linedPaper',
  },
});

const LinedPaper = mongoose.model("LinedPaper", linedPaperSchema);

module.exports = LinedPaper;
