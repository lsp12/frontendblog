import { CssBaseline, ThemeProvider } from '@mui/material';
import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import Cookies from 'js-cookie';
import AppRouter from './Router/AppRouter';
import { getToken } from './shared/Store/ActionAuth/Auth.slice';
import { useAppDispatch } from './shared/Store/Hook';
import { theme } from './shared/Thema/Theme';

function App() {
  const dispatch = useAppDispatch();
  const token = Cookies.get( 'token' );
  useEffect(() => {
    dispatch( getToken());
  }, [token]);
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRouter />
        <ToastContainer position="top-right" />
      </ThemeProvider>
    </>
  );
}

export default App;
