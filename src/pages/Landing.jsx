import React, { useState, useMemo } from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  TextField,
  InputAdornment,
  Stack,
  CssBaseline,
  createTheme,
  ThemeProvider,
  useMediaQuery,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Landing = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  // Detect user's preferred theme
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
          primary: {
            main: prefersDarkMode ? '#90caf9' : '#1976d2',
          },
        },
        typography: {
          fontFamily: 'Roboto, sans-serif',
        },
      }),
    [prefersDarkMode]
  );

  const handleSearch = () => {
    const query = searchQuery.toLowerCase().trim();
    if (query.includes('developer')) {
      navigate('/login/developer');
    } else if (query.includes('user')) {
      navigate('/login/user');
    } else {
      alert('No match found. Try searching for "developer" or "user".');
    }
  };

  const handleGetStarted = () => {
    navigate('/select');
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box
          component={motion.div}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          minHeight="100vh"
          textAlign="center"
          px={2}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h3" gutterBottom fontWeight="bold">
            DevConnect
          </Typography>

          <Typography variant="subtitle1" gutterBottom color="text.secondary">
            Connect with Developers or Users
          </Typography>

          <Stack direction="row" spacing={1} sx={{ mt: 4, width: '100%' }}>
            <TextField
              variant="outlined"
              placeholder="Search for developers or users"
              fullWidth
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="action" />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSearch}
              sx={{
                transition: 'all 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: 3,
                },
              }}
            >
              Search
            </Button>
          </Stack>

          <Button
            variant="contained"
            color="primary"
            sx={{
              mt: 3,
              px: 4,
              py: 1,
              transition: 'all 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: 3,
              },
            }}
            onClick={handleGetStarted}
          >
            Get Started
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
    
  );
};

export default Landing;
