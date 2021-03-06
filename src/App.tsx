import { CssBaseline, ThemeProvider } from '@mui/material';
import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import moment from 'moment';
import AppRouter from './Router/AppRouter';
import { getToken } from './shared/Store/ActionAuth/Auth.slice';
import { useAppDispatch, useAppSelector } from './shared/Store/Hook';
import { theme } from './shared/Thema/Theme';
import { userReducer } from './shared/Store/ActionAuth/Auth.reducer';

function App() {
  const { authethicated } = useAppSelector(( state ) => state.authSlice );
  const dispatch = useAppDispatch();
  const token = Cookies.get( 'token' );
  useEffect(() => {
    dispatch( getToken());
    if ( token ) {
      dispatch( userReducer());
    }
  }, [dispatch, token, authethicated]);

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
