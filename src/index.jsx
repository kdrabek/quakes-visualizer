import 'raf/polyfill';
import 'whatwg-fetch';
import Immutable from 'immutable';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import React from 'react';
import { render } from 'react-dom';
import { combineReducers } from 'redux-immutable';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
import handler from './handlers/earthquake';


const initialState = Immutable.Map(); //eslint-disable-line
const reducers = combineReducers({
  earthquakes: handler.reducer,
});

let middlewares = applyMiddleware(thunk, promiseMiddleware());

// Redux extension
if (window.devToolsExtension) {
  middlewares = compose(
    middlewares,
    window.devToolsExtension && window.devToolsExtension(),
  );
}

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
