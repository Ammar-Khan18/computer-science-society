"use client";
import { Box } from '@mui/material';
import ArenaResearchProgram from '@/components/CodeX_ArenaResearchProgram';
import Blogs from '@/components/CodeX_Blogs';
import CodeX_Hero_section from '@/components/CodeX_Hero_section';
import CodeX_Partners_section from '@/components/CodeX_Partners_section';
import CodeX_HackathonsAndContests from '@/components/CodeX_HackathonsAndContests';

const CodeXPage = () => {
  return (
    <Box sx={{ position: 'relative', minHeight: '100vh'}}>
      {/* Background Image */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundImage: 'url(/gradient_bg_hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: -2,
        }}
      />
      {/* Background blur effect - top */}
      <Box
        sx={{
          position: 'fixed',
          top: '-10%',
          left: '50%',
          width: { xs: '36.125rem', sm: '72.1875rem' },
          transform: 'translateX(-50%) rotate(30deg)',
          aspectRatio: '1155 / 678',
          background:
            'linear-gradient(135deg, rgba(255, 128, 181, 0.3), rgba(144, 137, 252, 0.3))',
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          zIndex: -1,
          filter: 'blur(40px)',
        }}
      />

      {/* Main Content */}
      <Box sx={{ position: 'relative', zIndex: 1 }}>
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
    </Box>
  );
};

export default CodeXPage;
