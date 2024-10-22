import { Box, Typography, Grid2 } from '@mui/material';

const AboutUs = () => {
  return (
    <Box sx={{ p: 4, bgcolor: '#f5f5f5', borderRadius: 0, mt: 0, color: '#000000' }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        About Us
      </Typography>
      <Grid2 container spacing={4}>
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <Typography variant="h6">Who We Are</Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            We are the Computer Science Society, a group of passionate individuals committed to fostering a vibrant community for technology enthusiasts at IBA.
          </Typography>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <Typography variant="h6">What We Do</Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            We organize events, workshops, and hackathons to provide opportunities for learning, networking, and collaboration among students and professionals.
          </Typography>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <Typography variant="h6">Our Goals</Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Our goal is to empower students through knowledge sharing and skill development in the field of computer science and technology.
          </Typography>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <Typography variant="h6">Join Us</Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Become a part of our society to enhance your skills, meet like-minded individuals, and explore new opportunities in the tech world!
          </Typography>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default AboutUs;
