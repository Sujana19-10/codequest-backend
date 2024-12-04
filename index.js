const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/users');  // Import user routes
require('dotenv').config();  // Load environment variables

// MongoDB Connection (Using the correct environment variable)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.log('MongoDB connection error:', err));

const app = express();
const PORT = process.env.PORT || 3001;  // Set the port (3001 by default)

// Middleware setup
app.use(cors());  // Enable cross-origin resource sharing (CORS)
app.use(bodyParser.json());  // Parse incoming requests with JSON payloads

// API Routes
app.use('/api/users', userRoutes);  // User-related routes

// Server Start
app.listen(PORT, () => {
  console.log(`Node.js Server running on port ${PORT}`);

  // Log URLs for confirmation
  console.log(`Frontend URL: ${process.env.FRONTEND_URL || 'http://localhost:3000'}`);
  console.log(`Backend URL: ${process.env.CODEQUEST_BACKEND_URL || 'http://localhost:3001'}`);
  console.log(`Python Backend URL: ${process.env.PYTHON_BACKEND_URL || 'http://localhost:5000'}`);
});
