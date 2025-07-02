import React from 'react';
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Container,
  Box,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const UserTypeSelection = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="sm">
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        textAlign="center"
        mt={isMobile ? 6 : 10}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Select Your Role
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" mb={4}>
          Choose how you'd like to interact with DevConnect
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Card
              component={motion.div}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              sx={{
                borderRadius: 3,
                boxShadow: 3,
                transition: 'box-shadow 0.3s',
              }}
            >
              <CardActionArea onClick={() => navigate('/login/developer')}>
                <CardContent>
                  <Typography variant="h6" align="center">
                    I'm a Developer
                  </Typography>
                  <Typography variant="body2" align="center" mt={1} color="text.secondary">
                    Build your profile and get hired by users
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Card
              component={motion.div}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              sx={{
                borderRadius: 3,
                boxShadow: 3,
                transition: 'box-shadow 0.3s',
              }}
            >
              <CardActionArea onClick={() => navigate('/login/user')}>
                <CardContent>
                  <Typography variant="h6" align="center">
                    I'm a User
                  </Typography>
                  <Typography variant="body2" align="center" mt={1} color="text.secondary">
                    Find the perfect developer for your project
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default UserTypeSelection;
