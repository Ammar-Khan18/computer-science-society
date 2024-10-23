import { Box, Typography } from '@mui/material';

const WeeklyContests = () => {
  return (
    <Box sx={{ padding: '4rem 2rem', backgroundColor: '#f0f0f0' }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Weekly Contests
      </Typography>
      <Typography variant="body1">
        Participate in weekly coding contests to improve your problem-solving skills, learn new algorithms, and compete with your peers.
      </Typography>
    </Box>
  );
};

export default WeeklyContests;
