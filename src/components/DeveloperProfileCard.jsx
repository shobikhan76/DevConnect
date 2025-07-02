import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  Chip,
  Link,
  useTheme,
  useMediaQuery,
} from '@mui/material';

const DeveloperProfileCard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const mockDeveloper = {
    name: 'Jane Doe',
    title: 'Full Stack Developer',
    techStack: ['React', 'Node.js', 'MongoDB'],
    avatar: '/logo192.png',
    bio: 'Passionate about building scalable web applications and user-friendly experiences.',
    github: 'https://github.com/janedoe',
    linkedin: 'https://linkedin.com/in/janedoe',
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        p: isMobile ? 2 : 4,
      }}
    >
      <Card
        sx={{
          width: '100%',
          maxWidth: 500,
          borderRadius: 4,
          boxShadow: 3,
        }}
      >
        <CardContent>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Avatar
              src={mockDeveloper.avatar}
              sx={{ width: 80, height: 80, mb: 2 }}
            />
            <Typography variant="h6" align="center">
              {mockDeveloper.name}
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              align="center"
              gutterBottom
            >
              {mockDeveloper.title}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mt: 1, mb: 2, textAlign: 'center' }}
            >
              {mockDeveloper.bio}
            </Typography>

            <Box
              display="flex"
              flexWrap="wrap"
              justifyContent="center"
              gap={1}
              mb={2}
            >
              {mockDeveloper.techStack.map((tech, index) => (
                <Chip key={index} label={tech} color="primary" variant="outlined" />
              ))}
            </Box>

            <Typography variant="body2" align="center">
              <Link href={mockDeveloper.github} target="_blank" rel="noopener">
                GitHub
              </Link>{' '}
              |{' '}
              <Link href={mockDeveloper.linkedin} target="_blank" rel="noopener">
                LinkedIn
              </Link>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DeveloperProfileCard;
