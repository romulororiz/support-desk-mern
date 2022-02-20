const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');

// Coming from the controller
router.post('/', registerUser);
router.post('/login', loginUser);

module.exports = router;
