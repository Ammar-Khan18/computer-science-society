import { Grid2, Card, CardContent, Typography, Box, Grow } from '@mui/material';

const EventsSection = () => {
  return (
    <Box sx={{ padding: '2rem' }}>
      {/* Pixel Art Logo with Animation */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h2" className="pixel-font">
          Card Grid Layout
        </Typography>
        <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
          Join us in exploring the world of coding with weekly contests and challenges!
        </Typography>
      </Box>

      {/* Weekly Contests */}
      <Typography variant="h3" sx={{ mb: 3 }}>Weekly Contests</Typography>
      <Grid2 container spacing={3}>
        {[1, 2, 3, 4].map((week) => (
          <Grid2 size={{ xs: 12, md: 6, lg: 3 }} key={week}>
            <Grow in timeout={500 * week}>
              <Card 
                sx={{ 
                  height: '100%',
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 6
                  }
                }}
              >
                <CardContent>
                  <Typography variant="h5">Week {week}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Challenge details and submissions
                  </Typography>
                </CardContent>
              </Card>
            </Grow>
          </Grid2>
        ))}
      </Grid2>

      {/* Monthly Hackathons */}
      <Typography variant="h3" sx={{ mt: 6, mb: 3 }}>Monthly Hackathons</Typography>
      <Grid2 container spacing={4}>
        {['January', 'February'].map((month) => (
          <Grid2 size={{ xs: 12, md: 6 }} key={month}>
            <Card 
              sx={{ 
                height: '100%',
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                color: 'white',
                transition: '0.3s',
                '&:hover': {
                  transform: 'scale(1.02)',
                }
              }}
            >
              <CardContent>
                <Typography variant="h4">{month}</Typography>
                <Typography variant="body1">
                  Hackathon theme and details
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default EventsSection;