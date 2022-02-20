const express = require('express');
const router = express.Router();
const {
	registerUser,
	loginUser,
	getMe,
	getUsers,
} = require('../controllers/userController');
const protectRoute = require('../middleware/authMiddleware');

// Coming from the controller
router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/', protectRoute, getUsers);
router.get('/me', protectRoute, getMe);

module.exports = router;
