import {
  extractCookieFromRequest, extractQueryForRequest, extractUserIdFromRequest, restrictToStaff,
  sanitizeUser,
} from '../../src/utilities/apiUtilities';

describe('Test api utilities', () => {
  test('extractUserIdFromRequest', () => {
    let request: any = { user: { id: 1 } };
    let actual = extractUserIdFromRequest(request);
    expect(actual).toBe(1);
    request = { user: null };
    actual = extractUserIdFromRequest(request);
    expect(actual).toBe(null);
  });

  test('extractQueryForRequest', () => {
    let request: any = { query: {} };
    let actual = extractQueryForRequest(request, 'test');
    expect(actual).toStrictEqual([]);

    request = { query: { test: '1' } };
    actual = extractQueryForRequest(request, 'test');
    expect(actual).toBe(1);

    request = { query: { test: 1 } };
    actual = extractQueryForRequest(request, 'test');
    expect(actual).toBe(1);

    request = { query: { test2: 2 } };
    actual = extractQueryForRequest(request, 'test');
    expect(actual).toStrictEqual([]);
  });

  test('sanitizeUser with possible values', () => {
    const user: any = { id: 1, password: '12312321', email: '213@gmail.com' };
    const actual = sanitizeUser(user);
    expect(actual).toStrictEqual({ id: 1, email: '213@gmail.com' });
  });

  test('extractCookieFromRequest', () => {
    let request: any = { headers: {} };
    let actual = extractCookieFromRequest(request, 'Authorization');
    expect(actual).toBe(null);

    request = { headers: { authorization: 'test' } };
    actual = extractCookieFromRequest(request, 'Authorization');
    expect(actual).toBe('test');

    request = { headers: { cookie: 'Authorization=test2;' } };
    actual = extractCookieFromRequest(request, 'Authorization');
    expect(actual).toBe('test2');

      request = { headers: { cookie: 'Authorization=test2;randomCookie=nouse' } };
    actual = extractCookieFromRequest(request, 'Authorization');
    expect(actual).toBe('test2');
  });
});
