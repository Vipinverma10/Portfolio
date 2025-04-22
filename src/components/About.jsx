import React from 'react';
import { Box, Typography, Link } from '@mui/material';

function About() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f4faff',
        padding: 4,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 2,
          marginBottom: 4,
        }}
      >
        Hi, I'm Vipin
      </Typography>

      <Box sx={{ maxWidth: 900, margin: '0 auto', fontSize: 18, lineHeight: 1.8 }}>
        <Typography paragraph textAlign="center">
          I'm a passionate Software Developer with 3 years of experience building dynamic, responsive web applications. I specialize in Full-stack development and thrive at the intersection of design and code — bringing intuitive user interfaces to life.
        </Typography>

        <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 2 }}>
          Core Skills:
        </Typography>
        <ul>
          <li>Expert in Java, React, and JavaScript</li>
          <li>Skilled at building scalable, maintainable, and high-performance web applications</li>
          <li>Experience with REST APIs, state management (Redux), and modern tooling (Parcel, Webpack)</li>
        </ul>

        <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 2 }}>
          Development Philosophy:
        </Typography>
        <ul>
          <li>I believe clean code is happy code — readable, modular, and easy to debug</li>
          <li>I enjoy solving complex problems and translating business needs into technical solutions</li>
          <li>Always experimenting with new technologies and staying ahead of the curve</li>
        </ul>

        <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 2 }}>
          Collaboration & Impact:
        </Typography>
        <ul>
          <li>I thrive in team environments and love collaborating on innovative projects</li>
          <li>Passionate about delivering meaningful, user-centered solutions</li>
          <li>Driven to contribute to projects that have a real-world impact</li>
        </ul>

        <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 2 }}>
          Career Goal:
        </Typography>
        <Typography paragraph>
          To contribute to high-impact tech solutions while continually growing as a developer — both technically and creatively.
        </Typography>

        <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 2 }}>
          Want to See More?
        </Typography>
        <ul>
          <li><Link href="/projects" underline="hover" color="primary">View My Projects</Link></li>
          <li><Link href="/skills" underline="hover" color="primary">Check Out My Skills</Link></li>
          <li><Link href="/contact" underline="hover" color="primary">Let’s Connect</Link></li>
        </ul>
      </Box>
    </Box>
  );
}

export default About;
