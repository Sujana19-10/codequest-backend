// routes/users.js

const express = require('express');
const router = express.Router();

// Import controllers
const userController = require('../controllers/userController');
const levelController = require('../controllers/levelController');

// Route to save user data
router.post('/createUser', userController.createUser);  // Creating user with 'createUser' endpoint

// Route to update user level
router.put('/updateUserLevel', userController.updateUserLevel);  // Updated to use PUT for updates

// Endpoint for code validation
router.post('/validateCode', levelController.validateCode);  // For Level 1 validation
router.post('/validateCodeLevel2', levelController.validateCodeLevel2);  // For Level 2 validation
router.post('/validateCodeLevel3', levelController.validateCodeLevel3);  // For Level 3 validation

module.exports = router;
