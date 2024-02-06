const express = require('express');
const router = express.Router();
const linedPaperController = require('../controllers/linedPaperController');

// Create a new lined paper
router.post('/', linedPaperController.createLinedPaper);

// Get all lined papers
router.get('/', linedPaperController.getAllLinedPapers);

// Get lined paper by ID
router.get('/:id', linedPaperController.getLinedPaperById);

// Update lined paper by ID
router.put('/:id', linedPaperController.updateLinedPaperById);

// Delete lined paper by ID
router.delete('/:id', linedPaperController.deleteLinedPaperById);

module.exports = router;
