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


function makeImmutable(resp) {
  return Immutable.fromJS(resp.data);
}


function checkStatus(resp) {
  if (resp.status >= 400) {
    throw new Error(`${resp.status}: ${JSON.stringify(resp.data)}`);
  }
  return resp;
}


function processResponse(resp) {
  return resp.then(parse).then(checkStatus).then(makeImmutable);
}


export function makeRequest(url, data, queryParams = {}, options = {}) {
  const { method = 'GET', headers = {} } = options;
  const requestHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...headers,
  };

  const params = `${queryParams ? '?' : ''}${queryString.stringify(queryParams)}`;
  const mergedUrl = `${url}${params}`;

  return processResponse(fetch(mergedUrl, {
    method,
    header: requestHeaders,
    body: JSON.stringify(data),
  }));
}

export default {
  makeRequest,
};
