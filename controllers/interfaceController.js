// controllers/interfaceController.js
const Interface = require("../models/interfaceModel");
const createError = require('http-errors');

// Create a new interface
exports.createInterface = async (req, res, next) => {
  try {
    const interfaceData = req.body;
    const newInterface = await Interface.create(interfaceData);
    res.status(201).json(newInterface);
  } catch (error) {
    console.error(error);
    // Forward the error to the error-handling middleware
    next(createError(500, 'Internal Server Error'));
  }
};

// Get all interfaces
exports.getAllInterfaces = async (req, res, next) => {
  try {
    const interfaces = await Interface.find();
    res.status(200).json(interfaces);
  } catch (error) {
    console.error(error);
    // Forward the error to the error-handling middleware
    next(createError(500, 'Internal Server Error'));
  }
};

// Get interface by ID
exports.getInterfaceById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const interfaceData = await Interface.findById(id);
    if (!interfaceData) {
      // Forward a 404 error to the error-handling middleware
      return next(createError(404, 'Interface not found'));
    }
    res.status(200).json(interfaceData);
  } catch (error) {
    console.error(error);
    // Forward the error to the error-handling middleware
    next(createError(500, 'Internal Server Error'));
  }
};

// Update interface by ID
exports.updateInterfaceById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedInterface = await Interface.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedInterface) {
      // Forward a 404 error to the error-handling middleware
      return next(createError(404, 'Interface not found'));
    }
    res.status(200).json(updatedInterface);
  } catch (error) {
    console.error(error);
    // Forward the error to the error-handling middleware
    next(createError(500, 'Internal Server Error'));
  }
};

// Delete interface by ID
exports.deleteInterfaceById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedInterface = await Interface.findByIdAndDelete(id);
    if (!deletedInterface) {
      // Forward a 404 error to the error-handling middleware
      return next(createError(404, 'Interface not found'));
    }
    res.status(200).json(deletedInterface);
  } catch (error) {
    console.error(error);
    // Forward the error to the error-handling middleware
    next(createError(500, 'Internal Server Error'));
  }
};
