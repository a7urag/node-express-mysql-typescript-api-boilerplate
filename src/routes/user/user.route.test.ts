import request, { CallbackHandler } from 'supertest';
import routes from './auth.route';
import app from '../../config/express';

import userService from '../../services/user.service';

describe('Test User Auth routes', () => {
  beforeEach(() => {});
  it('User register with valid body', (done: CallbackHandler) => {
    userService.createUser = jest.fn().mockReturnValue({ id: 1 });
    return request(app.use(routes))
      .post('/api/user/auth/register')
      .send({
        email: 'test@gmail.com',
        password: '123456',
        name: 'aa ',
      })
      .expect(201)
      .expect((res: any) => {
        expect(res.text).toBe(
          JSON.stringify({ data: { id: 1 }, success: true }),
        );
        expect(userService.createUser).toHaveBeenCalledTimes(1);
      })
      .end(done);
  });

  it('User register with invalid body', (done: CallbackHandler) => {
    userService.createUser = jest.fn().mockReturnValue({ id: 1 });

    return request(app.use(routes))
      .post('/api/user/auth/register')
      .expect(400)
      .expect((res: any) => {
        expect(userService.createUser).toHaveBeenCalledTimes(0);
      })
      .end(done);
  });

  it('User register with invalid user', (done: CallbackHandler) => {
    userService.createUser = jest.fn().mockReturnValue(undefined);
    return request(app.use(routes))
      .post('/api/user/auth/register')
      .send({
        email: 'test@gmail.com',
        password: '123456',
        name: 'aa ',
      })
      .expect(400)
      .expect((res: any) => {
        expect(userService.createUser).toHaveBeenCalledTimes(1);
      })
      .end(done);
  });

  it('User register with duplicate email', (done: CallbackHandler) => {
    userService.createUser = jest.fn().mockImplementation(() => {
      // @ts-ignore
      throw new Error({ code: 'ER_DUP_ENTRY' });
    });
    return request(app.use(routes))
      .post('/api/user/auth/register')
      .send({
        email: 'test@gmail.com',
        password: '123456',
        name: 'aa ',
      })
      .expect(400)
      .expect((res: any) => {
        expect(userService.createUser).toHaveBeenCalledTimes(1);
      })
      .end(done);
  });
});
