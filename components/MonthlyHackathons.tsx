import { Box, Typography } from '@mui/material';

const MonthlyHackathons = () => {
  return (
    <Box sx={{ padding: '4rem 2rem', backgroundColor: '#e0e0e0' }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Monthly Hackathons
      </Typography>
      <Typography variant="body1">
        Our monthly hackathons offer an opportunity to work on real-world challenges and collaborate with other developers.
      </Typography>
    </Box>
  );
};

export default MonthlyHackathons;
