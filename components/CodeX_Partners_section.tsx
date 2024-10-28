import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import Grid2 from '@mui/material/Grid2';
import Image from 'next/image';

const OurPartnersSection: React.FC = () => {
  return (
    <Box sx={{ py: 8, px: 3, backgroundColor: '#f5f5f5' }}>
      <Typography variant="h2" component="h2" align="center" gutterBottom>
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
            elevation={2}
            sx={{
              padding: 2,
              width: '100%',
              maxWidth: '300px',
              textAlign: 'center',
              backgroundColor: '#f7f6f2',
            }}
          >
            {/* Placeholder for Notion Image */}
            <Box
              component="img"
              src="/Notion_partner.jpg"
              alt="Notion Logo"
              sx={{
                width: '250px', // Adjust width as needed
                height: 'auto',
                marginBottom: 0,
              }}
            />
            {/*<Image src="/Notion_partner.jpg" alt='Notion Logo' width={100} height={100} />*/}
          </Paper>
        </Grid2>

        {/* Google Developers Group Partner Box */}
        <Grid2 size={{ xs: 12, sm: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Paper
            elevation={2}
            sx={{
              padding: 4,
              width: '100%',
              maxWidth: '500px',
              textAlign: 'center',
              backgroundColor: '#ffffff',
            }}
          >
            {/* Placeholder for Google Developers Group Image */}
            <Box
              component="img"
              src="/GDG_partner.jpg"
              alt="Google Developers Group Logo"
              sx={{
                width: '290px', // Adjust width as needed
                height: 'auto',
                marginBottom: 0,
              }}
            />
          </Paper>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default OurPartnersSection;
