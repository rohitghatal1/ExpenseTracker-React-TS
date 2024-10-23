import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

// connecting to MongoDB
const mongoURI = process.env.MONGO_URI;

if(!mongoURI) {
    console.error('MongoDB URI is not defined in environment varibales');
    process.exit(1);
}

mongoose.connect(mongoURI)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB connection error:', err));

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
})