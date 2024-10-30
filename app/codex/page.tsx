"use client";
import { Box } from '@mui/material';
import ArenaResearchProgram from '@/components/CodeX_ArenaResearchProgram';
import Blogs from '@/components/CodeX_Blogs';
import CodeX_Hero_section from '@/components/CodeX_Hero_section';
import CodeX_Partners_section from '@/components/CodeX_Partners_section';
import CodeX_HackathonsAndContests from '@/components/CodeX_HackathonsAndContests';

const CodeXPage = () => {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f0f0f0',color:'black' }}>
      {/* Hero Section */}
      <CodeX_Hero_section />

      {/* Hackathons and Contests Section */}
      <CodeX_HackathonsAndContests />

      {/* Partners Section */}
      <CodeX_Partners_section />

      {/* Arena Research Program Section */}
      <ArenaResearchProgram />

      {/* Blogs Section */}
      <Blogs />
    </Box>
  );
};

export default CodeXPage;
