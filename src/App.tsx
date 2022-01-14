import { ThemeProvider } from '@mui/material';
import React from 'react';
import AppRouter from './Router/AppRouter';
import { theme } from './shared/Thema/Theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
      {/* <PrivateRoute /> */}
    </>
  );
}

export default App;
