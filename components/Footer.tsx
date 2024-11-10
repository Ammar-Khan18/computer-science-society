import { Box, Typography, IconButton, Grid2, Divider } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Image from 'next/image';
import Grid from '@mui/material/Grid2';

const Footer: React.FC = () => {
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
      <Grid container spacing={2}>
        
          <Grid size={{ xs: 10, sm: 3.5 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fcb045' }}>Connect With Us</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
              <IconButton
                href="https://www.linkedin.com/company/iba-computer-science-society/" // Replace with actual link
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: '#0077B5', '&:hover': { color: '#005582' } }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                href="https://www.instagram.com/css.iba/" // Replace with actual link
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  background: 'linear-gradient(45deg, #833ab4, #fd1d1d, #fcb045)',
                  color: 'white',
                  borderRadius: '50%',
                  '&:hover': { opacity: 0.8 },
                }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                href="https://discord.com/invite/your-discord-channel-link" // Replace with actual link
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: '#7289DA', '&:hover': { color: '#5865F2' } }}
              >
                <Image src="/Discord-Emblem.svg" alt="Discord" width={24} height={24} />
              </IconButton>
            </Box>
          </Grid>

        <Divider
          orientation="vertical"
          flexItem
          sx={{ bgcolor: 'white', display: { xs: 'none', md: 'block' } }}
        />

        {/* Contact Us */}
        <Grid size={{ xs: 10, sm: 3.5 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fcb045' }}>Contact Us</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              <a href="mailto:contact@css.com" style={{ color: '#D9EA12', textDecoration: 'none' }}>
                <span style={{ color: 'white' }}>Email:</span> contact@css.com
              </a>
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              <a href="tel:+1234567890" style={{ color: '#D9EA12', textDecoration: 'none' }}>
                <span style={{ color: 'white' }}>Phone:</span> +123-456-7890
              </a>
            </Typography>

        </Grid>

        <Divider
          orientation="vertical"
          flexItem
          sx={{ bgcolor: 'white', display: { xs: 'none', md: 'block' } }}
        />


        {/* Our Society section */}
        <Grid size={{ xs: 10, sm: 3.5 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#fcb045' }}>Our Society</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              <span style={{ color: '#D9EA12' }}>&copy; {new Date().getFullYear()}</span> Computer Science Society. <span style={{ color: '#D9EA12' }}>All rights reserved.</span>
            </Typography>
          
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
