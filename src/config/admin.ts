const AdminBro = require('admin-bro');
// @ts-ignore
const adminBroExpress  = require('@admin-bro/express');
import { Database, Resource } from '@admin-bro/typeorm';
import { Connection } from 'typeorm';
import { User } from '../entities/user/user.entity';

AdminBro.registerAdapter({ Database, Resource });

const adminBroRoute = (connection: Connection) => {
  User.useConnection(connection);

  return new AdminBro({
    databases: [connection],
    rootPath: '/admin',
    resources: [{ resource: User }],
  });
};
export default (connection: Connection) =>
  adminBroExpress.buildRouter(adminBroRoute(connection));
