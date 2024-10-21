"use client";
import React from 'react';
import { Box, Button, Typography, Container } from '@mui/material';
import Grid2 from '@mui/material/Grid2'; // Correct Grid2 import

const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        height: '100vh', // Make the hero section full viewport height
        display: 'flex',
        alignItems: 'center', // Center content vertically
        justifyContent: 'center', // Center content horizontally
        background: 'url(/path-to-background-image.jpg) no-repeat center center fixed', // Optional: add background image
        backgroundSize: 'cover', // Optional: cover the entire section
      }}
    >
      <Container maxWidth="lg" sx={{ pb: 8 }}>
        <Grid2 container spacing={4} alignItems="center" justifyContent="space-between">
          {/* Left Section: Title, Description, and Buttons */}
          <Grid2 size={{ xs: 12, sm: 6 }} sx={{ display: 'flex', flexDirection: 'column', px: 2 }}>
            <Typography variant="h2" component="h1" gutterBottom>
              Computer Science Society
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Welcome to the Computer Science Society, a hub for tech enthusiasts to connect, collaborate, and grow together. Join us for exciting events like CodeX and Pro Battle!
            </Typography>

            {/* Buttons with anchor link */}
            <Box>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'yellow', // Yellow for CodeX button
                  color: 'black',
                  mr: 2,
                  '&:hover': {
                    backgroundColor: 'orange', // Optional: hover color
                  },
                }}
                href="#codex-section" // Anchor link to CodeX section
              >
                CodeX
              </Button>
              <Button
                variant="contained"
                sx={{
                  borderColor: 'purple', // Purple for Pro Battle button
                  backgroundColor: 'purple',
                  color: 'white',
                  '&:hover': {
                    borderColor: '#9c27b0', // Optional: hover color
                    backgroundColor: 'purple', // Optional: hover background
                  },
                }}
              >
                Pro Battle
              </Button>
            </Box>
          </Grid2>

          {/* Right Section: Society Logo (hidden on mobile) */}
          <Grid2 size={{ xs: 12, sm: 6 }} sx={{ display: { xs: 'none', sm: 'block' }, textAlign: 'center' }}>
            <Box
              component="img"
              src="/css_transparent.png"
              alt="Computer Science Society Logo"
              sx={{ width: '100%', maxWidth: '300px' }}
            />
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default HeroSection;
