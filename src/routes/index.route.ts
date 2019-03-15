import * as express from 'express';

import customerRouter from './customer.route';

const router = express.Router();

router.use('/customer', customerRouter);

export default router;