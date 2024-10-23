import { Box, Paper, Typography } from '@mui/material';

const AboutUs = () => {
  return (
    <Box sx={{ padding: '4rem 2rem', display: 'flex', justifyContent: 'center', backgroundColor: 'orange' }}>
      <Paper elevation={3} sx={{ padding: '2rem', maxWidth: '800px', textAlign: 'left' }}>
        {/* Section Title */}
        <Typography variant="h4" sx={{ mb: 3, textAlign: 'center' }}>
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
