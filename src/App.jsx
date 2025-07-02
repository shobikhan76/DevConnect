import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Landing from './pages/Landing';
import UserTypeSelection from './pages/UserTypeSelection';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import ForgotPassword from './pages/ForgotPassword';
import DeveloperProfileCard from './components/DeveloperProfileCard';
import Navbar from './components/Navbar';
import { Box } from '@mui/material';
import { AnimatePresence } from 'framer-motion';

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
  return (
    <Router>
      <Navbar toggleMode={toggleMode} mode={mode} />
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ flexGrow: 1, mt: 8 }}>
          <AnimatedRoutes />
        </Box>
      </Box>
    </Router>
  );
}

export default App;
