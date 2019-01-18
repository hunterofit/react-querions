import 'core-js';
import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import thunkMiddleware from 'redux-thunk';

import { Route, HashRouter } from 'react-router-dom';

import rootReducer from './modules';
import App from './components/App';
import Home from './containers/HomeContainer';

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);

const routes = (
  <HashRouter>
    <App>
      <Route exact path="/" component={Home}/>
    </App>
  </HashRouter>
);

if (document.getElementById('wpcpf-questions')) {
  ReactDOM.render(
    <Provider store={store}>
      {routes}
    </Provider>,
    document.getElementById('wpcpf-questions')
  );
}

