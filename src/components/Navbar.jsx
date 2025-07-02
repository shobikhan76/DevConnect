import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  Brightness4,
  Brightness7,
  Menu as MenuIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logoo.ico';
import { motion } from 'framer-motion';

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
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = [
    { label: 'Login', path: '/login/developer' },
    { label: 'Signup', path: '/signup/developer' },
    { label: 'Dashboard', path: '/dashboard' },
  ];

  const handleLogout = () => {
    navigate('/');
    setDrawerOpen(false);
  };

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <>
      <AppBar position="fixed" color="primary" elevation={4}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo */}
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
            <Typography variant="h6" fontWeight="bold" noWrap>
              DevConnect
            </Typography>
          </Box>

          {/* Desktop Nav */}
          {!isMobile ? (
            <Box display="flex" alignItems="center" gap={1}>
              {navItems.map((item) => (
                <motion.div key={item.label} variants={buttonVariants} whileHover="hover">
                  <Button
                    color="inherit"
                    onClick={() => navigate(item.path)}
                    sx={{
                      borderBottom:
                        location.pathname === item.path
                          ? `2px solid ${theme.palette.secondary.main}`
                          : 'none',
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
              <motion.div whileTap={{ rotate: 180 }}>
                <IconButton color="inherit" onClick={toggleMode}>
                  {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
              </motion.div>
            </Box>
          ) : (
            <Box>
              <IconButton color="inherit" onClick={toggleDrawer}>
                <MenuIcon />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              p: 2,
              alignItems: 'center',
            }}
          >
            <Typography variant="h6">Menu</Typography>
            <IconButton onClick={toggleDrawer}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />
          <List>
            {navItems.map((item) => (
              <ListItem button key={item.label} onClick={() => navigate(item.path)}>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
            <ListItem button onClick={handleLogout}>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
          <Divider />
          <Box textAlign="center" mt={1}>
            <IconButton onClick={toggleMode}>
              {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
