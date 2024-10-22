"use client";
import React from 'react';
import { Box, Button, Typography, Container } from '@mui/material';
import Grid2 from '@mui/material/Grid2'; // Correct Grid2 import
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        height: '100vh', // Full viewport height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', // To align content to top and bottom
        background: 'url(/path-to-background-image.jpg) no-repeat center center fixed', // Optional background image
        backgroundSize: 'cover', // Cover the entire section
      }}
    >
      {/* Main content of the hero section */}
      <Container maxWidth="lg" sx={{ pt: 8 }}>
        <Grid2 container spacing={4} alignItems="center" justifyContent="space-between">
          {/* Left Section: Title, Description, and Buttons */}
          <Grid2 size={{ xs: 12, sm: 6 }} sx={{ display: 'flex', flexDirection: 'column', px: 2 }}>
            <Typography variant="h2" component="h1" gutterBottom>
              Computer Science Society
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Welcome to the Computer Science Society, a hub for tech enthusiasts to connect, collaborate, and grow together. Join us for exciting events like CodeX and Pro Battle!
            </Typography>

            {/* Buttons */}
            <Box>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'yellow', // Yellow for CodeX button
                  color: 'black',
                  mr: 2,
                  '&:hover': {
                    backgroundColor: 'orange', // Optional hover color
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
                    borderColor: '#9d00ff', // Optional hover color
                    backgroundColor: 'purple', // Optional hover background
                  },
                }}
                href="#probattle-section"
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

      {/* Bottom transition section with arrows and image */}
      <Box
        sx={{
          position: 'relative',
          textAlign: 'center',
          height: '250px', // Height of the bottom gradient and image
          background: 'linear-gradient(to bottom, transparent, yellow)', // Gradient to yellow
        }}
      >
        {/* Arrows pointing down on either side */}
        <Box
          sx={{
            display: 'flex', // Flexbox to position items in a row
            alignItems: 'center', // Vertically center the arrows and image
            justifyContent: 'space-between', // Space out the arrows and image
            height: '100%', // Ensure the full height is used
            padding: '0 20px', // Optional: Add some horizontal padding
          }}
        >
          {/* Left Arrow */}
          <ArrowDownwardIcon sx={{ fontSize: '48px', color: 'black' }} />

          {/* Center CodeX Image */}
          <Box
            component="img"
            src="/codex_title.png"
            alt="CodeX"
            sx={{
              width: '200px',
              height: 'auto',
            }}
          />

          {/* Right Arrow */}
          <ArrowDownwardIcon sx={{ fontSize: '48px', color: 'black' }} />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
