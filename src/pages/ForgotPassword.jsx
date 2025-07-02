import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Alert,
  CircularProgress,
} from '@mui/material';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setLoading(true);

    if (!email) {
      setError('Email is required');
      setLoading(false);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Enter a valid email');
      setLoading(false);
      return;
    }

    setError('');
    setTimeout(() => {
      setSuccessMessage(`Reset link sent to ${email}`);
      setLoading(false);
    }, 1000); // Simulate async
  };

  return (
    <Container maxWidth="xs">
      <Box mt={8} component="form" onSubmit={handleSubmit}>
        <Typography variant="h5" align="center" gutterBottom>
          Forgot Password
        </Typography>

        {successMessage && (
          <Alert severity="success" sx={{ mt: 2 }}>
            {successMessage}
          </Alert>
        )}

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

        <Button
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
          sx={{ mt: 2 }}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : 'Send Reset Link'}
        </Button>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
