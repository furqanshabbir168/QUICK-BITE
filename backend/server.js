import express from 'express';
import cors from 'cors';
import { connectDB } from './config/database.js';
import foodRouter from './routes/foodRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { adminRoutes } from './routes/adminRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();
const corsConfig = {
  origin:"*",
  credentials:true,
  methods:["GET","POST","DELETE","PUT"],
}

// Middleware
app.use(express.json());
app.use(cors(corsConfig));
app.options("",cors(corsConfig))

// Health check route
app.get('/health', (req, res) => {
  res.status(200).json({ status: "🟢 Server running" });
});

connectDB(); 

    // Routes
    app.use('/api/food', foodRouter);
    app.use('/images', express.static('uploads'));
    app.use('/api/user', userRoutes);
    app.use('/api/admin', adminRoutes);
    app.use('/api/cart', cartRoutes);
    app.use('/api/order', orderRoutes);

    app.use('/', (req, res) => {
      res.send("Hello from Quick Bite!");
    });

    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });

