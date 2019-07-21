import 'reflect-metadata';
import { createConnection } from 'typeorm';
const morgan = require('morgan');

import express from './config/express';
import application from './constants/application';

import * as errorHandler from './middlewares/apiErrorHandler';
import joiErrorHandler from './middlewares/joiErrorHandler';
import logger from './config/logger';
import authenticate from './middlewares/authenticate';

import indexRoute from './routes/index.route';

const PORT = process.env.PORT || 5000;

createConnection().then(() => {
    logger.info('database connection created');
    express.use(morgan('dev'));

    express.use(authenticate);

// Router
    express.use(application.url.base, indexRoute);

// Joi Error Handler
    express.use(joiErrorHandler);
// Error Handler
    express.use(errorHandler.notFoundErrorHandler);

    express.use(errorHandler.errorHandler);

    express.listen(PORT, () => {
        logger.info(`Server running at ${PORT}`);
    });
}).catch((error) => {
    logger.info(`Database connection failed with error ${error}`);
});

export default express;
