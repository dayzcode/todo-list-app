const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Atlas connection string
const mongoURI = 'mongodb+srv://matthewde643:DrbJEn5eH76OZXmm@cluster0.01twtmm.mongodb.net/todo-app?retryWrites=true&w=majority';

mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
