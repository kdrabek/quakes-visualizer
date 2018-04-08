import Immutable from 'immutable';

import { createAction, handleActions } from 'redux-actions';
import api from '../api';

const getEarthquakes = createAction(
  'GET_EARTHQUAKES',
  (startDate, endDate, minmagnitude) =>
    api.getEarthquake(startDate, endDate, minmagnitude),
);

const updateMap = createAction('UPDATE_MAP');

const actions = {
  getEarthquakes,
  updateMap,
};

const initialState = Immutable.fromJS({
  data: [],
  pending: false,
  error: false,
  mapCoords: null,
});


const getFirstCoords = (payload) => {
  if (!payload.isEmpty()) {
    const coords = payload.get(0).get('geometry').get('coordinates');
    return Immutable.fromJS({ lng: coords.get(0), lat: coords.get(1) });
  }
  return null;
};


const reducer = handleActions({
  GET_EARTHQUAKES_PENDING: state => state
    .update('pending', () => true),

  GET_EARTHQUAKES_FULFILLED: (state, action) => state
    .update('pending', () => false)
    .set('data', action.payload.get('features'))
    .set('mapCoords', getFirstCoords(action.payload.get('features'))),

  GET_EARTHQUAKES_REJECTED: (state, action) => state
    .update('pending', () => false)
    .set('error', action.payload),

  UPDATE_MAP: (state, action) => {
    const event = state.get('data').filter(e =>
      e.get('id') === action.payload);
    return state.set('mapCoords', getFirstCoords(event));
  },

}, initialState);


export default {
  actions,
  reducer,
};
