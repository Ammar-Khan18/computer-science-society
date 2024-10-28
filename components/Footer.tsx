import { Box, Typography, IconButton, Grid2 } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Image from 'next/image';

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: '#333',
        color: 'white',
        p: 4,
        mt: 0,
        textAlign: 'center',
      }}
    >
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12, sm: 4 }}>
          <Typography variant="h6">Connect With Us</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
            <IconButton
              href="https://www.linkedin.com/company/iba-computer-science-society/" // Replace with actual link
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: 'white' }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/css.iba/" // Replace with actual link
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: 'white' }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              href="https://discord.com/invite/your-discord-channel-link" // Replace with actual link
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: 'white' }}
            >
              <Image src="/Discord-Emblem.svg" alt="Discord" width={24} height={24} />
            </IconButton>
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 4 }}>
          <Typography variant="h6">Contact Us</Typography>
          <Typography variant="body2">Email: contact@css.com</Typography>
          <Typography variant="body2">Phone: +123-456-7890</Typography>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 4 }}>
          <Typography variant="h6">Our Society</Typography>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Computer Science Society. All rights reserved.
          </Typography>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Footer;
