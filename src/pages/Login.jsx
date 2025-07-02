import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, TextField, Button, Box, Link } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {
  const { type } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validate = () => {
    let tempErrors = { email: '', password: '' };
    let isValid = true;

    if (!form.email) {
      tempErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = 'Email is not valid';
      isValid = false;
    }

    if (!form.password) {
      tempErrors.password = 'Password is required';
      isValid = false;
    } else if (form.password.length < 6) {
      tempErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', form);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box mt={8} component="form" onSubmit={handleSubmit}>
        <Typography variant="h5" align="center" gutterBottom>
          {type === 'developer' ? 'Developer Login' : 'User Login'}
        </Typography>

        <TextField
          fullWidth
          margin="normal"
          label="Email"
          variant="outlined"
          name="email"
          value={form.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Password"
          type="password"
          variant="outlined"
          name="password"
          value={form.password}
          onChange={handleChange}
          error={!!errors.password}
          helperText={errors.password}
        />

        <Box textAlign="right" mt={1}>
          <Link
            component="button"
            variant="body2"
            onClick={() => navigate('/forgot-password')}
          >
            Forgot password?
          </Link>
        </Box>

        <Button fullWidth type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Login
        </Button>

        <Button
          fullWidth
          variant="outlined"
          startIcon={<GoogleIcon />}
          sx={{
            mt: 2,
            borderColor: '#ccc',
            color: '#555',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#f5f5f5',
              borderColor: '#bbb',
            },
          }}
        >
          Continue with Google
        </Button>

        <Button fullWidth sx={{ mt: 2 }} onClick={() => navigate(`/signup/${type}`)}>
          Don't have an account? Sign up
        </Button>
      </Box>
    </Container>
  );
};

export default Login;