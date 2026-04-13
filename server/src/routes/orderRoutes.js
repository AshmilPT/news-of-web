import express from 'express';
import multer from 'multer';
import { createOrder, getOrders } from '../controllers/orderController.js';

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

// GET /api/orders
router.get('/', getOrders);

// POST /api/orders
router.post('/', upload.single('prdFile'), createOrder);

export default router;
