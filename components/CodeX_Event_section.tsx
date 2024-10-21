"use client";
import React from 'react';
import { Box, Button, Typography, Container } from '@mui/material';
import Grid2 from '@mui/material/Grid2'; // Correct Grid2 import

const CodeXSection: React.FC = () => {
  return (
    <Box
      id="codex-section"
      sx={{
        height: '100vh', // Make the CodeX section full viewport height
        backgroundColor: 'yellow', 
        display: 'flex',
        alignItems: 'center', // Center content vertically
        justifyContent: 'center', // Center content horizontally
        textAlign: 'center', // Center text
      }}
    >
      <Container maxWidth="lg">
        <Grid2 container spacing={4} alignItems="center" justifyContent="center">
          {/* Logo on top */}
          <Grid2 size={{ xs: 12 }} sx={{ textAlign: 'center' }}>
            <Box
              component="img"
              src="/codeX_logo.png"
              alt="CodeX Logo"
              sx={{ width: '100%', maxWidth: '200px' }}
            />
          </Grid2>

          {/* Title and Description */}
          <Grid2 size={{ xs: 12 }} sx={{ textAlign: 'center', mt: 4 }}>
            <Typography
              variant="h2"
              component="h1"
              sx={{ fontWeight: 'bold', color: 'black' }}
            >
              CodeX Event
            </Typography>
            <Typography
              variant="body1"
              sx={{ mt: 2, color: 'black' }}
            >
              The ultimate coding challenge for developers of all skill levels. Join us for an exciting event full of innovation, problem-solving, and competition!
            </Typography>
          </Grid2>

          {/* Button at the bottom */}
          <Grid2 size={{ xs: 12 }} sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: 'purple',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'purple', // Optional hover effect
                },
              }}
            >
              Register Now
            </Button>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default CodeXSection;
