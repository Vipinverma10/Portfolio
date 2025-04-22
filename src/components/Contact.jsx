import React, { useState } from 'react';
import { Box, TextField, Typography, Button, Alert, Link, Grid } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mwpokokq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSubmitted(true); // Show success message
        setForm({ name: '', email: '', message: '' }); // Clear the form fields
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error sending message.");
      console.error(error);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f4faff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4,
      }}
    >
      <Box sx={{ width: '100%', maxWidth: 500 }}>
        <Typography variant="h3" sx={{ textAlign: 'center', fontWeight: 'bold', mb: 4 }}>
          Contact Me
        </Typography>

        <Grid container spacing={2} justifyContent="center" sx={{ mb: 4 }}>
          <Grid item>
            <EmailIcon sx={{ mr: 1 }} />
            <Link
              href="mailto:vipinverma100118@gmail.com"
              target="_blank"
              underline="hover"
              variant="body1"
            >
              Email
            </Link>
          </Grid>
          <Grid item>
            <LinkedInIcon sx={{ mr: 1 }} />
            <Link
              href="https://www.linkedin.com/in/vipin-verma-3650651a8/"
              target="_blank"
              underline="hover"
              variant="body1"
            >
              LinkedIn
            </Link>
          </Grid>
          <Grid item>
            <GitHubIcon sx={{ mr: 1 }} />
            <Link
              href="https://github.com/Vipinverma10"
              target="_blank"
              underline="hover"
              variant="body1"
            >
              GitHub
            </Link>
          </Grid>
        </Grid>

        {submitted && (
          <Alert severity="success" sx={{ mb: 2 }}>
            Message sent successfully!
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            fullWidth
            required
            value={form.name}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            fullWidth
            required
            value={form.email}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            label="Message"
            name="message"
            multiline
            rows={4}
            fullWidth
            required
            value={form.message}
            onChange={handleChange}
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2, backgroundColor: '#1976d2' }}
          >
            Send Message
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default Contact;
