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

async function pendingAction(action) {
  return {
    ...action,
    payload: {},
    type: `${action.type}_PENDING`,
  };
}

async function rejectedAction(action) {
  return {
    ...action,
    payload: { error: 'Something went wrong' },
    type: `${action.type}_REJECTED`,
  };
}

describe('handlers', () => {
  const reducer = combineReducers({ earthquakes: earthquake.reducer });
  const state = reducer(undefined, Immutable.Map());

  it('has proper default state', () => {
    expect(state.toJS()).toMatchSnapshot();
  });

  describe('GET_EARTHQUAKES action getting new data', () => {
    const resp = earthquake.actions.getEarthquakes(new Date('2018-03-20'), 5);

    it('api.getEarthquakes called once', async () => {
      expect(api.get.mock.calls.length).toBe(1);
    });

    it('has right data in the payload', async () => {
      expect(await resp.payload).toMatchSnapshot();
    });

    it('has data in right place when action FULFILLED', async () => {
      const newState = reducer(state, await fulfilledAction(resp));

      expect(newState).toMatchSnapshot();
    });

    it('has data in right place when action PENDING', async () => {
      const newState = reducer(state, await pendingAction(resp));

      expect(newState).toMatchSnapshot();
    });

    it('has data in right place when action REJECTED', async () => {
      const newState = reducer(state, await rejectedAction(resp));

      expect(newState).toMatchSnapshot();
    });
  });

  describe('UPDATE_MAP action getting new data', () => {
    const stateWithCoords = reducer(Immutable.fromJS({
      earthquakes: {
        data: [
          {
            geometry: { coordinates: [167.249, -13.8633] },
            id: 'usc000lvb5'
          },
        ],
      },
    }), Immutable.Map());

    const resp = earthquake.actions.updateMap('usc000lvb5');

    it('has data in right place', async () => {
      const newState = reducer(stateWithCoords, resp);

      expect(newState).toMatchSnapshot();
    });
  });
});
