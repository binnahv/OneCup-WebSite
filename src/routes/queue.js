const express = require('express');
const router = express.Router();
const queueController = require('../controllers/queueController');

// Add to queue
router.post('/', queueController.addToQueue);

// Get current queue
router.get('/', queueController.getQueue);

// Remove from queue
router.delete('/:id', queueController.removeFromQueue);

module.exports = router;
