require('@babel/register');

const dbConfig = require('./src/config/database');

module.exports = Object.assign({}, dbConfig.default);
