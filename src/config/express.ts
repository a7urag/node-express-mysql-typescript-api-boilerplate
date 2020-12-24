import express from 'express';
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const compression = require('compression');

import authenticate from '../middlewares/authenticate';
import application from '../constants/application';
import indexRoute from '../routes/index.route';
import joiErrorHandler from '../middlewares/joiErrorHandler';
import * as errorHandler from '../middlewares/apiErrorHandler';

const app = express();

app.enable('trust proxy');

// Set Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Set Cookie parser
app.use(cookieParser());

// Set security HTTP headers
app.use(helmet());

//Limit requests from the same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  messege: 'Too many requests from this IP, Please try again in an hour!'
});
app.use('/', limiter);

//Data sanitization against XSS
app.use(xss());

// Prevent http param pollution
app.use(hpp());

// Implement CORS
app.use(cors());

app.options('*', cors());

app.use(compression());

app.disable('x-powered-by');

require('dotenv').config();

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
