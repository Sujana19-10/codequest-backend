// index.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/users');  // Import user routes
require('dotenv').config();  // Load environment variables

const app = express();
const PORT = process.env.PORT || 3001;  // Set the port (3001 by default)

// Middleware setup
app.use(cors());  // Enable cross-origin resource sharing (CORS)
app.use(bodyParser.json());  // Parse incoming requests with JSON payloads

// MongoDB Connection
const mongoURI = process.env.DB_URI || 'mongodb+srv://baswadasujana19:<password>@cluster0.15pb0.mongodb.net/codequest?retryWrites=true&w=majority';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected for Node.js backend'))
  .catch(err => console.error('MongoDB connection error:', err));

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
