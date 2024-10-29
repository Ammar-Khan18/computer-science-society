/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from 'react';
import { Box, Button, Typography, Container } from '@mui/material';
import Grid2 from '@mui/material/Grid2'; // Correct Grid2 import

const ProBattleSection: React.FC = () => {
  return (
    <Box
      id="probattle-section"
      sx={{
        height: '100vh', // Make the Pro Battle section full viewport height
        backgroundColor: 'purple', // Background color for Pro Battle
        display: 'flex',
        alignItems: 'center', // Center content vertically
        justifyContent: 'center', // Center content horizontally
        textAlign: 'center', // Center text
        color: 'white', // Text color
      }}
    >
      <Container maxWidth="lg">
        <Grid2 container spacing={4} alignItems="center" justifyContent="center">
          {/* Logo on top */}
          <Grid2 size={{ xs: 12 }} sx={{ textAlign: 'center' }}>
            <Box
              component="img"
              src="/path-to-probattle-logo.png" // Pro Battle logo
              alt="Pro Battle Logo"
              sx={{ width: '100%', maxWidth: '200px' }}
            />
          </Grid2>

          {/* Title and Description */}
          <Grid2 size={{ xs: 12 }} sx={{ textAlign: 'center', mt: 4 }}>
            <Typography
              variant="h2"
              component="h1"
              sx={{ fontWeight: 'bold' }}
            >
              Pro Battle Event
            </Typography>
            <Typography
              variant="body1"
              sx={{ mt: 2 }}
            >
              Join the ultimate competitive coding event, where top developers battle it out to solve complex challenges and win exciting prizes!
            </Typography>
          </Grid2>

          {/* Button at the bottom */}
          <Grid2 size={{ xs: 12 }} sx={{ textAlign: 'center', mt: 4 }}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: 'yellow',
                color: 'black',
                '&:hover': {
                  backgroundColor: 'darkpurple', // Optional hover effect
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

export default ProBattleSection;
