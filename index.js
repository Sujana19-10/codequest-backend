// server/index.js
import userRoutes from './routes/users.js';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';


dotenv.config();

const app = express();

// CORS setup for production and development environments
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' ? 'https://codequest-gamification.netlify.app' : '*', // adjust the URL to your production app
  methods: 'GET,POST',
  credentials: true
};

app.use(cors(corsOptions));

// Middleware for parsing JSON
app.use(express.json());

// API routes
app.use('/api', userRoutes);

// MongoDB connection setup
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.log('Error connecting to MongoDB: ', err));

// Port setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
