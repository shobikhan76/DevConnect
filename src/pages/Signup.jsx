import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

const Signup = () => {
  const { type } = useParams();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    techStack: '',
    portfolio: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!form.fullName) {
      tempErrors.fullName = 'Full Name is required';
      isValid = false;
    }

    if (!form.email) {
      tempErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!form.password) {
      tempErrors.password = 'Password is required';
      isValid = false;
    } else if (form.password.length < 6) {
      tempErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    if (type === 'developer') {
      if (!form.techStack) {
        tempErrors.techStack = 'Tech Stack is required';
        isValid = false;
      }
      if (!form.portfolio) {
        tempErrors.portfolio = 'GitHub/LinkedIn URL is required';
        isValid = false;
      } else if (!/^https?:\/\/.+/.test(form.portfolio)) {
        tempErrors.portfolio = 'Enter a valid URL starting with http:// or https://';
        isValid = false;
      }
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
      // Add signup API logic here
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        mt={isMobile ? 6 : 10}
        p={isMobile ? 2 : 4}
        borderRadius={2}
        boxShadow={isMobile ? 0 : 3}
        bgcolor={isMobile ? 'transparent' : 'background.paper'}
        component="form"
        onSubmit={handleSubmit}
      >
        <Typography variant="h5" align="center" fontWeight="bold" gutterBottom>
          {type === 'developer' ? 'Developer Signup' : 'User Signup'}
        </Typography>

        <TextField
          fullWidth
          margin="normal"
          label="Full Name"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          error={!!errors.fullName}
          helperText={errors.fullName}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Email"
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
          name="password"
          value={form.password}
          onChange={handleChange}
          error={!!errors.password}
          helperText={errors.password}
        />

        {type === 'developer' && (
          <>
            <TextField
              fullWidth
              margin="normal"
              label="Tech Stack"
              name="techStack"
              value={form.techStack}
              onChange={handleChange}
              error={!!errors.techStack}
              helperText={errors.techStack}
            />

            <TextField
              fullWidth
              margin="normal"
              label="GitHub/LinkedIn URL"
              name="portfolio"
              value={form.portfolio}
              onChange={handleChange}
              error={!!errors.portfolio}
              helperText={errors.portfolio}
            />
          </>
        )}

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3, py: 1.3 }}
        >
          Sign Up
        </Button>

        <Button
          fullWidth
          variant="outlined"
          startIcon={<GoogleIcon />}
          sx={{
            mt: 2,
            py: 1.3,
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
      </Box>
    </Container>
  );
};

export default Signup;
