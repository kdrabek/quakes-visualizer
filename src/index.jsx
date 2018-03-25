import 'raf/polyfill';
import promiseMiddleware from 'redux-promise-middleware';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';


import handler from './handlers/earthquake';


const composeStoreWithMiddleware = applyMiddleware(promiseMiddleware())(createStore);

const store = composeStoreWithMiddleware(handler.reducer);

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
