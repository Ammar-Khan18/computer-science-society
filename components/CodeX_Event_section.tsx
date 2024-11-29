'use client';
import React from 'react';
import { Box, Container, Typography, Paper, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';

// Images
import community from '../public/community.png';
import challenges from '../public/challenges.png';
import weekly_competition from '../public/weekly_competition.png';
import reward from '../public/reward.png';

const CodeXSection: React.FC = () => {
  return (
    <Box sx={{ bgcolor: '#CDC1FF', py: { xs: 8, sm: 10 }, position: 'relative', overflow: 'hidden', zIndex: 0 }}> {/* #EBF5EE */}
      
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
          zIndex: -1,
          opacity: 0.72,
        }}
      /> */}

      {/* Background blur effect - top */}
      {/* <Box
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
      /> */}

      <Container maxWidth="lg" id="codex-section">
        <Typography variant="h3" color="#D81B60" align="center" gutterBottom sx={{ fontWeight: 700, marginTop: 10, borderBottom: '2px solid #D81B60', display: 'inline-block' }}>
          CodeX Event 
        </Typography>
        <Typography
          variant="h5"
          align="left"
          color="text.primary"
          sx={{ maxWidth: 'lg', mx: 'auto', fontWeight: 500 }}
          gutterBottom
        >
          The ultimate coding challenge for developers of all skill levels. 
        </Typography>
        <Typography
          variant="h5"
          align="left"
          color="text.secondary"
          sx={{ maxWidth: 'lg', mx: 'auto', fontWeight: 400 }}
          gutterBottom
        >
          Join us for an exciting event full of innovation, problem-solving, and competition! 
        </Typography>

        <Grid container spacing={4} sx={{ mt: { xs: 5, sm: 8 } }}>
          
          {/* Left Column */}
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
                Challenges
              </Typography>
              <Typography color="text.secondary">
                Different challenges to test your skills in computer science and programming related to many fields such as AI, ML, Web Development, etc.
              </Typography>
              <Box
                sx={{
                  position: 'relative',
                  top: { xs: 40, sm: 90 },
                  left: 0,
                  width: '100%',
                  height: { xs: 200, sm: 300, lg: 450 },  // Use responsive height values
                  backgroundImage: `url(${challenges.src})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              />
            </Paper>
          </Grid>

          {/* Middle Column with Two Stacked Components */}
          <Grid size={{ xs: 12, lg: 4 }}>
            <Grid container direction="column" spacing={3}>
              <Grid>
                <Paper elevation={2} sx={{ display: 'flex', flexDirection: 'column', p: 4, borderRadius: 5, backgroundColor: 'grey.100' }}>
                  <Typography variant="h5" color="text.primary" gutterBottom>
                    Weekly Competitions
                  </Typography>
                  <Typography color="text.secondary">
                    Weekly competitions to test your skills in computer science and programming.
                  </Typography>
                  <Box
                    sx={{
                      position: 'relative',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: 136,
                      backgroundImage: `url(${weekly_competition.src})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    }}
                  />
                </Paper>
              </Grid>

              <Grid>
                <Paper elevation={2} sx={{ display: 'flex', flexDirection: 'column', p: 4, borderRadius: 5, backgroundColor: 'grey.100' }}>
                  <Typography variant="h5" color="text.primary" gutterBottom>
                    Rewards
                  </Typography>
                  <Typography color="text.secondary">
                    Rewards for the winners of the competitions
                  </Typography>
                  <Box
                    sx={{
                      position: 'relative',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: 136,
                      backgroundImage: `url(${reward.src})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    }}
                  />
                </Paper>
              </Grid>
            </Grid>
          </Grid>

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
                  top: { xs: 40, sm: 101 },
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
