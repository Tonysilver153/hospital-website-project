const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the frontend directory
app.use('/', express.static(path.join(__dirname, '../frontend')));

// Move debug middleware before API routes
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`, req.body);
    next();
});

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Successfully connected to MongoDB Atlas.');
    })
    .catch((error) => {
        console.error('MongoDB Atlas connection error:', error);
        process.exit(1);
    });

// API Routes
app.use('/api/appointments', require('./routes/appointmentRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// Handle all routes by serving index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something broke!', error: err.message });
});

// Use PORT from environment variables
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log('MongoDB URI:', process.env.MONGODB_URI);
});