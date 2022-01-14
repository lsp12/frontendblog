import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import AppRouter from './Router/AppRouter';
import { theme } from './shared/Thema/Theme';

function App() {
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
