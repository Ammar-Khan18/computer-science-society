"use client";
import React from 'react';
import { Box, Button, Typography, Container } from '@mui/material';
import Grid2 from '@mui/material/Grid2'; // Correct import for Grid2

const HeroSection: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}>
      <Grid2 container spacing={4} alignItems="center" justifyContent="space-between">
        {/* Left Section: Title, Description, and Buttons */}
        <Grid2 size={{ xs: 12, sm: 6 }} sx={{ display: 'flex', flexDirection: 'column', px: 2 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Computer Science Society
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Welcome to the Computer Science Society, a hub for tech enthusiasts to connect, collaborate, and grow together. Join us for exciting events like CodeX and Pro Battle!
          </Typography>

          {/* Buttons with spacing */}
          <Box>
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'yellow',
                color: 'black',
                mr: 2, // Add margin-right for spacing
                '&:hover': {
                  backgroundColor: '#fdd835', // Slightly darker yellow on hover
                },
              }}>
              CodeX
            </Button>
            <Button 
              variant="contained" 
              sx={{
                color: 'white',
                backgroundColor: 'purple',
                borderColor: 'purple',
                '&:hover': {
                  backgroundColor: '#9c27b0', // Dark purple hover effect
                  borderColor: 'purple',
                },
              }}>
              Pro Battle
            </Button>
          </Box>
        </Grid2>

        {/* Right Section: Society Logo (hidden on mobile) */}
        <Grid2 size={{ xs:12,sm:6}} sx={{ display: { xs: 'none', sm: 'block' }, textAlign: 'center' }}>
          <Box
            component="img"
            src="/css_transparent.png"
            alt="Computer Science Society Logo"
            sx={{ width: '100%', maxWidth: '300px' }} // Adjust size as needed
          />
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default HeroSection;
