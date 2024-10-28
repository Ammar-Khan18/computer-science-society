"use client";
import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Container } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid2 from '@mui/material/Grid2'; // Correct Grid2 import

const MonthlySection: React.FC = () => {
  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: '#f0f0f0', // Example background color for Monthly section
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" gutterBottom sx={{ textAlign: 'center' }}>
          Monthly Hackathons
        </Typography>

        <Grid2 container spacing={4}>
          <Grid2 size={{ xs: 12 }}>
            {/* Accordion items for each monthly event */}
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">Hackathon - January</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  This January, participate in our exciting hackathon focusing on innovative problem-solving. Join fellow tech enthusiasts to build solutions.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">Hackathon - February</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  February’s hackathon invites participants to challenge themselves with advanced projects. Work on real-world applications with peers.
                </Typography>
              </AccordionDetails>
            </Accordion>

            {/* Add more Accordions as needed for each monthly event */}
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  );
};

export default MonthlySection;
