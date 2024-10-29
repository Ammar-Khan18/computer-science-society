import { Box, Paper, Typography } from '@mui/material';

const AboutUs = () => {
  return (
    <Box
      sx={{
        padding: '4rem 2rem',
        display: 'flex',
        justifyContent: 'center',
        backgroundImage: 'url(/About_us_bg-30-Oct-2024-12-06-AM-3807.jpg)', // Add your background image here
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative', // Position relative to layer the overlay and content
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(128, 0, 128, 0.5)', // Semi-transparent purple overlay
          zIndex: 1, // Behind content, but above background image
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/paper_texture_1.jpg)', // Texture overlay image
          backgroundSize: 'cover', // Make sure the texture covers the area
          opacity: 0.2, // Adjust opacity for desired effect
          zIndex: 1, // Texture layer above purple overlay but below content
        },
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: '2rem',
          maxWidth: '800px',
          textAlign: 'center',
          opacity: 0.9,
          backgroundColor: 'rgba(0, 0, 0, 0.8)', // Black with semi-transparency
          zIndex: 3, // Content layer
          color: 'white',
        }}
      >
        {/* Section Title */}
        <Typography variant="h4" sx={{ mb: 3 }}>
          About Us
        </Typography>

        {/* Who We Are */}
        <Typography variant="h5" sx={{ mb: 1 }}>
          Who We Are
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
        We are the Computer Science Society, a group of passionate students dedicated to fostering a collaborative environment for those interested in technology, coding, and innovation. Our members come from diverse backgrounds, but we are united by our shared love for computer science.
        </Typography>

        {/* What We Do */}
        <Typography variant="h5" sx={{ mb: 1 }}>
          What We Do
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
        We organize events such as CodeX and ProBattle, host workshops, and offer learning resources to enhance members’ technical skills. Whether it's weekly coding contests, monthly hackathons, or research programs, we provide a platform for students to grow and collaborate.
        </Typography>

        {/* Our Goals */}
        <Typography variant="h5" sx={{ mb: 1 }}>
          Our Goals
        </Typography>
        <Typography variant="body1">
        Our goal is to empower students to become proficient in coding, contribute to open-source projects, and prepare for a successful career in technology. We aim to bridge the gap between theory and practical application, helping members gain real-world experience.
        </Typography>
      </Paper>
    </Box>
  );
};

export default AboutUs;
