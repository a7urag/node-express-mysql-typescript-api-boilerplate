import bookshelf from 'bookshelf';
import knex from './knex';

const orm = bookshelf(knex);

orm.plugin('visibility');

export default orm;
