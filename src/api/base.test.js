import fetchMock from 'jest-fetch-mock';
import { createAction } from 'redux-actions';
import Immutable from 'immutable';
import { isFunction } from 'lodash';

import { makeRequest } from './base';

describe('makeRequest helper', () => {
  global.fetch = fetchMock;

  const testAction = createAction(
    'TEST_FETCH_DATA',
    (data, queryParams = {}) => makeRequest(
      'http://test.url',
      data,
      queryParams,
      { method: 'GET', headers: { Test: 123 } },
    ),
  );

  beforeEach(() => {
    fetch.resetMocks();
  });

  it('returns promise in payload', () => {
    fetch.mockResponse(JSON.stringify({ data: 'data' }), { status: 200 });
    const { payload } = testAction();

    expect(isFunction(payload.then)).toBe(true);
  });

  it('passes correct data to fetch', () => {
    const mock = fetch.mockResponse(JSON.stringify({ data: 'data' }), { status: 200 });
    const testData = { test: 1 };
    const testQueryParams = {
      test1: 'test1',
      test2: 'test2',
    };

    testAction(testData, testQueryParams);

    const endpoint = mock.mock.calls[0][0];
    const { method, header, body } = mock.mock.calls[0][1];

    expect(endpoint).toEqual('http://test.url?test1=test1&test2=test2');
    expect(method).toEqual('GET');
    expect(header).toEqual({
      Accept: 'application/json',
      Test: 123,
      'Content-Type': 'application/json',
    });
    expect(body).toEqual(JSON.stringify(testData));
  });

  it('returns api call body on success', () => {
    const data = { test: 123 };
    fetch.mockResponse(JSON.stringify(data), { status: 200 });

    testAction().payload.then(r => expect(r).toEqual(Immutable.fromJS(data)));
  });

  it('returns error on failure', () => {
    const data = { info: 'an error occurred' };
    const status = 400;
    fetch.mockResponse(JSON.stringify(data), { status });

    const expected = new Error(`${status}: ${JSON.stringify(data)}`);

    testAction().payload.catch(e => expect(e).toEqual(expected));
  });
});
