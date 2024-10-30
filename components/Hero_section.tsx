"use client";
import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import Grid2 from '@mui/material/Grid2'; // Correct Grid2 import
import Carousel_Hero from '@/components/Carousel_Hero' // Adjust the path as needed
import { DownArrowSVG } from './DownArrowSVG';

const HeroSection: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          height: '100vh', // Full viewport height
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#f0f0f0',
          backgroundSize: 'cover',
          mt: -6,
        }}
      >
        {/* Main content of the hero section */}
        <Container maxWidth="lg" sx={{ pt: 8, color: 'black' }}>
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
              {/*
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
                  href="#codex-section"
                >
                  CodeX
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    borderColor: 'purple',
                    backgroundColor: 'purple',
                    color: 'white',
                    '&:hover': {
                      borderColor: '#9d00ff',
                      backgroundColor: 'purple',
                    },
                  }}
                  href="#probattle-section"
                >
                  Pro Battle
                </Button>
              </Box>
              */}
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
          
          {/* Hero Carousel (Recent Events) */}
          <Box sx={{ mt: 2 }}>
            <Carousel_Hero />{/* Add the carousel component here */}
          </Box>
        </Container>

        {/* Bottom transition section with arrows and image */}
        <Box
          sx={{
            position: 'relative',
            textAlign: 'center',
            height: '250px',
            // background: 'linear-gradient(to bottom, transparent, #D9EA12)', // Gradient to yellow 
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '100%',
              padding: '0 20px',
            }}
          >
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
