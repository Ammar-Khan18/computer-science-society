import React from 'react';
import { Box, Container, Typography, Button, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Image from 'next/image';

const SocialsSection: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5', // Light background for contrast
        py: 8,
        color: "#000000"
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          sx={{ textAlign: 'center', mb: 4, fontWeight: 'bold'}}
        >
          Connect with Us!
        </Typography>

        <Typography
          variant="body1"
          sx={{ textAlign: 'center', mb: 6}}
        >
          Follow us on our social platforms to stay updated with all the latest events, news, and community discussions. Let's build the future of computer science together!
        </Typography>

        {/* Social icons */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 4, // Space between each icon
            color: "#000000"
          }}
        >
          {/* LinkedIn */}
          <Box sx={{ textAlign: 'center' }}>
            <IconButton
              href="https://www.linkedin.com/in/your-linkedin-profile" // Replace with actual link
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: '#0A66C2' }} // LinkedIn color
            >
              <LinkedInIcon sx={{ fontSize: 48 }} />
            </IconButton>
            <Typography variant="body2">Follow us on LinkedIn</Typography>
          </Box>

          {/* Instagram */}
          <Box sx={{ textAlign: 'center' }}>
            <IconButton
              href="https://www.instagram.com/your-instagram-profile" // Replace with actual link
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: '#E4405F' }} // Instagram color
            >
              <InstagramIcon sx={{ fontSize: 48 }} />
            </IconButton>
            <Typography variant="body2">Check out our Instagram</Typography>
          </Box>

          {/* WhatsApp Community */}
          <Box sx={{ textAlign: 'center' }}>
            <IconButton
              href="https://chat.whatsapp.com/your-whatsapp-community-link" // Replace with actual link
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: '#25D366' }} // WhatsApp color
            >
              <WhatsAppIcon sx={{ fontSize: 48 }} />
            </IconButton>
            <Typography variant="body2">Join our WhatsApp Community</Typography>
          </Box>

          {/* Discord Channel */}
          <Box sx={{ textAlign: 'center' }}>
          <IconButton
            href="https://discord.com/invite/your-discord-channel-link" // Replace with actual link
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: '#5865F2' }} // Discord color
          >
            <Image
              src="/Discord-Emblem.svg"
              alt="Discord logo"
              width={48}
              height={48}
            />
          </IconButton>
            <Typography variant="body2">Join the Discord Channel</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SocialsSection;
