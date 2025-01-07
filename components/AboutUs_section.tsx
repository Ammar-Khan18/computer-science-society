import { Box, Card, CardContent, Container, Grid, Paper, Typography } from '@mui/material';
// Deploy
const AboutUs: React.FC = () => {
  return (
    <div style={{
      background: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(121,9,118,1))',
      padding: '4rem 0'
    }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box textAlign="left" marginBottom={6}>

          <Typography variant="h1" sx={{ fontSize: { xs: '3rem', sm: '4rem' }, fontWeight: 'bold', color: 'white', lineHeight: 1.2 }}>
            <span style={{ WebkitTextStroke: '1px white', color: 'transparent' }}>More on us</span>
          </Typography>
          <Typography variant="body1" sx={{ color: 'white'}}>
            Learn more about who we are, what we do, and the goals that drive our community forward.
          </Typography>
        </Box>

        {/* Content */}
        <Grid container spacing={4}>
          {/* Who We Are */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 3,
                backgroundColor: '#FFFFFF',
                height: '100%',
              }}
            >
              <CardContent>
                <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', color: '#D81B60', marginBottom: 2 }}>
                  Who We Are
                </Typography>
                <Typography variant="body2" sx={{ color: '#4B5563', lineHeight: 1.8 }}>
                  We are the Computer Science Society, a group of passionate students dedicated to fostering a
                  collaborative environment for those interested in technology, coding, and innovation. Our members come
                  from diverse backgrounds, but we are united by our shared love for computer science.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* What We Do */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 3,
                backgroundColor: '#FFFFFF',
                height: '100%',
              }}
            >
              <CardContent>
                <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', color: '#D81B60', marginBottom: 2 }}>
                  What We Do
                </Typography>
                <Typography variant="body2" sx={{ color: '#4B5563', lineHeight: 1.8 }}>
                  We organize events such as CodeX and ProBattle, host workshops, and offer learning resources to
                  enhance members technical skills. Whether its weekly coding contests, monthly hackathons, or research
                  programs, we provide a platform for students to grow and collaborate.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Our Goals */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 3,
                backgroundColor: '#FFFFFF',
                height: '100%',
              }}
            >
              <CardContent>
                <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', color: '#D81B60', marginBottom: 2 }}>
                  Our Goals
                </Typography>
                <Typography variant="body2" sx={{ color: '#4B5563', lineHeight: 1.8 }}>
                  Our goal is to empower students to become proficient in coding, contribute to open-source projects,
                  and prepare for a successful career in technology. We aim to bridge the gap between theory and
                  practical application, helping members gain real-world experience.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AboutUs;
