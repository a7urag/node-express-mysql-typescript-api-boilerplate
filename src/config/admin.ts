import AdminBro from 'admin-bro';
// @ts-ignore
import adminBroExpress from '@admin-bro/express';
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
