const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        enum: ['student', 'canteen_worker'],
        default: 'student'
    },
    // Student specific fields
    major: String,
    studentID: String,
    // Canteen worker specific fields
    canteenId: String,
    position: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);