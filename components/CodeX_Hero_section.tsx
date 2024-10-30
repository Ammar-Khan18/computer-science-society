"use client";
import React from 'react';
import { Grid2, Box, Container, Typography } from '@mui/material';
import Image from 'next/image';

const CodeXHero: React.FC = () => {
  return (
    <Container maxWidth="lg">
    <Box
      sx={{
        height: '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0', // Example background color
        position: 'relative',
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Grid2 container justifyContent="center">
          {/* Title Image */}
          <Grid2 size={{ xs: 12, sm: 12 }}>
            <Image
              src="/codex_title.png" // Replace with the path to your image
              alt="CodeX Title"
              width={500} // Adjust width as needed
              height={100} // Adjust height as needed
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Grid2>

          {/* Subtitle or Additional Text */}
          <Grid2 size={{ xs: 12, sm: 12 }} sx={{ mt: 2 }}>
            <Typography variant="h6" color="textSecondary">
              Join us in exploring the world of coding with weekly contests and challenges!
            </Typography>
          </Grid2>
        </Grid2>
      </Container>
    </Box>
    </Container>
  );
};

export default CodeXHero;
