'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';

export default function Example() {
  return (
    <Box sx={{py: { xs: 6, sm: 8 } }}>

      <Box
        sx={{
          padding: '4rem 2rem',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundImage: 'url(/About_us_bg-30-Oct-2024-12-06-AM-6631.jpg)', // Add your background image here
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(128, 0, 128, 0.2)', // Semi-transparent purple overlay
            zIndex: 1,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url(/paper_texture_1.jpg)', // Texture overlay
            backgroundSize: 'cover',
            opacity: 0.2,
            zIndex: 2,
          },
        }}
      >

      <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 3 }}>
        <Typography
          variant="h3"
          align="center"
          sx={{ fontWeight: 'bold', color: '#fff', marginBottom: 6 }}
        >
          Our Partners
        </Typography>
        
        <Grid container spacing={18} justifyContent="center" sx={{marginBottom: 10}}>
          {[{ src: '/Notion_partner-removebg-preview.png', alt: 'Sponsor 1' }, { src: '/GDG_partner-removebg-preview.png', alt: 'Sponsor 2' }].map((logo, index) => (
            <Grid
              size={{ xs: 12, md: 6 }}
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Box sx={{ width: '300px', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff',
                 border: '2px solid gold', backdropFilter: 'blur(2px)', position: 'relative', overflow: 'hidden' }}>
              <img
                alt={logo.alt}
                src={logo.src}
                width={300}
                height={300}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                }}
              />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  </Box>
  );
}
