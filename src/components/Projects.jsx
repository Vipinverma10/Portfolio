import React from 'react';
import { Box, Card, CardContent, Typography, Link } from "@mui/material";

const projects = [
  {
    title: "Swiggy Clone",
    description: "A real-time food delivery app clone using React, Redux, and Parcel...",
    codeLink: "#",
  },
  {
    title: "Login & Register UI",
    description: "Responsive login and registration UI built with React and Material UI...",
    codeLink: "#",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with React and MUI...",
    codeLink: "#",
  },
  {
    title: "Hangman Game",
    description: "A classic word guessing game built with React and interactive user experience.",
    codeLink: "#",
  },  
];

export default function Projects() {
  return (
    <Box sx={{ padding: "2rem" }}>
      <Typography variant="h3" align="center" gutterBottom>Projects</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3, maxWidth: "900px", margin: "auto" }}>
        {projects.map((project, index) => (
          <Card key={index} sx={{ width: "100%", boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6">{project.title}</Typography>
              <Typography variant="body1" sx={{ my: 1 }}>{project.description}</Typography>
              <Link href={project.codeLink} underline="hover" color="primary">VIEW CODE</Link>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
