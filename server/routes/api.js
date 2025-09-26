const express = require('express');
const User = require('../models/db');
const routes = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const requireAuth = require('../middleware/auth');

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-campus-bite-2024';

routes.post('/register', async (req, res) => {
    try {
        const { name, email, password, role, major, studentID, canteenId, position } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user data based on role
        const userData = {
            name,
            email,
            password: hashedPassword,
            role: role || 'student'
        };

        // Add role-specific fields
        if (userData.role === 'student') {
            userData.major = major;
            userData.studentID = studentID;
        } else if (userData.role === 'canteen_worker') {
            userData.canteenId = canteenId;
            userData.position = position;
        }

        // Create a new user
        const newUser = new User(userData);
        await newUser.save();

        // Generate JWT token
        const token = jwt.sign(
            { userId: newUser._id, email: newUser.email, role: newUser.role },
            JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.status(201).json({
            message: 'User registered successfully',
            token,
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                role: newUser.role,
                major: newUser.major,
                studentID: newUser.studentID,
                canteenId: newUser.canteenId,
                position: newUser.position
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

routes.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { userId: user._id, email: user.email, role: user.role },
            JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.json({
            message: 'Login successful',
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                major: user.major,
                studentID: user.studentID,
                canteenId: user.canteenId,
                position: user.position
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Protected route to get user profile
routes.get('/profile', requireAuth, async (req, res) => {
    try {
        const user = await User.findById(req.userId).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

// Route to verify token
routes.get('/verify-token', requireAuth, (req, res) => {
    res.json({ message: 'Token is valid', userId: req.userId });
});

module.exports = routes;