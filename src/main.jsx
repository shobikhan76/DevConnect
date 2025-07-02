import React, { useMemo, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';

const Root = () => {
  const [mode, setMode] = useState('light'); // or 'dark'

  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode: mode,
      },
    }), [mode]);

  const toggleMode = () => {
    setMode(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App toggleMode={toggleMode} mode={mode} />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
