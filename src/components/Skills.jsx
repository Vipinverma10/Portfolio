import React from 'react';
import { Box, Typography, Grid, Chip, Avatar } from '@mui/material';

// Example skill icons (you can replace with your own image paths or use avatar URLs)
import jsLogo from '../assets/js.png'; // JavaScript logo
import reactLogo from '../assets/react.png'; // React logo
import javaLogo from '../assets/java.png';
import springLogo from '../assets/spring.png';
import sqlLogo from '../assets/sql.png';
import awsLogo from '../assets/aws.png';
import muiLogo from '../assets/mui.png';

function Skills() {
  const skills = [
    { name: 'JavaScript', icon: jsLogo },
    { name: 'React', icon: reactLogo },
    { name: 'Java', icon: javaLogo },
    { name: 'Spring Boot', icon: springLogo },
    { name: 'SQL', icon: sqlLogo },
    { name: 'AWS', icon: awsLogo },
    { name: 'Material UI', icon: muiLogo },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f9f9f9',
        padding: 4,
      }}
    >
      <Box>
        <Typography variant="h3" sx={{ textAlign: 'center', fontWeight: 'bold' }}>
          My Skills
        </Typography>

        <Grid
          container
          spacing={3}
          sx={{ marginTop: 4, justifyContent: 'center' }}
        >
          {skills.map((skill, index) => (
            <Grid item key={index}>
              <Chip
                label={skill.name}
                avatar={<Avatar src={skill.icon} />}
                variant="outlined"
                sx={{ fontSize: '1rem', padding: '8px' }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Skills;
