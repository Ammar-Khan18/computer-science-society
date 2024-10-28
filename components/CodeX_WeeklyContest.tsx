"use client";
import React from 'react';
import { Box, Accordion, AccordionSummary, AccordionDetails, Typography, Container } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';

const WeeklyContests: React.FC = () => {
  const contests = [
    { week: "Week 1", image: "/Week 1 Code Clash.jpg", description: "Challenge your coding skills!" },
    /*{ week: "Week 2", image: "/path-to-week2-image.jpg", description: "A new set of problems awaits." },
    { week: "Week 3", image: "/path-to-week3-image.jpg", description: "Sharpen your algorithms." },*/
    // Add more weeks as needed
  ];

  return (
    <Container maxWidth="lg" sx={{ my: 5, backgroundColor: '#f0f0f0' }}>
      <Typography variant="h3" gutterBottom sx={{ textAlign: 'center' }}>
        Weekly Contests
      </Typography>
      {contests.map((contest, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index}-content`} id={`panel${index}-header`}>
            <Typography variant="h6">{contest.week}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
              <Image src={contest.image} alt={`${contest.week} image`} width={800} height={300} style={{ width: '100%', objectFit: 'cover' }} />
              <Typography>{contest.description}</Typography>
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default WeeklyContests;
