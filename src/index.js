import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import App from 'app';
import { Provider } from 'react-redux';
import store from 'store';
import { history } from 'utils/core';

ReactDOM.render(
  <React.StrictMode>
    <HistoryRouter history={history}>
      <Provider store={store}>
        <App />
      </Provider>
    </HistoryRouter>
  </React.StrictMode>,
  document.getElementById('root')
);