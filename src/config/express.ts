import * as bodyParser from 'body-parser';
import express from 'express';
import authenticate from '../middlewares/authenticate';
import application from '../constants/application';
import indexRoute from '../routes/index.route';
import adminRoute from './admin';
import joiErrorHandler from '../middlewares/joiErrorHandler';
import * as errorHandler from '../middlewares/apiErrorHandler';
import { Connection } from 'typeorm';

const morgan = require('morgan');

const init = (connection: Connection) => {
  const app = express();

  require('dotenv').config();
  app.use(bodyParser.json());

  app.use(morgan('dev'));
  // Router
  app.use(application.url.base, authenticate, indexRoute);
  app.use(application.url.admin, adminRoute(connection));

  // Joi Error Handler
  app.use(joiErrorHandler);
  // Error Handler
  app.use(errorHandler.notFoundErrorHandler);

  app.use(errorHandler.errorHandler);

  return app;
};

export default init;
