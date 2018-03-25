/* eslint-disable import/first */
jest.mock('../api/earthquakes');
import api from '../api/earthquakes';
import Immutable from 'immutable';
import { combineReducers } from 'redux-immutable';

import earthquake from './earthquake';


async function fulfilledAction(action) {
  return {
    ...action,
    payload: await action.payload,
    type: `${action.type}_FULFILLED`,
  };
}

describe('handlers', () => {
  const reducer = combineReducers({ earthquakes: earthquake.reducer });
  const state = reducer(undefined, Immutable.Map());

  it('has proper default state', () => {
    expect(state.toJS()).toMatchSnapshot();
  });

  describe('getting new data', () => {
    const ret = earthquake.actions.getEarthquakes('2018-03-20', '2018-03-21', 5);

    it('api.getEarthquakes called once', async () => {
      expect(api.get.mock.calls.length).toBe(1);
    });

    it('has right data in the payload', async () => {
      expect(await ret.payload).toMatchSnapshot();
    });

    it('has data in right place in the reducer', async () => {
      expect(reducer(
        state,
        await fulfilledAction(ret),
      )).toMatchSnapshot();
    });
  });
});
