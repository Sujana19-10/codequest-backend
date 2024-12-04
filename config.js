// config.js

require('dotenv').config();  // Load environment variables

module.exports = {
    url: process.env.MONGO_URI,  // MongoDB connection URI from .env file
};
