const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');

// Create a new reservation
router.post('/', reservationController.createReservation);

// Get all reservations
router.get('/', reservationController.getReservations);

// Update a reservation
router.put('/:id', reservationController.updateReservation);

// Delete a reservation
router.delete('/:id', reservationController.deleteReservation);

module.exports = router;
