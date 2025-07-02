import { createTheme } from '@mui/material/styles';

export const getTheme = (mode) => createTheme({
  palette: {
    mode,
    primary: {
      main: mode === 'dark' ? '#90caf9' : '#1976d2',
    },
    background: {
      default: mode === 'dark' ? '#121212' : '#fff',
      paper: mode === 'dark' ? '#1e1e1e' : '#fff',
    },
  },
});