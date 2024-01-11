// controllers/linedPaperController.js
const LinedPaper = require("../models/linedPaperModel");
const createError = require('http-errors');

// Create a new lined paper
exports.createLinedPaper = async (req, res, next) => {
  try {
    const linedPaperData = req.body;
    const newLinedPaper = await LinedPaper.create(linedPaperData);
    res.status(201).json(newLinedPaper);
  } catch (error) {
    console.error(error);
    // Forward the error to the error-handling middleware
    next(createError(500, 'Internal Server Error'));
  }
};

// Get all lined papers
exports.getAllLinedPapers = async (req, res, next) => {
  try {
    const linedPapers = await LinedPaper.find();
    res.status(200).json(linedPapers);
  } catch (error) {
    console.error(error);
    // Forward the error to the error-handling middleware
    next(createError(500, 'Internal Server Error'));
  }
};

// Get lined paper by ID
exports.getLinedPaperById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const linedPaperData = await LinedPaper.findById(id);
    if (!linedPaperData) {
      // Forward a 404 error to the error-handling middleware
      return next(createError(404, 'Lined paper not found'));
    }
    res.status(200).json(linedPaperData);
  } catch (error) {
    console.error(error);
    // Forward the error to the error-handling middleware
    next(createError(500, 'Internal Server Error'));
  }
};

// Update lined paper by ID
exports.updateLinedPaperById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedLinedPaper = await LinedPaper.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedLinedPaper) {
      // Forward a 404 error to the error-handling middleware
      return next(createError(404, 'Lined paper not found'));
    }
    res.status(200).json(updatedLinedPaper);
  } catch (error) {
    console.error(error);
    // Forward the error to the error-handling middleware
    next(createError(500, 'Internal Server Error'));
  }
};

// Delete lined paper by ID
exports.deleteLinedPaperById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedLinedPaper = await LinedPaper.findByIdAndDelete(id);
    if (!deletedLinedPaper) {
      // Forward a 404 error to the error-handling middleware
      return next(createError(404, 'Lined paper not found'));
    }
    res.status(200).json(deletedLinedPaper);
  } catch (error) {
    console.error(error);
    // Forward the error to the error-handling middleware
    next(createError(500, 'Internal Server Error'));
  }
};
