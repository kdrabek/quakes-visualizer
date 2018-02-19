import fetchMock from 'jest-fetch-mock';
import Immutable from 'immutable';
import { isFunction } from 'lodash';

import { makeRequest } from './base';

describe('makeRequest helper', () => {
  global.fetch = fetchMock;

  const testRequest = (data, queryParams = {}) => makeRequest(
    'http://test.url',
    data,
    queryParams,
    { method: 'GET', headers: { Test: 123 } },
  );
  const jsonResponse = JSON.stringify({ data: 'data' });

  beforeEach(() => {
    fetch.resetMocks();
  });

  it('returns promise', () => {
    fetch.mockResponse(jsonResponse, { status: 200 });

    expect(isFunction(testRequest().then)).toBe(true);
  });

  it('passes correct data to fetch', () => {
    const resp = fetch.mockResponse(jsonResponse, { status: 200 });
    const testData = { test: 1 };

    testRequest(testData, { test1: 'test1', test2: 'test2' });

    const endpoint = resp.mock.calls[0][0];
    const { method, header, body } = resp.mock.calls[0][1];

    expect(endpoint).toEqual('http://test.url?test1=test1&test2=test2');
    expect(method).toEqual('GET');
    expect(header).toEqual({
      Accept: 'application/json',
      Test: 123,
      'Content-Type': 'application/json',
    });
    expect(body).toEqual(JSON.stringify(testData));
  });

  it('returns body on success', () => {
    fetch.mockResponse(jsonResponse, { status: 200 });
    const parsed = JSON.parse(jsonResponse);

    testRequest().then(r =>
      expect(r).toEqual(Immutable.fromJS(parsed)));
  });

  it('returns error on failure', () => {
    const data = { info: 'an error occurred' };
    const status = 400;
    fetch.mockResponse(JSON.stringify(data), { status });

    const expected = new Error(`${status}: ${JSON.stringify(data)}`);

    testRequest().catch(e => expect(e).toEqual(expected));
  });
});
