import { CssBaseline, ThemeProvider } from '@mui/material';
import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import moment from 'moment';
import AppRouter from './Router/AppRouter';
import { getToken } from './shared/Store/ActionAuth/Auth.slice';
import { useAppDispatch } from './shared/Store/Hook';
import { theme } from './shared/Thema/Theme';
import { userReducer } from './shared/Store/ActionAuth/Auth.reducer';

function App() {
  const dispatch = useAppDispatch();
  const token = Cookies.get( 'token' );
  useEffect(() => {
    dispatch( getToken());
    dispatch( userReducer());
  }, [dispatch, token]);

  moment.locale( 'es' );
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRouter />

      </ThemeProvider>
    </>
  );
}

export default App;
