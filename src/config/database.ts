require('dotenv').config();

export default {
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'scout',
    database: process.env.DB_NAME || 'node_local',
    charset: 'utf8',
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: `${process.cwd()}/src/migrations`,
  },
  debug: process.env.NODE_ENV === 'development',
};
