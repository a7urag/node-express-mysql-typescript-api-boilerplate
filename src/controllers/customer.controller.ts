import express from 'express';
import HttpStatusCodes from 'http-status-codes';

import * as customerService from '../services/customer.service';

const getCustomerInfo = async (req: express.Request, res: express.Response) => {
    const result = await customerService.getCustomerById(req.params.customerId);
    if (result) {
        res.status(HttpStatusCodes.OK).json({
            success: true,
            data: result,
        })
    } else {
        res.status(HttpStatusCodes.NOT_FOUND).json({
            success: false,
            error: {
                message: "Not found.",
                code: HttpStatusCodes.NOT_FOUND
            }
        })
    }
};

const getCustomerOrders = async (req: express.Request, res: express.Response) => {
    const result = await customerService.getCustomerOrders(req.params.customerId);
    if (result) {
        res.status(HttpStatusCodes.OK).json({
            success: true,
            data: result,
        })
    } else {
        res.status(HttpStatusCodes.NOT_FOUND).json({
            success: false,
            error: {
                message: "Not found.",
                code: HttpStatusCodes.NOT_FOUND
            }
        })
    }
};

export {
    getCustomerInfo,
    getCustomerOrders
}