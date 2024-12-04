// database/dbConfig.js

const mongoose = require('mongoose');
require('dotenv').config();  // Load environment variables

const dbURI = process.env.MONGO_URI;  // MongoDB URI

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected for Node.js backend'))
  .catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose;
