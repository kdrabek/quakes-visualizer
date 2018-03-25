import Immutable from 'immutable';

import { createAction, handleActions } from 'redux-actions';
import api from '../api';

const getEarthquakes = createAction(
  'GET_EARTHQUAKES',
  (startDate, endDate, minmagnitude) =>
    api.getEarthquake(startDate, endDate, minmagnitude),
);

const actions = { getEarthquakes };

const initialState = Immutable.fromJS({
  data: [],
  pending: false,
  error: false,
});

const reducer = handleActions({
  GET_EARTHQUAKES_PENDING: state => state
    .update('pending', () => true),

  GET_EARTHQUAKES_FULFILLED: (state, action) => state
    .update('pending', () => false)
    .set('data', Immutable.fromJS(action.payload)),

  GET_EARTHQUAKES_REJECTED: (state, action) => state
    .update('pending', () => false)
    .set('error', Immutable.fromJS(action.payload)),

}, initialState);


export default {
  actions,
  reducer,
};
