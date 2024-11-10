import { Box, Card, CardContent, Container, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, timelineItemClasses } from '@mui/lab';

const CodeX_HackathonsAndContests = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  const week = [1, 2, 3, 4];
  const month = ['January', 'February'];

  return (
    <Container maxWidth="lg">
      <Box sx={{ padding: '2rem' }}>
        <Typography variant={isMdUp ? 'h2' : 'h5'} sx={{ textAlign: 'center', mb: 6, fontWeight: 600 }}>
          Hackathons and Contests
        </Typography>

        <Timeline position={isMdUp ? 'alternate' : 'right'} 
          sx={{
            ...(isMdUp ? {} : {
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }),
          }}
          >
          {/* Weekly Contests */}
          {week.map((week) => (
            <TimelineItem key={week}>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Card sx={{ bgcolor: 'rgba(255, 255, 255, 0.8)', width: { xs: '100%', sm: '80%', md: '60%' }, mx: 'auto', mt: 4 }}>
                  <CardContent>
                    <Typography variant="h6">Week {week}</Typography>
                    <Typography>Contest details</Typography>
                  </CardContent>
                </Card>
              </TimelineContent>
            </TimelineItem>
          ))}

          {/* Monthly Hackathons */}
          {month.map((month) => (
            <TimelineItem key={month}>
              <TimelineSeparator>
                <TimelineDot color='secondary' />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Card sx={{ bgcolor: 'rgba(255, 255, 255, 0.8)', width: { xs: '100%', sm: '80%', md: '60%' }, mx: 'auto', mt: 4 }}>
                  <CardContent>
                    <Typography variant="h6">{month} Hackathon</Typography>
                    <Typography>Hackathon details</Typography>
                  </CardContent>
                </Card>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
    </Container>
  );
};

export default CodeX_HackathonsAndContests;
