import express from 'express'
import mongoose from 'mongoose';
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';

import authRoutes from './routes/authRoutes.js';
import activityRoutes from './routes/activityRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';

dotenv.config({
    path: "./.env",
});

const app = express();
app.use(cookieParser());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI,{ dbName: 'Backend_task' })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api/activities', activityRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));