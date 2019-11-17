import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import './app.scss';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

export default () => (
  <MuiThemeProvider theme={theme}>
    <div className="app">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/quiz" component={QuizPage} />
    </div>
  </MuiThemeProvider>
);
