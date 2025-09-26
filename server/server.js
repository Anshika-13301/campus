require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/api');

const app = express();

// Connect to MongoDB using environment variable
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://noamaanmulla03_db_user:9g03TAHAFR3EAU8Q@cluster0.ym9552n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(MONGODB_URI);

// CORS configuration using environment variables
const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:3001',
    process.env.FRONTEND_URL,
    'https://organic-umbrella-6w7j7x6q79r2xrrv.github.dev',
    'https://organic-umbrella-6w7j7x6q79r2xrrv-3001.app.github.dev',
    'https://organic-umbrella-6w7j7x6q79r2xrrv-3333.app.github.dev'
].filter(Boolean); // Remove any undefined values

app.use(cors({
    origin: allowedOrigins,
    credentials: true
}));

app.use(express.json());
app.use('/api', routes);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});