import 'raf/polyfill';
import 'whatwg-fetch';
import Immutable from 'immutable';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import React from 'react';
import { render } from 'react-dom';
import { combineReducers } from 'redux-immutable';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
import handler from './handlers/earthquake';


const initialState = Immutable.Map();
const reducers = combineReducers({
  earthquakes: handler.reducer,
});

const middlewares = applyMiddleware(thunk, promiseMiddleware());
const store = createStore(reducers, initialState, middlewares);

const root = document.getElementById('root');
const load = () => render(
  (
    <Provider store={store}>
      <AppContainer>
        <App />
      </AppContainer>
    </Provider>
  ), root,
);

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept('./components/App', load);
}

load();
