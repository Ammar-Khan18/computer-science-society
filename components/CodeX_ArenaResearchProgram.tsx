import { Box, Container, Typography } from '@mui/material';

const ArenaResearchProgram = () => {
  return (
    <Container maxWidth="lg">
    <Box sx={{ padding: '4rem 2rem', backgroundColor: '#d0d0d0' }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Arena Research Program
      </Typography>
      <Typography variant="body1">
        Engage with our Arena Research Program where students and professionals collaborate on groundbreaking tech projects.
      </Typography>
    </Box>
    </Container>
  );
};

export default ArenaResearchProgram;
