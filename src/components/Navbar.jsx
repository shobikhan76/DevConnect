import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
  useTheme,
} from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logoo.ico';
import { keyframes } from '@mui/system';
import { motion } from 'framer-motion';

// Define bounce animation
const bounce = keyframes`
  0% { transform: scale(0.9); opacity: 0.5; }
  50% { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
`;

// Framer motion variants for nav buttons
const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: { type: 'spring', stiffness: 300 },
  },
};

const Navbar = ({ toggleMode, mode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

  const hideNavbarRoutes = [];
  if (hideNavbarRoutes.includes(location.pathname)) return null;

  const handleLogout = () => {
    navigate('/');
  };

  const navItems = [
    { label: 'Login', path: '/login/developer' },
    { label: 'Signup', path: '/signup/developer' },
    { label: 'Dashboard', path: '/dashboard' },
  ];

  return (
    <AppBar position="fixed" color="primary" elevation={4}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Logo with animation */}
        <Box
          onClick={() => navigate('/')}
          sx={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            '&:hover img': {
              transform: 'scale(1.1)',
              transition: 'transform 0.3s ease-in-out',
            },
          }}
        >
          <motion.img
            src={logo}
            alt="logo"
            style={{ height: 40, marginRight: 8 }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <Typography variant="h6" noWrap fontWeight="bold">
            DevConnect
          </Typography>
        </Box>

        {/* Navigation Buttons */}
        <Box display="flex" alignItems="center" gap={1}>
          {navItems.map((item) => (
            <motion.div key={item.label} variants={buttonVariants} whileHover="hover">
              <Button
                color="inherit"
                onClick={() => navigate(item.path)}
                sx={{
                  borderBottom:
                    location.pathname === item.path ? `2px solid ${theme.palette.secondary.main}` : 'none',
                  borderRadius: 0,
                }}
              >
                {item.label}
              </Button>
            </motion.div>
          ))}
          <motion.div variants={buttonVariants} whileHover="hover">
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          </motion.div>

          {/* Theme Toggle Icon */}
          <motion.div whileTap={{ rotate: 180 }}>
            <IconButton color="inherit" onClick={toggleMode}>
              {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </motion.div>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
