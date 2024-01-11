const express = require('express');
const router = express.Router();
const interfaceController = require('../controllers/interfaceController');

// Create a new interface
router.post('/create', interfaceController.createInterface);

// Get all interfaces
router.get('/get-all', interfaceController.getAllInterfaces);

// Get interface by ID
router.get('/get/:id', interfaceController.getInterfaceById);

// Update interface by ID
router.put('/update/:id', interfaceController.updateInterfaceById);

// Delete interface by ID
router.delete('/delete/:id', interfaceController.deleteInterfaceById);

module.exports = router;
