import express from 'express';
import * as  customerCtrl from '../controllers/customer.controller';

const router = express.Router();

router.route('/:customerId/info')
    .get(customerCtrl.getCustomerInfo);

router.route('/:customerId/orders')
    .get(customerCtrl.getCustomerOrders);

export default router;