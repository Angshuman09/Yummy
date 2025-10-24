import express from 'express';
import { createUser } from '../controllers/user.controllers';
const router = express.Router();

router.post('/',createUser);
export default router;