import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './redux/configureStore';
import { listenForAuthChanges } from './redux/actions/auth';
import { listenForUsers } from './redux/actions/users';
import 'semantic-ui-css/semantic.min.css';

const store = configureStore();
store.dispatch(listenForAuthChanges());
store.dispatch(listenForUsers());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
