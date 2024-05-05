const mongoose = require('mongoose');

// Define the schema
const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profilePic: String,
    role:String,    
}, {
    timestamps: true
});

// Create and export the Mongoose model
const UserModel = mongoose.model('User', userSchema); // Capitalize model name conventionally

module.exports = UserModel;
