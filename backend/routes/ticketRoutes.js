const express = require('express');
const router = express.Router();
const protectRoute = require('../middleware/authMiddleware.js');
const { getTickets, createTicket } = require('../controllers/ticketController');

router
	.route('/')
	.get(protectRoute, getTickets)
	.post(protectRoute, createTicket);

module.exports = router;
