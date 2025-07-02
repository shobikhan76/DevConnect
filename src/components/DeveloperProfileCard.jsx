import React from 'react';
import { Card, CardContent, Typography, Avatar, Box, Chip } from '@mui/material';

const DeveloperProfileCard = () => {
  const mockDeveloper = {
    name: 'Jane Doe',
    title: 'Full Stack Developer',
    techStack: ['React', 'Node.js', 'MongoDB'],
    avatar: '/logo192.png',
    bio: 'Passionate about building scalable web applications and user-friendly experiences.',
    github: 'https://github.com/janedoe',
    linkedin: 'https://linkedin.com/in/janedoe'
  };

  return (
    <Card sx={{ maxWidth: 400, m: 'auto', mt: 4 }}>
      <CardContent>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Avatar src={mockDeveloper.avatar} sx={{ width: 80, height: 80, mb: 2 }} />
          <Typography variant="h6">{mockDeveloper.name}</Typography>
          <Typography variant="subtitle2" color="text.secondary">{mockDeveloper.title}</Typography>
          <Typography variant="body2" sx={{ mt: 1, mb: 2, textAlign: 'center' }}>
            {mockDeveloper.bio}
          </Typography>
          <Box display="flex" gap={1} flexWrap="wrap" justifyContent="center" mb={2}>
            {mockDeveloper.techStack.map((tech, index) => (
              <Chip key={index} label={tech} />
            ))}
          </Box>
          <Typography variant="body2" color="primary">
            <a href={mockDeveloper.github} target="_blank" rel="noopener noreferrer">GitHub</a> |{' '}
            <a href={mockDeveloper.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DeveloperProfileCard;
