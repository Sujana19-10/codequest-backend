// controllers/userController.js

import User from '../models/User.js';  // Correct import syntax


// Function to create a new user
const createUser = async (req, res) => {
    try {
        console.log('Received Data:', req.body);

        const { Username, Useryear, Userhallticketno } = req.body;

        // Check if all required fields are provided
        if (!Username || !Useryear || !Userhallticketno) {
            return res.status(400).json({ success: false, message: 'Missing required fields' });
        }

        // Check if the user already exists to avoid duplicates
        const existingUser = await User.findOne({ 
            Username, 
            Useryear, 
            Userhallticketno 
        });

        if (existingUser) {
            return res.status(400).json({ success: false, message: 'User already exists' });
        }

        // Create a new user instance
        const newUser = new User({
            Username,
            Useryear,
            Userhallticketno
        });

        // Save the user to MongoDB
        const savedUser = await newUser.save();
        console.log('User saved:', savedUser);

        res.status(201).json({ success: true, message: 'User data saved successfully', user: savedUser });
    } catch (err) {
        console.error('Error saving user:', err);
        res.status(500).json({ success: false, message: 'Error saving user data', error: err.message });
    }
};

// Function to update user level
const updateUserLevel = async (req, res) => {
    try {
        const { Username, Useryear, Userhallticketno, level } = req.body;

        // Validate inputs
        if (!Username || !Useryear || !Userhallticketno || level === undefined) {
            return res.status(400).json({ success: false, message: 'Missing required fields' });
        }

        // Find the user by unique identifiers and update the level field
        const updatedUser = await User.findOneAndUpdate(
            { Username, Useryear, Userhallticketno },
            { $set: { level } }, // Update or add the level field
            { new: true, upsert: false } // Return the updated user document, do not create a new one if not found
        );

        if (updatedUser) {
            res.status(200).json({ success: true, message: 'User level updated successfully', user: updatedUser });
        } else {
            res.status(404).json({ success: false, message: 'User not found' });
        }
    } catch (err) {
        console.error('Error updating user level:', err);
        res.status(500).json({ success: false, message: 'Error updating user level', error: err.message });
    }
};

// Export functions using ES module syntax
export { createUser, updateUserLevel };
