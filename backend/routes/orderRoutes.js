import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import { listOrder, placeOrder, updateOrderStatus, userOrder, verifyPayment } from '../controllers/orderController.js';

const orderRoutes = express.Router();

orderRoutes.post('/place',authMiddleware,placeOrder);
orderRoutes.post('/verify',verifyPayment);
orderRoutes.post('/userorder',authMiddleware,userOrder);
orderRoutes.post('/listorder',listOrder);
orderRoutes.post('/status',updateOrderStatus);

export default orderRoutes