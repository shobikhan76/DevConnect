import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { Box, useTheme } from '@mui/material';
import { AnimatePresence } from 'framer-motion';

import Landing from './pages/Landing';
import UserTypeSelection from './pages/UserTypeSelection';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import ForgotPassword from './pages/ForgotPassword';
import DeveloperProfileCard from './components/DeveloperProfileCard';
import Navbar from './components/Navbar';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing />} />
        <Route path="/select" element={<UserTypeSelection />} />
        <Route path="/login/:type" element={<Login />} />
        <Route path="/signup/:type" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/developer-profile" element={<DeveloperProfileCard />} />
      </Routes>
    </AnimatePresence>
  );
};

function App({ toggleMode, mode }) {
  const theme = useTheme(); // Access the current theme

  return (
    <Router>
      <Navbar toggleMode={toggleMode} mode={mode} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          bgcolor: theme.palette.background.default, // Full-screen background
          color: theme.palette.text.primary,         // Text adapts to theme
          minHeight: '100vh',                        // Full viewport height
          mt: 8,                                     // Margin for navbar
          transition: 'background-color 0.3s ease',
        }}
      >
        <AnimatedRoutes />
      </Box>
    </Router>
  );
}

export default App;
