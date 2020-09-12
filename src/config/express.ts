import * as bodyParser from 'body-parser';
import express from 'express';
const morgan = require('morgan');

import authenticate from '../middlewares/authenticate';
import application from '../constants/application';
import indexRoute from '../routes/index.route';
import joiErrorHandler from '../middlewares/joiErrorHandler';
import * as errorHandler from '../middlewares/apiErrorHandler';

const app = express();

require('dotenv').config();
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use(authenticate);

// Router
app.use(application.url.base, indexRoute);

// Joi Error Handler
app.use(joiErrorHandler);
// Error Handler
app.use(errorHandler.notFoundErrorHandler);

app.use(errorHandler.errorHandler);

export default app;
