import Immutable from 'immutable';

export const mockedResponse = {};
const get = jest.fn(async () => Immutable.fromJS(mockedResponse));

export default {
  get,
};
