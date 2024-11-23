'use client'
import { Button, Typography, Container, Box, IconButton, Paper, Card, SvgIcon} from '@mui/material'
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
    <div style={{ backgroundColor: '#CDC1FF', position: 'relative', overflow: 'hidden', zIndex: 0 }}>

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

            <Typography variant='h4' sx={{ mt: 3, fontSize: { xs: '1.8rem', sm: '2.2rem' }, color: 'text.secondary' }}>
              Introducing Pro Battle 
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
                        backgroundColor: 'white',
                        color: 'black',
                        '&:hover': {
                        backgroundColor: 'gray',
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
                        backgroundColor: 'white',
                        color: 'black',
                        '&:hover': {
                        backgroundColor: 'gray',
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
                        backgroundColor: 'white',
                        color: 'black',
                        '&:hover': {
                        backgroundColor: 'gray',
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

        {/* CodeX Section */}
        <Container maxWidth="lg" sx={{ mt: 6 }}>
          <Card
            sx={{
              position: "relative",
              overflow: "hidden",
              backgroundColor: "grey.900",
              p: { xs: 4, sm: 6, md: 8 },
              display: { lg: "flex" },
              gap: 4,
              borderRadius: 2,
              boxShadow: 6,
            }}
          >
            {/* Background Gradient */}
            <SvgIcon
              sx={{
                position: "absolute",
                left: "50%",
                top: "50%",
                zIndex: -1,
                width: "64rem",
                height: "64rem",
                transform: {
                  xs: "translate(-50%, -50%)",
                  sm: "translateX(0)",
                  lg: "translate(-50%, 0)",
                },
                maskImage: "radial-gradient(closest-side, white, transparent)",
              }}
              viewBox="0 0 1024 1024"
              aria-hidden="true"
            >
              <circle
                cx="512"
                cy="512"
                r="512"
                fill="url(#gradient)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="gradient">
                  <stop offset="0%" stopColor="#7775D6" />
                  <stop offset="100%" stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </SvgIcon>

            {/* Content Section */}
            <Box
              sx={{
                textAlign: { xs: "center", lg: "left" },
                mx: "auto",
                py: { lg: 6 },
                maxWidth: 480,
              }}
            >
              <Typography
                variant="h3"
                component="h2"
                sx={{ fontWeight: "semibold", color: "grey.400", borderBottom: "4px solid #D81B60", display: "inline-block", mb: 3, fontSize: { xs: '1.8rem', lg: '3rem' } }}
              >
                Codex Event
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "grey.300", mb: 4, lineHeight: 1.8, justifyContent: "center", alignItems: "center" }}
              >
                Codex is a competitive programming event that challenges you to solve real-world problems using your coding skills. Join us for a thrilling experience!
              </Typography>
              <Box sx={{ display: "flex", gap: 2, justifyContent: "center", lg: { justifyContent: "start" } }}>
                <Button
                  variant="contained"
                  href="#codex-section"
                  sx={{
                  backgroundColor: "white",
                  color: "grey.900",
                  fontSize: { xs: '0.75rem', sm: '1rem' }, // Smaller font size for smaller screens
                  padding: { xs: '0.25rem 0.5rem', sm: '0.5rem 1rem' }, // Smaller padding for smaller screens
                  "&:hover": { backgroundColor: "grey.100" },
                  }}
                >
                  Get started
                </Button>
                <Button
                  variant="text"
                  href='/codex'
                  sx={{ 
                    color: "white", 
                    fontWeight: "bold",
                    fontSize: { xs: '0.75rem', sm: '1rem' }, // Smaller font size for smaller screens
                    padding: { xs: '0.25rem 0.5rem', sm: '0.5rem 1rem' }, // Smaller padding for smaller screens
                  }}
                  endIcon={<span aria-hidden="true">→</span>}
                >
                  Learn more
                </Button>
              </Box>
            </Box>

            {/* Image Section */}
            <Box
              sx={{
                position: "relative",
                mt: { xs: 4, lg: 0 },
                height: 320,
                flex: 1,
              }}
            >
              <img
                src="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png"
                alt="App screenshot"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  borderRadius: "8px",
                  boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.1)",
                }}
              />
            </Box>
          </Card>
        </Container>
        
        <Box sx={{ mt: 6, width: '100%' }}>
          <Paper elevation={3} sx={{ padding: { xs: '1rem', sm: '1.5rem' }, backgroundColor: 'rgba(0, 0, 0, 0.8)', borderRadius: 3 }}>
            <Carousel_Hero />
          </Paper>
        </Box>
      </Container>
    </div>
  )
}
