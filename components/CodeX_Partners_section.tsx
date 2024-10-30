import { Grid2, Box, Paper, Typography, Container } from '@mui/material';

const Partners = () => {
  return (
    <Container maxWidth="lg">
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
          backgroundColor: 'rgba(128, 0, 128, 0.5)', // Semi-transparent purple overlay
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
      {/* Title */}
      <Typography 
        variant="h2" 
        sx={{ 
          textAlign: 'center', 
          mb: 6, 
          color: 'white',
          position: 'relative',
          zIndex: 3,
        }}
      >
        Our Partners
      </Typography>

      {/* Sponsors Grid */}
      <Grid2 
        container 
        spacing={4} 
        justifyContent="center" 
        alignItems="center"
        sx={{ 
          position: 'relative',
          zIndex: 3,
        }}
      >
        {/* First Sponsor */}
        <Grid2 size={{ xs: 12, md: 6 }} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Paper
            elevation={3}
            sx={{
              width: '400px',
              height: '400px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'transparent',
              border: '2px solid gold',
              backdropFilter: 'blur(5px)',
              position: 'relative',
              overflow: 'hidden',
              '&:hover img': {
                transform: 'scale(1.1)',
              },
            }}
          >
            <img
              src="/Notion_partner.jpg" // Add your sponsor image here
              alt="Sponsor 1"
              style={{
                maxWidth: '80%',
                maxHeight: '80%',
                objectFit: 'contain',
                transition: 'transform 0.3s ease',
              }}
            />
          </Paper>
        </Grid2>

        {/* Second Sponsor */}
        <Grid2 size={{ xs: 12, md: 6 }} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Paper
            elevation={3}
            sx={{
              width: '400px',
              height: '400px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'transparent',
              border: '2px solid gold',
              backdropFilter: 'blur(5px)',
              position: 'relative',
              overflow: 'hidden',
              '&:hover img': {
                transform: 'scale(1.1)',
              },
            }}
          >
            <img
              src="/GDG_partner.jpg" // Add your sponsor image here
              alt="Sponsor 2"
              style={{
                maxWidth: '80%',
                maxHeight: '80%',
                objectFit: 'contain',
                transition: 'transform 0.3s ease',
              }}
            />
          </Paper>
        </Grid2>
      </Grid2>
    </Box>
    </Container>
  );
};

export default Partners;