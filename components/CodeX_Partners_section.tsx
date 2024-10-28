import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import Grid2 from '@mui/material/Grid2';

const OurPartnersSection: React.FC = () => {
  return (
    <Box sx={{ py: 8, px: 3, backgroundColor: '#f5f5f5' }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Our Partners
      </Typography>

      <Grid2
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        sx={{ pt: 4 }}
      >
        {/* Notion Partner Box */}
        <Grid2 size={{ xs: 12, sm: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Paper
            elevation={3}
            sx={{
              padding: 4,
              width: '100%',
              maxWidth: '300px',
              textAlign: 'center',
              backgroundColor: '#FFFAE6',
            }}
          >
            {/* Placeholder for Notion Image */}
            <Box
              component="img"
              src="/placeholder-notion.png"
              alt="Notion Logo"
              sx={{
                width: '100px', // Adjust width as needed
                height: 'auto',
                marginBottom: 2,
              }}
            />
            <Typography variant="h6" component="h3">
              Notion
            </Typography>
          </Paper>
        </Grid2>

        {/* Google Developers Group Partner Box */}
        <Grid2 size={{ xs: 12, sm: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Paper
            elevation={3}
            sx={{
              padding: 4,
              width: '100%',
              maxWidth: '300px',
              textAlign: 'center',
              backgroundColor: '#E6F2FF',
            }}
          >
            {/* Placeholder for Google Developers Group Image */}
            <Box
              component="img"
              src="/placeholder-gdg.png"
              alt="Google Developers Group Logo"
              sx={{
                width: '100px', // Adjust width as needed
                height: 'auto',
                marginBottom: 2,
              }}
            />
            <Typography variant="h6" component="h3">
              Google Developers Group
            </Typography>
          </Paper>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default OurPartnersSection;
