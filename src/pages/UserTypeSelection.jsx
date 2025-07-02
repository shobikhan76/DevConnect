import React from 'react';
import { Grid, Card, CardActionArea, CardContent, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const UserTypeSelection = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom mt={5}>
        Select Your Role
      </Typography>
      <Grid container spacing={4} justifyContent="center" mt={2}>
        <Grid item xs={12} sm={6}>
          <Card
            sx={{
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: 6,
              },
            }}
          >
            <CardActionArea onClick={() => navigate('/login/developer')}>
              <CardContent>
                <Typography variant="h5" align="center">
                  I'm a Developer
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card
            sx={{
              transition: 'transform 0.3s, box-shadow 0.3s',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: 6,
              },
            }}
          >
            <CardActionArea onClick={() => navigate('/login/user')}>
              <CardContent>
                <Typography variant="h5" align="center">
                  I'm a User
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserTypeSelection;
