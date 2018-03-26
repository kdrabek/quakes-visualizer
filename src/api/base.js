import 'whatwg-fetch';
import queryString from 'query-string';
import Immutable from 'immutable';


function parse(resp) {
  return new Promise((resolve, reject) => {
    resp.json().then(
      data => resolve({ data, status: resp.status }),
      error => reject(error),
    );
  });
}


function toImmutable(resp) {
  return Immutable.fromJS(resp.data.features);
}


function checkStatus(resp) {
  if (resp.status >= 400) {
    throw new Error(`${resp.status}: ${JSON.stringify(resp.data)}`);
  }
  return resp;
}


function processResponse(resp) {
  return resp.then(parse).then(checkStatus).then(toImmutable);
}


export function makeRequest(url, queryParams = {}, options = {}) {
  const { method = 'GET', data, headers = {} } = options;
  const requestHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...headers,
  };

  const params = `${queryParams ? '?' : ''}${queryString.stringify(queryParams)}`;
  const mergedUrl = `${url}${params}`;

  let init = { method, header: requestHeaders };
  if (data) {
    init = { ...init, body: JSON.stringify(data) };
  }

  return processResponse(fetch(mergedUrl, init));
}

export default {
  makeRequest,
};
