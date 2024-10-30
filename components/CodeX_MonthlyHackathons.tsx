import { useState } from 'react';
import { Grid2, Tabs, Tab, Box, Paper, Typography } from '@mui/material';

interface TabPanelProps {
  children: React.ReactNode;
  value: string;
  index: string;
}

const TabPanel = ({ children, value, index, ...other }: TabPanelProps) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`event-tabpanel-${index}`}
      aria-labelledby={`event-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
};

const EventsTabs = () => {
  const [value, setValue] = useState<string>('0');

  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography variant="h2" sx={{ textAlign: 'center', mb: 4 }}>
        Tabs Implementation
      </Typography>

      <Tabs 
        value={value} 
        onChange={(e, newValue: string) => setValue(newValue)}
        centered
        sx={{ mb: 4 }}
      >
        <Tab label="Weekly Contests" value="0" />
        <Tab label="Monthly Hackathons" value="1" />
      </Tabs>

      {/* Weekly Contests Panel */}
      <TabPanel value={value} index="0">
        <Grid2 container spacing={3}>
          {[1, 2, 3, 4].map((week) => (
            <Grid2 size={{ xs:12 }} key={week}>
              <Paper 
                sx={{ 
                  p: 3,
                  cursor: 'pointer',
                  transition: '0.3s',
                  '&:hover': {
                    bgcolor: 'action.hover',
                    transform: 'translateX(10px)'
                  }
                }}
              >
                <Typography variant="h6">Week {week}</Typography>
                <Typography>Contest details</Typography>
              </Paper>
            </Grid2>
          ))}
        </Grid2>
      </TabPanel>

      {/* Monthly Hackathons Panel */}
      <TabPanel value={value} index="1">
        <Grid2 container spacing={4}>
          {['January', 'February'].map((month) => (
            <Grid2 size={{ xs:12 }} key={month}>
              <Paper 
                sx={{ 
                  p: 4,
                  background: 'linear-gradient(to right, #00b4db, #0083b0)',
                  color: 'white'
                }}
              >
                <Typography variant="h5">{month} Hackathon</Typography>
                <Typography>Hackathon details</Typography>
              </Paper>
            </Grid2>
          ))}
        </Grid2>
      </TabPanel>
    </Box>
  );
};

export default EventsTabs;