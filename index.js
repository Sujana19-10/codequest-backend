// index.js

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/users.js';  // Import routes

dotenv.config();  // Load environment variables

const app = express();

// Middleware
app.use(cors());  // Enable Cross-Origin Requests
app.use(bodyParser.json());  // Parse JSON bodies

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/codequest', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// Use routes
app.use('/api/users', userRoutes);  // Users-related routes

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
