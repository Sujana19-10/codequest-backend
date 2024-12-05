// models/User.js

import mongoose from 'mongoose';  // Use import for ES module

const userSchema = new mongoose.Schema({
    Username: { type: String, required: true },
    Useryear: { type: String, required: true },
    Userhallticketno: { 
        type: Number, 
        required: true, 
        min: [1, 'Userhallticketno must be at least 1.'],  // Minimum value is 1
        max: [300, 'Userhallticketno must not exceed 300.'] // Maximum value is 300 (adjust as per requirements)
    },
    level: { 
        type: Number, 
        default: 0, // Default value if not provided
    },
}, { 
    timestamps: true // This will add createdAt and updatedAt fields
});

// Optionally add a unique index for compound fields if required
userSchema.index({ Username: 1, Useryear: 1, Userhallticketno: 1 }, { unique: true });

// Create and export the User model using ES module export
const User = mongoose.model('User', userSchema);
export default User;
