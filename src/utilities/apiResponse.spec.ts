import { mockResponse } from '../tests/unit/apiMock';
import ApiResponse from './apiResponse';

describe('utilities/ApiResponse', () => {
  let response = mockResponse();
  beforeEach(() => {
    response = mockResponse();
  });
  test('Api result with body', () => {
    ApiResponse.result(response, {});
    expect(response.status).toHaveBeenCalledWith(200);
    expect(response.json).toHaveBeenCalledWith({
      data: {},
      success: true,
    });
  });

  test('Api result with cookie', () => {
    ApiResponse.result(response, {}, 200, {
      key: 'Auth',
      value: 'test123',
    });
    expect(response.status).toHaveBeenCalledWith(200);
    expect(response.json).toHaveBeenCalledWith({
      data: {},
      success: true,
    });
    expect(response.cookie).toHaveBeenCalledWith('Auth', 'test123');
  });

  test('Api error with body', () => {
    ApiResponse.error(response);
    expect(response.status).toHaveBeenCalledWith(400);
    expect(response.json).toHaveBeenCalledWith({
      error: {
        message: 'Bad Request',
      },
      override: null,
      success: false,
    });
  });

  test('Api Set Cookie', () => {
    ApiResponse.setCookie(response, 'test', 'value');
    expect(response.cookie).toHaveBeenCalledWith('test', 'value');
  });
});
