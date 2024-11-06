"use client";
import React from 'react';
import { Grid2, Box, Button, IconButton, Typography, Container, Paper } from '@mui/material';
import Carousel_Hero from '@/components/Carousel_Hero';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        zIndex: 0,
      }}
    >
      {/* Full-width Background Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: { xs: '100%', md: '100%' },
          backgroundImage: 'url(/gradient_bg_hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: -1,
        }}
      />
      <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', minHeight: { xs: 'auto', md: '100vh' } }}>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            paddingTop: 5,
            paddingBottom: {xs: 5},
          }}
        >
          <Grid2 container spacing={4}>
            {/* Top Left Section: Title and Description */}
            <Grid2 size={{ xs: 12, sm: 8 }} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Paper
                elevation={3}
                sx={{
                  padding: { xs: '1rem', sm: '2rem' },
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  color: '#ffffff',
                  textAlign: 'left', // Keeps text left-aligned horizontally
                  display: 'flex', // Enables flexbox for vertical centering
                  flexDirection: 'column',
                  justifyContent: 'center', // Centers content vertically
                  height: '100%',
                  width: '100%',
                }}
              >
                
                <Typography variant="h4" component="h1" gutterBottom sx={{ fontSize: '2.5rem' }}>
                  Computer Science Society
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, fontSize: '1rem' }}>
                  Welcome to the Computer Science Society, a hub for tech enthusiasts to connect, collaborate, and grow together. 
                  Join us for exciting events like CodeX and Pro Battle!
                </Typography>
                {/* Follow Us Section */}
                <Box sx={{ mt: 4 }}>
                  <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'left' }, gap: { xs: '0.5rem', sm: '1.5rem' }, flexWrap: 'wrap' }}>
                    <Button
                      href="https://www.instagram.com/css.iba/"
                      target="_blank"
                      variant="outlined"
                      color="secondary"
                      startIcon={<InstagramIcon />}
                      sx={{
                        color: 'white',
                        '&:hover': { backgroundColor: '#ad276c' },
                        textTransform: 'none',
                        fontSize: '1rem',
                      }}
                    >
                      Instagram
                    </Button>
                    <IconButton href="https://www.linkedin.com/company/iba-computer-science-society/" target="_blank" sx={{ color: '#0077B5' }}>
                      <LinkedInIcon fontSize="large" />
                    </IconButton>
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
                  padding: { xs: '1rem', sm: '2rem' },
                  // backgroundColor: '#e3e3e3',
                  backgroundImage: 'url(/codex_event_section_bg_2.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  textAlign: 'center',
                  height: '100%',
                }}
              >
                <Box sx={{ width: '100%', maxWidth: { xs: '150px', sm: '150px' }, margin: '0 auto' }}>
                  <Image src="/codeX_logo.png" alt="CodeX Logo" width={150} height={150} />
                </Box>
                <Typography variant="h5" component="h2" color='black' sx={{ fontSize: { xs: '1.8rem', sm: '2rem' } }}>
                  CodeX
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  href="#codex-section"
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
              <Paper elevation={3} sx={{ padding: { xs: '0.5rem', sm: '1rem' }, backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
                <Carousel_Hero />
              </Paper>
            </Grid2>
          </Grid2>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;