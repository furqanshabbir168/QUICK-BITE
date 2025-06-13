import express from 'express';
import { registerAdmin , loginAdmin } from '../controllers/adminController.js';

export const adminRoutes = express.Router();

adminRoutes.post('/register',registerAdmin);
adminRoutes.post('/login',loginAdmin);

