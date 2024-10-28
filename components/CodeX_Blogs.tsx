import { Box, Typography } from '@mui/material';

const Blogs = () => {
  return (
    <Box sx={{ padding: '4rem 2rem', backgroundColor: '#c0c0c0' }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Blogs
      </Typography>
      <Typography variant="body1">
        Read the latest insights and technical articles from our community members on a variety of coding and tech topics.
      </Typography>
    </Box>
  );
};

export default Blogs;
