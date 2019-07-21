import express from 'express';

import userController from '../../controllers/user.controller';
import userSchema from '../../constants/schema/user.schema';

const router = express.Router();

const schemaValidator = require('express-joi-validator');

router.post('/register', schemaValidator(userSchema.register), userController.register);
router.post('/login', schemaValidator(userSchema.login), userController.login);
router.get('/me', userController.self);

export default router;
