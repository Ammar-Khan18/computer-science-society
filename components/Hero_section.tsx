'use client'
import { Button, Typography, Container, Box, IconButton, Paper } from '@mui/material'
import Carousel_Hero from '@/components/Carousel_Hero';
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import Image from 'next/image'
import React from 'react';

export default function HeroSection(): JSX.Element {
  return (
    <div style={{ backgroundColor: 'white', position: 'relative', overflow: 'hidden', zIndex: 0 }}>

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

      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          paddingTop: { xs: 8, sm: 14 },
          paddingBottom: { xs: 8, sm: 14 },
        }}
      >
        {/* Background blur effect - top */}
        <Box
          sx={{
            position: 'absolute',
            top: '-10%',
            left: '50%',
            width: { xs: '36.125rem', sm: '72.1875rem' },
            transform: 'translateX(-50%) rotate(30deg)',
            aspectRatio: '1155 / 678',
            background:
              'linear-gradient(135deg, rgba(255, 128, 181, 0.3), rgba(144, 137, 252, 0.3))',
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            zIndex: -1,
            filter: 'blur(40px)',
          }}
        />

        {/* Hero content */}
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
            >
              Follow us
            </Button>
            <Box display="flex" gap={2}>
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
            </Box>
          </Box>
        </Box>

        {/* Second Box: CodeX Section */}
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

        {/* Third Box: Carousel Section */}
        <Box sx={{ mt: 6, width: '100%' }}>
          <Paper elevation={3} sx={{ padding: { xs: '1rem', sm: '1.5rem' }, backgroundColor: 'rgba(0, 0, 0, 0.8)', borderRadius: 3 }}>
            <Carousel_Hero />
          </Paper>
        </Box>

        {/* Background blur effect - bottom */}
        <Box
          sx={{
            position: 'absolute',
            bottom: '-20%',
            left: '50%',
            width: { xs: '36.125rem', sm: '72.1875rem' },
            transform: 'translateX(-50%)',
            aspectRatio: '1155 / 678',
            background:
              'linear-gradient(135deg, rgba(255, 128, 181, 0.3), rgba(144, 137, 252, 0.3))',
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            zIndex: -1,
            filter: 'blur(40px)',
          }}
        />
      </Container>
    </div>
  )
}
