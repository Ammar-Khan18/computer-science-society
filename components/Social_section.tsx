import React from 'react';
import { Box, Typography, Paper, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Image from 'next/image';

const Socials = () => {
  return (
    <Box sx={{ padding: '4rem 2rem', position: 'relative', overflow: 'hidden', display: 'flex', justifyContent: 'center' }}>
      {/* Background Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/About_us_bg-30-Oct-2024-12-06-AM-6631.jpg)', // Replace with your image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -2, // Send the background behind other content
        }}
      />
      
      {/* Texture Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/paper_texture_1.jpg)', // Replace with your texture image path
          backgroundSize: 'cover', // Adjust as needed
          opacity: 0.2, // Adjust the opacity for visibility
          zIndex: -1, // Send the texture behind the Paper but above the background image
        }}
      />

      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 255, 0.5)', // Semi-transparent blue
          zIndex: 0,
        }}
      />
      
      <Paper elevation={3} sx={{ padding: '2rem', maxWidth: '600px', textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)', opacity: 0.9 }}>
        <Typography variant="h4" sx={{ mb: 2, color: 'white' }}>
          Follow Us
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, color: 'white' }}>
          Stay connected with us on social media and join our community!
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
          <IconButton href="https://www.linkedin.com/company/iba-computer-science-society/" target="_blank" sx={{ color: '#0077B5' }}>
            <LinkedInIcon fontSize="large" />
          </IconButton>
          <IconButton href="https://www.instagram.com/css.iba/" target="_blank" sx={{ color: '#C13584' }}>
            <InstagramIcon fontSize="large" />
          </IconButton>
          <IconButton href="https://discord.com" target="_blank" sx={{ color: '#7289DA' }}>
            <Image src="/Discord-Emblem.svg" alt="Discord" width={35} height={35} />
          </IconButton>
        </Box>
      </Paper>
    </Box>
  );
};

export default Socials;
