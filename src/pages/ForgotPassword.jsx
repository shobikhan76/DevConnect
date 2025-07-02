import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Enter a valid email');
    } else {
      setError('');
      alert(`Reset link sent to ${email}`);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box mt={8} component="form" onSubmit={handleSubmit}>
        <Typography variant="h5" align="center" gutterBottom>
          Forgot Password
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          label="Email Address"
          type="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!error}
          helperText={error}
        />
        <Button fullWidth variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
          Send Reset Link
        </Button>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
