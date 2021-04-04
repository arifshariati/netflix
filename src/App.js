import React from 'react';
import { Router } from 'react-router-dom';
//Mui
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import './App.css';

import Routes from './Routes';
import { history } from './helpers';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
