import * as express from 'express';

import userAuth from './user/auth.route';

const router = express.Router();

router.use('/user/auth', userAuth);

export default router;