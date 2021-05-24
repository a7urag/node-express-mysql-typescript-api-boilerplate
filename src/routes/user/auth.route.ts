import express from 'express';

import userController from '../../controllers/user.controller';
import userSchema from '../../constants/schema/user.schema';

const router = express.Router();
import { celebrate } from 'celebrate';

router.post(
  '/register',
  celebrate(userSchema.register),
  userController.register,
);
router.post(
  '/login',
  celebrate(userSchema.login),
  userController.login,
);
router.get('/me', userController.self);

export default router;
