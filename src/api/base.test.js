import fetchMock from 'jest-fetch-mock';
import Immutable from 'immutable';
import { isFunction } from 'lodash';

import { makeRequest } from './base';

describe('makeRequest helper', () => {
  global.fetch = fetchMock;

  const testGetRequest = (queryParams = {}) => makeRequest(
    'http://test.url',
    queryParams,
    { method: 'GET', headers: { Test: 123 } },
  );

  const testPostRequest = (payload, queryParams = {}) => makeRequest(
    'http://test.url',
    queryParams,
    { method: 'POST', headers: { Test: 123 }, data: payload },
  );

  const jsonResponse = JSON.stringify({ status: 'ok' });

  beforeEach(() => {
    fetch.resetMocks();
  });

  it('returns promise', () => {
    fetch.mockResponse(jsonResponse, { status: 200 });

    expect(isFunction(testGetRequest().then)).toBe(true);
  });

  it('passes correct data to fetch', () => {
    const resp = fetch.mockResponse(jsonResponse, { status: 200 });
    const testData = { test: 1 };

    testPostRequest(testData, { test1: 'test1', test2: 'test2' });

    const endpoint = resp.mock.calls[0][0];
    const { method, header, body } = resp.mock.calls[0][1];

    expect(endpoint).toEqual('http://test.url?test1=test1&test2=test2');
    expect(method).toEqual('POST');
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
    const expected = Immutable.fromJS(parsed);

    testGetRequest().then(r => expect(r).toEqual(expected));
  });

  it('returns error on failure', () => {
    const data = { info: 'an error occurred' };
    const status = 400;
    fetch.mockResponse(JSON.stringify(data), { status });

    const expected = new Error(`${status}: ${JSON.stringify(data)}`);

    testGetRequest().catch(e => expect(e).toEqual(expected));
  });
});
