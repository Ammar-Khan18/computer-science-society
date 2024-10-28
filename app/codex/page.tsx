"use client";
import { Box, Typography } from '@mui/material';
import WeeklyContests from '@/components/WeeklyContest';
import MonthlyHackathons from '@/components/MonthlyHackathons';
import ArenaResearchProgram from '@/components/ArenaResearchProgram';
import Blogs from '@/components/codexBlogs';
import CodeX_Hero_section from '@/components/CodeX_Hero_section';

const CodeXPage = () => {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#fdd835',color:'black' }}>
      {/* Title Section */}
      <CodeX_Hero_section />

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
