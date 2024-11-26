'use client';
import React from 'react';
import { Box, Container, Typography, Paper, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';

// Images
import community from '../public/community.png';
import challenges from '../public/challenges.png';
import weekly_competition from '../public/weekly_competition.png';
import reward from '../public/reward.png';

const CodeXSection: React.FC = () => {
  return (

    <Box
      sx={{
        position: 'relative',
        minHeight: '100%',
        overflow: 'hidden',
        zIndex: 0, // To ensure the background is behind all other content
      }}>
      {/* Full-width Background Image */}
      {/* <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '350vh',
          backgroundImage: 'url(/codex_event_section_bg_2.png)', // Replace with your image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: -1, // To keep the image behind other elements
        }}
      />
    <Container maxWidth="lg">
    <Box
      id="codex-section"
      sx={{
        position: 'relative',
        // backgroundImage: 'url(/codex_event_section_bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Make the CodeX section full viewport height
        overflow: 'hidden',
        // backgroundColor: '#D9EA12', 
        display: 'flex',
        alignItems: 'center', // Center content vertically
        justifyContent: 'center', // Center content horizontally
        textAlign: 'center', // Center text
      }}>
      <Container maxWidth="lg" sx={{zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Paper elevation={3} sx={{ padding: '2rem', maxWidth: '800px', textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)', zIndex: 3, color: 'white' }}>
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

          {/* Right Column */}
          <Grid size={{ xs: 12, lg: 4 }} sx={{ maxHeight: '600px', height: { xs: '330px', lg: '600px' } }}>
            <Paper 
              elevation={2} 
              sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                p: 4, 
                borderRadius: 5, 
                backgroundColor: 'grey.100', 
                position: 'relative', 
                overflow: 'hidden'
              }}
            >
              <Typography variant="h5" color="text.primary" gutterBottom>
                Community
              </Typography>
              <Typography color="text.secondary">
                Join a community of developers and programmers to share ideas, learn new skills, and collaborate on projects.
              </Typography>
              <Box
                sx={{
                  position: 'relative',
                  top: { xs: 40, sm: 100 },
                  left: 0,
                  width: '100%',
                  height: { xs: 200, sm: 500 },  // Use responsive height values
                  backgroundImage: `url(${community.src})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  transform: {xs: 'scale(1.2, 1.3)', sm: 'scale(1.2, 1.7)'},
                }}
              />
            </Paper>
          </Grid>

        </Grid>

        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="h3" color="#A6176F" gutterBottom sx={{ fontWeight: 700 }}>
            Join us now!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href='/codex'
            sx={{
              backgroundColor: 'purple',
              color: 'white',
              '&:hover': {
                backgroundColor: 'purple',
              },
            }}
          >
            Explore CodeX!
          </Button>
        </Box>
    
      </Container>
    </Box>
  );
}

export default CodeXSection;
