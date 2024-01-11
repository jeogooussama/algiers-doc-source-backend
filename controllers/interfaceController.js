// controllers/interfaceController.js
const Interface = require("../models/interfaceModel");

// Create a new interface
exports.createInterface = async (req, res) => {
  try {
    const interfaceData = req.body;
    const newInterface = await Interface.create(interfaceData);
    res.status(201).json(newInterface);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get all interfaces
exports.getAllInterfaces = async (req, res) => {
  try {
    const interfaces = await Interface.find();
    res.status(200).json(interfaces);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get interface by ID
exports.getInterfaceById = async (req, res) => {
  try {
    const { id } = req.params;
    const interfaceData = await Interface.findById(id);
    if (!interfaceData) {
      return res.status(404).json({ error: "Interface not found" });
    }
    res.status(200).json(interfaceData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update interface by ID
exports.updateInterfaceById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedInterface = await Interface.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedInterface) {
      return res.status(404).json({ error: "Interface not found" });
    }
    res.status(200).json(updatedInterface);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete interface by ID
exports.deleteInterfaceById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedInterface = await Interface.findByIdAndDelete(id);
    if (!deletedInterface) {
      return res.status(404).json({ error: "Interface not found" });
    }
    res.status(200).json(deletedInterface);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
