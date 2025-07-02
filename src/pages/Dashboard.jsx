import React, { useState } from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  CssBaseline,
  Toolbar,
  AppBar,
  Paper,
  Grid,
  Chip
} from '@mui/material';
import { AccountCircle, Work, Logout } from '@mui/icons-material';
import DeveloperProfileCard from '../components/DeveloperProfileCard';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');

  const mockProjects = [
    { title: 'Portfolio Website', status: 'In Progress' },
    { title: 'E-commerce App', status: 'Completed' },
    { title: 'Job Board Platform', status: 'Pending Review' },
  ];

  const renderMainContent = () => {
    if (activeTab === 'projects') {
      return (
        <>
          <Typography variant="h4" gutterBottom>My Projects</Typography>
          <Grid container spacing={3} mt={1}>
            {mockProjects.map((project, idx) => (
              <Grid item xs={12} sm={6} key={idx}>
                <Paper elevation={2} sx={{ p: 3 }}>
                  <Typography variant="h6">{project.title}</Typography>
                  <Chip label={project.status} color="primary" variant="outlined" size="small" sx={{ mt: 1 }} />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </>
      );
    }
    if (activeTab === 'profile') {
      return <DeveloperProfileCard />;
    }
    return (
      <>
        <Typography variant="h4" gutterBottom>Welcome Developer!</Typography>
        <Grid container spacing={3} mt={1}>
          <Grid item xs={12} sm={6}>
            <Paper elevation={2} sx={{ p: 3 }}>
              <Typography variant="h6">Active Projects</Typography>
              <Typography variant="body2" color="text.secondary">
                You currently have 3 active projects.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={2} sx={{ p: 3 }}>
              <Typography variant="h6">Recent Bids</Typography>
              <Typography variant="body2" color="text.secondary">
                You submitted 2 bids this week.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </>
    );
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Developer Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={() => setActiveTab('profile')}>
                <ListItemIcon><AccountCircle /></ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => setActiveTab('projects')}>
                <ListItemIcon><Work /></ListItemIcon>
                <ListItemText primary="Projects" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate('/')}> 
                <ListItemIcon><Logout /></ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {renderMainContent()}
      </Box>
    </Box>
  );
};

export default Dashboard;