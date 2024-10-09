const express = require('express');
const connectDB = require('./config/db'); // Ensure this path is correct
const cors = require('cors');
require('dotenv').config();

const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(express.json({ extended: false }));
app.use(cors());

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/authLogin', require('./routes/authLogin')); // Ensure this path is correct

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
