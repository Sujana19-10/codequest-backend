const mongoose = require('mongoose');
const Level = require('../models/Level');
require('dotenv').config();  // Ensure that environment variables are loaded

const dbConfig = require('./dbConfig');

// Connect to MongoDB using the connection string from environment variables
mongoose.connect(dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected successfully');
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1);  // Exit process with failure code
    });

const levels = [
    // Example seed data - fill with actual level data
    {
        level: 1,
        description: 'Easy Question Level',
        difficulty: 'easy',
        // Add other fields based on your model
    },
    {
        level: 2,
        description: 'Medium Question Level',
        difficulty: 'medium',
        // Add other fields based on your model
    },
    {
        level: 3,
        description: 'Hard Question Level',
        difficulty: 'hard',
        // Add other fields based on your model
    }
];

// Seed the levels data
Level.insertMany(levels)
    .then(() => {
        console.log('Levels seeded');
        mongoose.connection.close();  // Close the connection once seeding is complete
    })
    .catch(err => {
        console.error('Error seeding levels:', err);
        mongoose.connection.close();
    });
