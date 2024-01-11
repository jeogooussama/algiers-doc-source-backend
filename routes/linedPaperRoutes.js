const express = require('express');
const router = express.Router();
const linedPaperController = require('../controllers/linedPaperController');

// Create a new lined paper
router.post('/create', linedPaperController.createLinedPaper);

// Get all lined papers
router.get('/get-all', linedPaperController.getAllLinedPapers);

// Get lined paper by ID
router.get('/get/:id', linedPaperController.getLinedPaperById);

// Update lined paper by ID
router.put('/update/:id', linedPaperController.updateLinedPaperById);

// Delete lined paper by ID
router.delete('/delete/:id', linedPaperController.deleteLinedPaperById);

module.exports = router;
