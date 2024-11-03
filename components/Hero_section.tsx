"use client";
import React from 'react';
import { Grid2, Box, Button, IconButton, Typography, Container, Paper } from '@mui/material';
import Carousel_Hero from '@/components/Carousel_Hero'; // Adjust the path as needed
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        zIndex: 0, // To ensure the background is behind all other content
      }}
    >
      {/* Full-width Background Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundImage: 'url(/gradient_bg_hero.jpg)', // Replace with your image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: -1, // To keep the image behind other elements
        }}
      />
    <Container maxWidth="lg">
      <Box
        sx={{
          minHeight: '100vh', // Full viewport height
          display: 'flex',
          flexDirection: 'column',
          mt: -6,
          paddingTop: 8,
        }}
      >
        <Grid2 container spacing={4}>
          {/* Top Left Section: Title and Description */}
          <Grid2 size={{ xs: 12, sm: 8 }}>
          <Paper
            elevation={3}
            sx={{
              padding: '2rem',
              backgroundColor: 'rgba(0, 0, 0, 0.8)', // Black with 80% opacity
              color: '#ffffff',
              textAlign: 'left',
            }}
          >
            <Typography variant="h2" component="h1" gutterBottom sx={{ opacity: 1 }}>
              Computer Science Society
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, opacity: 1 }}>
              Welcome to the Computer Science Society, a hub for tech enthusiasts to connect, collaborate, and grow
              together. Join us for exciting events like CodeX and Pro Battle!
            </Typography>
            
            {/* Follow Us Section */}
            <Box sx={{ mt: 4 }}>
              {/* <Typography variant="h4" sx={{ mb: 2, color: 'white' }}>
                Follow Us
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: 'white' }}>
                Stay connected with us on social media and join our community!
              </Typography> */}
              <Box sx={{ display: 'flex', justifyContent: 'left', gap: '1.5rem', flexWrap: 'wrap' }}>
                {/* Instagram Button */}
                <Button
                  href="https://www.instagram.com/css.iba/"
                  target="_blank"
                  variant="outlined"
                  color="secondary"
                  startIcon={<InstagramIcon />}
                  sx={{
                    // backgroundColor: '#C13584',
                    color: 'white',
                    '&:hover': { backgroundColor: '#ad276c' },
                    textTransform: 'none',
                    fontSize: '1rem',
                  }}
                >
                  Follow us on Instagram
                </Button>

                {/* LinkedIn Icon */}
                <IconButton
                  href="https://www.linkedin.com/company/iba-computer-science-society/"
                  target="_blank"
                  sx={{ color: '#0077B5' }}
                >
                  <LinkedInIcon fontSize="large" />
                </IconButton>

                {/* Discord Icon */}
                <IconButton href="https://discord.com" target="_blank" sx={{ color: '#7289DA' }}>
                  <Image src="/Discord-Emblem.svg" alt="Discord" width={35} height={35} />
                </IconButton>
              </Box>
            </Box>
          </Paper>
        </Grid2>


          {/* Top Right Section: CodeX Title Box */}
          <Grid2 size={{ xs: 12, sm: 4 }}>
          <Paper
            elevation={3}
            sx={{
              padding: '2rem',
              backgroundColor: '#e3e3e3',
              backgroundImage: 'url(/codex_event_section_bg.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              height: '100%',
              gap: '1rem',
            }}
          >
            {/* CodeX Logo */}
            <Box sx={{ width: '100%', maxWidth: '150px' }}>
              <Image src="/codeX_logo.png" alt="CodeX Logo" width={150} height={150} />
            </Box>

            {/* CodeX Title */}
            <Typography variant="h3" component="h2" color='black'>
              CodeX
            </Typography>

            {/* Button to CodeX Section */}
            <Button
              variant="contained"
              color="primary"
              href="#codex-section" // Assumes 'codex-section' ID is set on the CodeX section
              sx={{
                mt: 2,
                backgroundColor: 'purple',
                color: 'white',
                '&:hover': { backgroundColor: '#5d2a7d' },
              }}
            >
              Explore CodeX
            </Button>
          </Paper>
        </Grid2>

          {/* Bottom Section: Carousel */}
          <Grid2 size={{ xs: 12 }}>
            <Paper elevation={3} sx={{ padding: '1rem', backgroundColor: 'rgba(0, 0, 0, 0.8)', height: 'auto' }}>
              <Carousel_Hero /> {/* Add the carousel component here */}
            </Paper>
          </Grid2>
        </Grid2>
      </Box>
    </Container>
    </Box>
  );
};

export default HeroSection;
