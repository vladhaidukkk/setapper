import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { historyUtil } from './utils/core';
import App from './app';

ReactDOM.render(
  <React.StrictMode>
    <HistoryRouter history={historyUtil}>
      <Provider store={store}>
        <App />
      </Provider>
    </HistoryRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
