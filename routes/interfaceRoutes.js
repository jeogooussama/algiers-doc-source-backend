const express = require('express');
const router = express.Router();
const interfaceController = require('../controllers/interfaceController');

// Create a new interface
router.post('/', interfaceController.createInterface);

// Get all interfaces
router.get('/', interfaceController.getAllInterfaces);

// Get interface by ID
router.get('/:id', interfaceController.getInterfaceById);

// Update interface by ID
router.put('/:id', interfaceController.updateInterfaceById);

// Delete interface by ID
router.delete('/:id', interfaceController.deleteInterfaceById);

module.exports = router;
