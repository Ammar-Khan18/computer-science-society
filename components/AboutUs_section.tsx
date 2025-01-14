import { Box, Container, Paper, Typography } from '@mui/material';

const AboutUs: React.FC = () => {
  return (
    <Box
      id="about-us-section"
      sx={{
        width: '100%', // Extend background to full viewport width
        position: 'relative',
        backgroundSize: 'cover', backgroundImage: 'url(/About_us_bg-30-Oct-2024-12-06-AM-3807.jpg)',

        backgroundPosition: 'center',
        // backgroundAttachment:'fixed',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center', // Center content vertically if needed
        justifyContent: 'center', // Center content horizontally if needed
        textAlign: 'center', // Center text
        minHeight: '100%',

        // Black overlay to darken the image
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255,255,255, 0.8)', // Black overlay with transparency
          zIndex: 1,
        },

        // Purple overlay with grain effect
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          // backgroundColor: 'rgb(102, 37, 102)', // Purple overlay with transparency
          backgroundColor: 'white', // Purple overlay with transparency
          zIndex: 2,
          opacity: 0.5,
          // backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.25' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300%25' height='300%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: 'cover', // Ensures the grain effect covers the whole area
        },
      }}
    >
      {/* Content Container */}
      <Container maxWidth="lg" sx={{ zIndex: 3 }}>
        <Paper
          elevation={0}
          sx={{
            padding: '2rem',
            maxWidth: '800px',
            textAlign: 'left',
            opacity: 0.9,
            backgroundColor: 'rgba(0, 0, 0, 0)', // Transparent background for content Paper
            color: 'black',
            position: 'relative',
          }}
        >
          <Box textAlign="left" marginBottom={6}>
            <Typography variant="h1" sx={{ fontSize: { xs: '3rem', sm: '4rem' }, fontWeight: 'bold', color: 'black', lineHeight: 1.2 }}>
              <span style={{ WebkitTextStroke: '1px black', color: 'transparent' }}>About CSS</span>
            </Typography>
            <Typography variant="body1" sx={{ color: 'black' }}>
              Learn more about who we are, what we do, and the goals that drive our community forward.
            </Typography>
          </Box>

          {/* Who We Are */}
          <Typography variant="h5" sx={{ mb: 1 }}>
            Who We Are
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, fontSize: '1.25rem' }}>
            We are the Computer Science Society, a group of passionate students dedicated to fostering a collaborative environment for those interested in technology, coding, and innovation. Our members come from diverse backgrounds, but we are united by our shared love for computer science.
          </Typography>

          {/* adding a plain line, a divider */}
          {/* <Box sx={{ borderBottom: 1, borderColor: 'white', mb: 3 }} /> */}

          {/* What We Do */}
          <Typography variant="h5" sx={{ mb: 1 }}>
            What We Do
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, fontSize: '1.25rem' }}>
            We organize events such as CodeX and ProBattle, host workshops, and offer learning resources to enhance members&apos; technical skills. Whether it&apos;s weekly coding contests, monthly hackathons, or research programs, we provide a platform for students to grow and collaborate.
          </Typography>

          {/* adding a plain line, a divider */}
          {/* <Box sx={{ borderBottom: 1, borderColor: 'white', mb: 3 }} /> */}

          {/* Our Goals */}
          <Typography variant="h5" sx={{ mb: 1 }}>
            Our Goals
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, fontSize: '1.25rem' }}>
            Our goal is to empower students to become proficient in coding, contribute to open-source projects, and prepare for a successful career in technology. We aim to bridge the gap between theory and practical application, helping members gain real-world experience.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default AboutUs;
