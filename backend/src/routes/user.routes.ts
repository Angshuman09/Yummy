import express from 'express';
import { createUser } from '../controllers/user.controllers';
import { jwtCheck } from '../middleware/auth.middleware';
const router = express.Router();

router.post('/', jwtCheck, createUser);
export default router;