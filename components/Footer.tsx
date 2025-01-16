import { Box, Typography, Grid, Stack, Link, Button } from '@mui/material';
import AnimatedBackground from './animated-background';
import AboutUs from './AboutUs_section';

interface FooterProps {
  pathname: string; // Pass the current path as a prop
}

const Footer: React.FC<FooterProps> = ({ pathname }) => {
  return (
    <div style={{ position: 'relative', overflow:'hidden' }}>
      {/* Gradient Background Overlay */}
      <Box
        sx={{
          position: 'absolute',
          zIndex: 1,
          top: 0,
          left: 0,
          height: '6rem',
          width: '100%',
          background: 'linear-gradient(to bottom, black, transparent)',
        }}
      />
      {/* Animated Background */}
      <Box
        sx={{
          position: 'absolute',
          zIndex: 0,
        }}
      >
        <AnimatedBackground />
      </Box>

      {/* Main Footer Content */}
      <Box
        sx={{
          color: '#fff',
          p: 4,
          pt: 10,
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Conditional AboutUs Section */}
        {pathname === '/' && (
          <Box
            sx={{
              color: '#000',
              borderRadius: '16px',
              mb: 4,
              textAlign: 'center',
            }}
          >
            <AboutUs />
          </Box>
        )}

        {/* Footer Grid */}
        <Grid container spacing={4}>
          {/* Get in Touch */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle1" sx={{ fontSize: '14px', fontWeight: 500, mb: 1 }}>
              Get in touch
            </Typography>
            <Typography variant="body2">business@pizzapizza.io</Typography>
            <Typography variant="body2">hello@pizzapizza.io</Typography>
          </Grid>

          {/* Connect */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle1" sx={{ fontSize: '14px', fontWeight: 500, mb: 1 }}>
              Connect
            </Typography>
            <Typography variant="body2">
              <Link href="#" sx={{ color: '#fff', textDecoration: 'none' }}>
                LinkedIn
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="#" sx={{ color: '#fff', textDecoration: 'none' }}>
                Instagram
              </Link>
            </Typography>
          </Grid>

          {/* Design Services */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle1" sx={{ fontSize: '14px', fontWeight: 500, mb: 1 }}>
              Design Services
            </Typography>
            <Typography variant="body2">Pizza Pizza Design Services GmbH</Typography>
            <Typography variant="body2">Dresdener Str. 22</Typography>
            <Typography variant="body2">10999 Berlin, Germany</Typography>
          </Grid>

          {/* Ventures */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle1" sx={{ fontSize: '14px', fontWeight: 500, mb: 1 }}>
              Ventures
            </Typography>
            <Typography variant="body2">Pizza Pizza Ventures GmbH</Typography>
            <Typography variant="body2">Dresdener Str. 22</Typography>
            <Typography variant="body2">10999 Berlin, Germany</Typography>
          </Grid>
        </Grid>

        {/* Footer Bottom Section */}
        <Box
          sx={{
            borderTop: '1px solid #333',
            mt: 4,
            pt: 2,
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}
        >
          <Typography variant="body2" sx={{ color: '#888' }}>
            Typeface by Dinamo
          </Typography>

          {/* Footer Links */}
          <Stack direction="row" spacing={1}>
            <Link href="#" sx={{ color: '#888', textDecoration: 'none', fontSize: '12px' }}>
              © 2022
            </Link>
            <Link href="#" sx={{ color: '#888', textDecoration: 'none', fontSize: '12px' }}>
              Data Privacy
            </Link>
            <Link href="#" sx={{ color: '#888', textDecoration: 'none', fontSize: '12px' }}>
              Imprint
            </Link>
          </Stack>

          {/* Footer Buttons */}
          <Stack direction="row" spacing={2}>
            {['Profile', 'Services', 'Work', 'Contact'].map((label) => (
              <Button
                key={label}
                variant="outlined"
                sx={{
                  color: '#fff',
                  borderColor: '#fff',
                  borderRadius: '16px',
                  textTransform: 'none',
                  fontSize: '14px',
                  px: 2,
                  '&:hover': {
                    backgroundColor: '#fff',
                    color: '#000',
                  },
                }}
              >
                {label}
              </Button>
            ))}
          </Stack>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
