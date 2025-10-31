import express from 'express';
import { createUser, updateCurrentUser } from '../controllers/user.controllers';
import { jwtCheck, jwtParse } from '../middleware/auth.middleware';
import { validateMyUserRequest } from '../middleware/validation.middleware';
const router = express.Router();

router.post('/', jwtCheck, createUser);
router.put('/', jwtCheck, jwtParse, validateMyUserRequest, updateCurrentUser);
export default router;