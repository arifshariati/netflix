import React, {useEffect} from 'react';
import { Router } from 'react-router-dom';
//Mui
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import './App.css';

import Routes from './Routes';
import { history } from './helpers';
import { auth } from './firebase';
function App() {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        console.log(userAuth);
      }else{

      }
    });
    return unsubscribe;
  },[])
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
