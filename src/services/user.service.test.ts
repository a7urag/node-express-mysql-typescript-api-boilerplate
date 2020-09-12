import UserService from './user.service';
import { mockRepository } from '../tests/unit/dbMock';
import * as typeorm from 'typeorm';
import { User } from '../entities/user/user.entity';
import { verifyHash } from '../utilities/encryptionUtils';

const bcrypt = require('bcrypt');

describe('User service', () => {
  test('getUserById with existing user', async () => {
    mockRepository({ id: 1, password: '123', name: 'Test user' });
    const actual = await UserService.getUserById(1);
    expect(actual.id).toBe(1);
    // @ts-ignore
    expect(actual.password).toBe(undefined);
    expect(actual.name).toBe('Test user');
    expect(typeorm.getRepository(User).findOne).toHaveBeenCalledTimes(
      1,
    );
    expect(typeorm.getRepository(User).findOne).toHaveBeenCalledWith({
      id: 1,
    });
  });

  test('getUserById with non-existing user', async () => {
    // @ts-ignore
    typeorm.getRepository = jest.fn().mockReturnValue({
      findOne: jest.fn().mockImplementation(() => {
        throw new Error();
      }),
    });
    const actual = await UserService.getUserById(1);
    expect(actual).toBe(null);
    // @ts-ignore
    expect(typeorm.getRepository(User).findOne).toHaveBeenCalledTimes(
      1,
    );
    expect(typeorm.getRepository(User).findOne).toHaveBeenCalledWith({
      id: 1,
    });
  });

  test('createUser', async () => {
    const user = {
      id: 1,
      password: '123',
      name: 'Test user',
      email: 'test@test.com',
    };
    mockRepository(user);
    const actual = await UserService.createUser(
      user.email,
      user.password,
      user.name,
    );
    expect(actual.id).toBe(1);
    // @ts-ignore
    expect(actual.password).toBe(undefined);
    expect(actual.name).toBe(user.name);
    // expect(actual.email).toBe(user.email);
    expect(typeorm.getRepository(User).save).toHaveBeenCalledTimes(1);
    expect(typeorm.getRepository(User).save).toHaveBeenCalledWith(
      expect.objectContaining({
        email: user.email,
        password: expect.any(String),
        name: user.name,
      }),
    );
  });
  test('emailUser with non-existing user', async () => {
    const user = {
      id: 1,
      password: '123',
      name: 'Test user',
      email: 'test@test.com',
    };
    // @ts-ignore
    typeorm.getRepository = jest.fn().mockReturnValue({
      findOne: jest.fn().mockImplementation(() => {
        throw new Error();
      }),
      save: jest.fn().mockReturnValue(null),
    });
    const actual = await UserService.loginUser(
      user.email,
      user.password,
    );
    expect(actual).toBe(null);
    // @ts-ignore
    expect(typeorm.getRepository(User).findOne).toHaveBeenCalledTimes(
      1,
    );
    expect(typeorm.getRepository(User).findOne).toHaveBeenCalledWith({
      email: user.email,
    });
    expect(typeorm.getRepository(User).save).toHaveBeenCalledTimes(0);
  });

  test('emailUser with existing user wrong password', async () => {
    const user = {
      id: 1,
      password: '123',
      name: 'Test user',
      email: 'test@test.com',
    };
    // @ts-ignore
    mockRepository(user);
    const actual = await UserService.loginUser(
      user.email,
      user.password,
    );
    expect(actual).toBe(null);
    // @ts-ignore
    expect(typeorm.getRepository(User).findOne).toHaveBeenCalledTimes(
      1,
    );
    expect(typeorm.getRepository(User).findOne).toHaveBeenCalledWith({
      email: user.email,
    });
    expect(typeorm.getRepository(User).save).toHaveBeenCalledTimes(0);
  });

  test('emailUser with valid credentials', async () => {
    const user = {
      id: 1,
      password: '123',
      name: 'Test user',
      email: 'test@test.com',
    };
    // @ts-ignore
    mockRepository(user);
    // @ts-ignore
    verifyHash = () => new Promise<boolean>(resolve => resolve(true));
    const actual = await UserService.loginUser(
      user.email,
      user.password,
    );
    expect(actual.id).toBe(user.id);
    expect(actual.email).toBe(user.email);
    // @ts-ignore
    expect(typeorm.getRepository(User).findOne).toHaveBeenCalledTimes(
      1,
    );
    expect(typeorm.getRepository(User).findOne).toHaveBeenCalledWith({
      email: user.email,
    });
    expect(typeorm.getRepository(User).save).toHaveBeenCalledTimes(1);
    expect(typeorm.getRepository(User).save).toHaveBeenCalledWith(
      expect.objectContaining({
        ...user,
        lastLogin: expect.any(String),
      }),
    );
  });
});
