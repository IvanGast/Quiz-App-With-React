import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import store from 'state/store';
import App from './App';

render(
  <Provider store={store}>
    <CssBaseline />
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
