'use client'
import { Button, Typography, Container, Box, IconButton, Paper } from '@mui/material'
import Carousel_Hero from '@/components/Carousel_Hero';
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import Image from 'next/image'
import React from 'react';
import Grid from '@mui/material/Grid2';
import { motion } from 'framer-motion';

import Home from '../public/Home1.jpg';

export default function HeroSection(): JSX.Element {

  const [animateIcons, setAnimateIcons] = React.useState(false);

  const handleFollowUsClick = () => {
    setAnimateIcons(true);
    setTimeout(() => setAnimateIcons(false), 1000); // Reset animation after 1 second
  };

  const iconContainerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const iconVariants = {
    initial: { y: 0 },
    animate: { y: [0, -10, 0], transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  return (
    <div style={{ backgroundColor: '#EBF5EE', position: 'relative', overflow: 'hidden', zIndex: 0 }}>

      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          paddingTop: { xs: 8, sm: 14 },
          paddingBottom: { xs: 8, sm: 14 },
        }}
      >
        <Grid container spacing={2}>
        <Box textAlign="center" sx={{ maxWidth: '650px', margin: 'auto', paddingBottom: 17 }}>
          <Typography variant="h1" sx={{ fontSize: { xs: '3rem', sm: '4rem' }, fontWeight: 'bold', color: 'text.primary', lineHeight: 1.2 }}>
            IBA <span style={{ color: '#D81B60', borderBottom: '2px solid #D81B60'}}>Computer Science</span> Society
          </Typography>

          <Typography variant="body1" sx={{ mt: 3, fontSize: { xs: '1.125rem', sm: '1.25rem' }, color: 'text.secondary' }}>
            Where tech enthusiasts connect, collaborate, and grow. Join us for thrilling events like CodeX and Pro Battle!
          </Typography>

          <Box mt={4} display="flex" justifyContent="center" gap={3}>
            <Button
              variant="contained"
              color="primary"
              sx={{ fontWeight: 'bold', textTransform: 'none', padding: '0.125rem 1rem' }}
              endIcon={<span>&rarr;</span>}
              onClick={handleFollowUsClick}
            >
              Follow us
            </Button>
            <motion.div variants={iconContainerVariants} initial="initial" animate={animateIcons ? 'animate' : 'initial'}>
              <Box display="flex" gap={2}>
                <motion.div variants={iconVariants}>
                  <IconButton
                    color="inherit"
                    component="a"
                    href="https://www.linkedin.com/company/iba-computer-science-society/"
                    target="_blank"
                    rel="noopener"
                    sx={{
                      backgroundColor: 'lightgray',
                      color: 'black',
                      '&:hover': {
                      backgroundColor: 'white',
                      borderRadius: '50%',
                      },
                    }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                </motion.div>
                <motion.div variants={iconVariants}>
                  <IconButton
                    color="inherit"
                    component="a"
                    href="https://discord.com"
                    target="_blank"
                    rel="noopener"
                    sx={{
                      backgroundColor: 'lightgray',
                      color: 'black',
                      '&:hover': {
                      backgroundColor: 'white',
                      borderRadius: '50%',
                      },
                    }}
                  >
                    <Image src="/Discord-Emblem.svg" alt="Discord" width={24} height={24} />
                  </IconButton>
                </motion.div>
                <motion.div variants={iconVariants}>
                  <IconButton
                    color="inherit"
                    component="a"
                    href="https://www.instagram.com/css.iba/"
                    target="_blank"
                    rel="noopener"
                    sx={{
                      backgroundColor: 'lightgray',
                      color: 'black',
                      '&:hover': {
                      backgroundColor: 'white',
                      borderRadius: '50%',
                      },
                    }}
                  >
                    <InstagramIcon />
                  </IconButton>
                </motion.div>
              </Box>
            </motion.div>
          </Box>
        </Box>

        <Box textAlign="center" sx={{ maxWidth: '650px', margin: 'auto', paddingBottom: 17 }}>
          <Image src={Home} alt="Home" width={300} height={200} />
        </Box>
        </Grid>

        <Box sx={{ mt: 6, width: '100%' }}>
            <Paper
              elevation={3}
              sx={{
                padding: { xs: '2rem', sm: '3rem' },
                backgroundImage: 'url(/codex_event_section_bg_2.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                textAlign: 'center',
                borderRadius: '12px',
              }}
            >
              <Box sx={{ width: '100%', maxWidth: { xs: '150px', sm: '200px' }, margin: '0 auto', mb: 2 }}>
                <Image src="/codeX_logo.png" alt="CodeX Logo" width={150} height={150} />
              </Box>
              <Typography variant="h4" component="h2" sx={{ fontSize: { xs: '1.8rem', sm: '2.2rem' }, color: 'black' }}>
                CodeX
              </Typography>
              <Button
                variant="contained"
                color="primary"
                href="#codex-section"
                sx={{
                  mt: 2,
                  backgroundColor: '#6A1B9A',
                  color: '#fff',
                  '&:hover': { backgroundColor: '#4A148C' },
                  fontSize: '1rem',
                  paddingX: 3,
                  textTransform: 'none',
                  borderRadius: '8px',
                }}
              >
                Explore CodeX
              </Button>
            </Paper>
        </Box>
        
        <Box sx={{ mt: 6, width: '100%' }}>
          <Paper elevation={3} sx={{ padding: { xs: '1rem', sm: '1.5rem' }, backgroundColor: 'rgba(0, 0, 0, 0.8)', borderRadius: 3 }}>
            <Carousel_Hero />
          </Paper>
        </Box>
      </Container>
    </div>
  )
}
