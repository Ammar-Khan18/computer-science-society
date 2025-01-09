import { Box, Typography, IconButton, Divider, Stack } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Image from 'next/image';
import Grid from '@mui/material/Grid2';
import { Avatar, Link, Chip } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: '#ECEBDE',
        color: 'white',
        p: 4,
        mt: 0,
        textAlign: 'center',
      }}
    >
      <Grid container spacing={2}>
        
          <Grid size={{ xs: 10, sm: 3.5 }} sx={{ mx: 'auto' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#000' }}>Connect With Us</Typography>
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
          sx={{ bgcolor: 'black', display: { xs: 'none', md: 'block' } }}
        />

        <Divider 
          orientation='horizontal'
          flexItem
          sx={{ bgcolor: 'black', display: { xs: 'block', md: 'none' }, width: '100%', mx: 'auto' }}
        />

        {/* Contact Us */}
        <Grid size={{ xs: 10, sm: 3.5 }} sx={{ mx: 'auto' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#000' }}>Contact Us</Typography>

            <Stack direction="column" spacing={1} sx={{ mt: 1 }}>
              <Link href="mailto:contact@css.com" sx={{ textDecoration: 'none' }}>
                <Chip 
                  icon={<EmailIcon />}
                  label="contact@css.com"
                  variant="outlined"
                  sx={{ bgcolor: '#F3DEBA', color: 'black', fontWeight: 'normal' }}
                />
              </Link>
              
              <Link href="tel:+1234567890" sx={{ textDecoration: 'none' }}>
                <Chip 
                  icon={<CallIcon />}
                  label="+123 - 456 - 7890"
                  variant="outlined"
                  sx={{ bgcolor: '#F3DEBA', color: 'black', fontWeight: 'normal' }}
                />
              </Link>
            </Stack>

        </Grid>

        <Divider
          orientation="vertical"
          flexItem
          sx={{ bgcolor: 'black', display: { xs: 'none', md: 'block' } }}
        />

        <Divider 
          orientation='horizontal'
          flexItem
          sx={{ bgcolor: 'black', display: { xs: 'block', md: 'none' }, width: '100%', mx: 'auto' }}
        />


        {/* Our Society section */}
        <Grid size={{ xs: 10, sm: 3.5 }} sx={{ mx: 'auto' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#000' }}>Our Society</Typography>
            <Typography variant="body2" sx={{ mt: 1, color: '#000' }}>
              <span style={{ color: '#D81B60' }}>&copy; {new Date().getFullYear()}</span> Computer Science Society. <span style={{ color: '#D81B60' }}>All rights reserved.</span>
            </Typography>
          
        </Grid>
      </Grid>
        
      
      <Box
        sx={{
          mt: 9,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="body2" sx={{ color: '#000' }}>
          In Collaboration with{' '}
          <Link href="https://www.linkedin.com/in/abdullahtariq78/" target="_blank" rel="noopener noreferrer" underline='hover'>
            Abdullah Tariq
          </Link>
          ,{' '}
          <Link href="https://kabeer.kabeers.network" target="_blank" rel="noopener noreferrer" underline='hover'>
            Kabeer
          </Link>
          , and{' '}
          <Link href="#" target="_blank" rel="noopener noreferrer" underline='hover'>
            Ammar
          </Link>
        </Typography>

      </Box>

    </Box>
  );
};

export default Footer;
