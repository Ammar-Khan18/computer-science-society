"use client";
import { Box, Typography } from '@mui/material';
import WeeklyContests from '@/components/WeeklyContest';
import MonthlyHackathons from '@/components/MonthlyHackathons';
import ArenaResearchProgram from '@/components/ArenaResearchProgram';
import Blogs from '@/components/codexBlogs';

const CodeXPage = () => {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#fdd835',color:'black' }}>
      {/* Title Section */}
      <Typography variant="h2" sx={{ textAlign: 'center', padding: '2rem 0' }}>
        CodeX Event
      </Typography>

      {/* Weekly Contests Section */}
      <WeeklyContests />

      {/* Monthly Hackathons Section */}
      <MonthlyHackathons />

      {/* Arena Research Program Section */}
      <ArenaResearchProgram />

      {/* Blogs Section */}
      <Blogs />
    </Box>
  );
};

export default CodeXPage;
