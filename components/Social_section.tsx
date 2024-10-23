import React from 'react';
import { Box, Container, Typography, Paper, Button, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Image from 'next/image';

const Socials = () => {
  return (
    <Box sx={{ padding: '4rem 2rem', display: 'flex', justifyContent: 'center', backgroundColor: 'blue' }}>
      <Paper elevation={3} sx={{ padding: '2rem', maxWidth: '600px', textAlign: 'center' }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Follow Us
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Stay connected with us on social media and join our community!
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
          <IconButton href="https://linkedin.com" target="_blank" sx={{ color: '#0077B5' }}>
            <LinkedInIcon fontSize="large" />
          </IconButton>
          <IconButton href="https://instagram.com" target="_blank" sx={{ color: '#C13584' }}>
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
