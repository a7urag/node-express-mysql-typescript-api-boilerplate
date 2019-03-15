// import path from 'path';
const morgan = require('morgan');

import app from './config/express';
import routes from './routes/index.route';
import * as errorHandler from './middlewares/apiErrorHandler';
import joiErrorHandler from './middlewares/joiErrorHandler';

const PORT = process.env.PORT || 5000;

// Swagger API documentation
// app.get('/swagger.json', (req, res) => {
//     res.json(swagger);
// });

app.use(morgan('dev'));

// Router
app.use('/api', routes);

// Joi Error Handler
app.use(joiErrorHandler);

// Error Handler
app.use(errorHandler.notFoundErrorHandler);
app.use(errorHandler.errorHandler);

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});

export default app;