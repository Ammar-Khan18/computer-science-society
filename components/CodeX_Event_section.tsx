'use client';
import React from 'react';
import { Box, Container, Typography, Paper, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';

const CodeXSection: React.FC = () => {
  return (
    <Box sx={{ bgcolor: 'grey.50', py: { xs: 8, sm: 10 }, position: 'relative', overflow: 'hidden', zIndex: 0 }}>
      
      {/* Full-width Background Image */}
      <Box
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
          zIndex: -1,
          opacity: 0.72,
        }}
      />

      {/* Background blur effect - top */}
      <Box
        sx={{
          position: 'absolute',
          top: '-10%',
          left: '50%',
          width: { xs: '36.125rem', sm: '72.1875rem' },
          transform: 'translateX(-50%) rotate(30deg)',
          aspectRatio: '1155 / 678',
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 70%)',
          clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          zIndex: -1,
          filter: 'blur(60px)', 
        }}
      />

      <Container maxWidth="lg" id="codex-section">
        <Typography variant="h3" color="#6102D3" align="center" gutterBottom sx={{ fontWeight: 700, marginTop: 10 }}>
          CodeX Event 
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.primary"
          sx={{ maxWidth: 'lg', mx: 'auto', fontWeight: 600 }}
          gutterBottom
        >
          The ultimate coding challenge for developers of all skill levels. Join us for an exciting event full of innovation, problem-solving, and competition! 
        </Typography>

        <Grid container spacing={4} sx={{ mt: { xs: 5, sm: 8 } }}>
          
          {/* Left Column */}
          <Grid size={{ xs: 12, lg: 4 }} sx={{ maxHeight: '600px', height: { xs: '330px', lg: '530px' } }}>
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
              <Typography variant="h6" color="text.primary" gutterBottom>
                Challenges
              </Typography>
              <Typography color="text.secondary">
                Different challenges to test your skills in computer science and programming related to many fields such as AI, ML, Web Development, etc.
              </Typography>
              <Box
                sx={{
                  mt: 2,
                  width: '100%',
                  height: { xs: 150, sm: 300},
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  borderRadius: '0 0 5px 5px',
                  overflow: 'hidden',
                }}
              >
                <img 
                  src="https://tailwindui.com/plus/img/component-images/bento-03-mobile-friendly.png"
                  alt="Challenges"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>
            </Paper>
          </Grid>

          {/* Middle Column with Two Stacked Components */}
          <Grid size={{ xs: 12, lg: 4 }}>
            <Grid container direction="column" spacing={4}>
              <Grid>
                <Paper elevation={2} sx={{ display: 'flex', flexDirection: 'column', p: 4, borderRadius: 5, backgroundColor: 'grey.100' }}>
                  <Typography variant="h6" color="text.primary" gutterBottom>
                    Weekly Competitions
                  </Typography>
                  <Typography color="text.secondary">
                    Weekly competitions to test your skills in computer science and programming.
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <img
                      src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png"
                      alt=""
                      style={{ width: '100%', maxWidth: '300px' }}
                    />
                  </Box>
                </Paper>
              </Grid>

              <Grid>
                <Paper elevation={2} sx={{ display: 'flex', flexDirection: 'column', p: 4, borderRadius: 5, backgroundColor: 'grey.100' }}>
                  <Typography variant="h6" color="text.primary" gutterBottom>
                    Rewards
                  </Typography>
                  <Typography color="text.secondary">
                    Rewards for the winners of the competitions
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <img
                      src="https://tailwindui.com/plus/img/component-images/bento-03-security.png"
                      alt=""
                      style={{ width: '100%', maxWidth: '300px', objectFit: 'cover' }}
                    />
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Grid>

          {/* Right Column */}
          <Grid size={{ xs: 12, lg: 4 }} sx={{ maxHeight: '600px', height: { xs: '330px', lg: '530px' } }}>
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
              <Typography variant="h6" color="text.primary" gutterBottom>
                Community
              </Typography>
              <Typography color="text.secondary">
                Join a community of developers and programmers to share ideas, learn new skills, and collaborate on projects.
              </Typography>
              <Box
                sx={{
                  mt: 2,
                  width: '100%',
                  height: 300,
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  borderRadius: '0 0 5px 5px',
                  overflow: 'hidden',
                }}
              >
                <img 
                  src="https://tailwindui.com/plus/img/component-images/bento-03-security.png"
                  alt="Challenges"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    
                  }}
                />
              </Box>
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
