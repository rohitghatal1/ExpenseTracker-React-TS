import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import expenseRoutes from './routes/expenses';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI || '')
.then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Database connection error:', error);
});

// Routes
app.use('/api/expenses', expenseRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
