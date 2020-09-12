import {
  generateCookie,
  generateHash,
  verifyCookie,
  verifyHash,
} from './encryptionUtils';

describe('Encryption utils', () => {
  test('Test and verify password hash', async () => {
    const hash = await generateHash('mypassword', 10);
    let actual = await verifyHash('mypassword', hash);
    expect(actual).toBe(true);

    actual = await verifyHash('mypassword1', hash);
    expect(actual).toBe(false);

    actual = await verifyHash('Mypassword', hash);
    expect(actual).toBe(false);

    actual = await verifyHash('MyPassword', hash);
    expect(actual).toBe(false);
  });

  test('Test and verify cookie', async () => {
    const hash = await generateCookie(
      'Authentication',
      'mysecretcookie',
    );
    let actual = await verifyCookie(null);
    expect(actual).toBe(null);

    actual = await verifyCookie(hash);
    expect(actual.data).toStrictEqual({
      Authentication: 'mysecretcookie',
    });
    expect(actual.exp).toBeGreaterThan(new Date().getTime() / 1000);
    actual = await verifyCookie('asdasdasdsadsadasdsad');
    expect(actual).toBe(null);

    actual = await verifyCookie('MyPassword');
    expect(actual).toBe(null);
  });
});
