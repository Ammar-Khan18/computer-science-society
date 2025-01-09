import React from 'react';
import {
  Box
} from '@mui/material';
import ProBattle_Event_section from '@/components/ProBattle_Event_section';
import ProBattle_Info from '@/components/ProBattle_Info';
import ProBattle_Register from '@/components/ProBattle_Register';
import ProBattle_Intro from '@/components/ProBattle_Intro';

const ProBattle: React.FC = () => {
  return (
    <Box sx={{ position: 'relative', minHeight: '100vh' }}>

      {/* Main Content */}
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        {/* Event Section */}
        <ProBattle_Event_section />

        {/* Intro Section */}
        <ProBattle_Intro />
          
        {/* Info Section */}
        <ProBattle_Info />

        {/* Register Section */}
        <ProBattle_Register />
      </Box>
      
    </Box>
  );
};

export default ProBattle;
