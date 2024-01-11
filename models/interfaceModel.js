// models/interfaceModel.js
const mongoose = require("mongoose");

const interfaceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  university: {
    type: String,
  },
  language: {
    type: String,
    required: true,
  },
  downloadLinks: {
    type: {
      word: String,
      pdf: String,
    },
  },
  image: {
    type: String,
  },
});

const Interface = mongoose.model("Interface", interfaceSchema);

module.exports = Interface;
