import express from 'express';
import upload from '../lib/multer';
import { createRestaurant } from '../controllers/restaurant.controller';
import { jwtCheck, jwtParse } from '../middleware/auth.middleware';
const router = express.Router();

router.post('/', upload.single("imageFile"), jwtCheck, jwtParse, createRestaurant);
export default router;