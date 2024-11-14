
'use client';
import React from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import LockIcon from '@mui/icons-material/Lock';
import StorageIcon from '@mui/icons-material/Storage';
import { Box, Typography, Container, IconButton } from '@mui/material';
import Grid from '@mui/material/Grid2';
import coding from '../public/coding.jpg';

interface Feature {
  name: string;
  description: string;
  icon: React.ElementType;
}

const features: Feature[] = [
  {
    name: 'feature 1',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudUploadIcon, // feature 1 icon
  },
  {
    name: 'feature 2',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockIcon, // feature 2 icon
  },
  {
    name: 'feature 3',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: StorageIcon, // feature 3 icon
  },
];

export default function ArenaResearchProgram() {
  return (
    <Box bgcolor="inherit" py={{ xs: 8, sm: 10 }} overflow="hidden">
      <Container maxWidth="lg">
        <Grid container spacing={5} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Box>
              <Typography variant="h5" color="white" sx={{ borderBottom: 2, borderColor: 'primary.main', display: 'inline-block' }}>
                Our Features
              </Typography>
              <Typography variant="h3" color="textPrimary" fontWeight="bold" gutterBottom>
                Arena Research Program
              </Typography>
              <Typography variant="body1" color="white" gutterBottom>
                Engage with our Arena Research Program where students and professionals collaborate on groundbreaking tech projects.
              </Typography>
              <Box component="dl" mt={3}>
                {features.map((feature) => (
                  <Box key={feature.name} display="flex" alignItems="flex-start" mb={3}>
                    <IconButton edge="start" color="primary" aria-label={feature.name}>
                      <feature.icon fontSize="small" />
                    </IconButton>
                    <Box ml={2}>
                      <Typography variant="h6" color="textPrimary" fontWeight="bold">
                        {feature.name}
                      </Typography>
                      <Typography variant="body2" color="white">
                        {feature.description}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
            <Box
              component="img"
              alt="Product screenshot"
              src={coding.src}
              // src="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png" // replace with image url
              sx={{
                width: '100%',
                maxWidth: { xs: '100%', md: '48rem' },
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

