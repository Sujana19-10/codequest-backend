// routes/users.js

import { Router } from 'express';
import { createUser, updateUserLevel } from '../controllers/userController.js';  // Import user controller functions
import { validateCode, validateCodeLevel2, validateCodeLevel3 } from '../controllers/levelController.js';  // Import level controller functions

const router = Router();

// Route to save user data
router.post('/createUser', createUser);  // Creating user with 'createUser' endpoint

// Route to update user level
router.put('/updateUserLevel', updateUserLevel);  // Updated to use PUT for updates

// Endpoint for code validation
router.post('/validateCode', validateCode);  // For Level 1 validation
router.post('/validateCodeLevel2', validateCodeLevel2);  // For Level 2 validation
router.post('/validateCodeLevel3', validateCodeLevel3);  // For Level 3 validation

export default router;  // Ensure proper export
