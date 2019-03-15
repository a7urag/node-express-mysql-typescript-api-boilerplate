import express from 'express';
import * as bodyParser from 'body-parser';

const app = express();

require('dotenv').config();

app.use(bodyParser.json());

export default app;
