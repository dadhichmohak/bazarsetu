const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    aadhaarNumber: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        enum: ['farmer', 'buyer'],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;