import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { Box, Card, CardContent, Typography } from '@mui/material';
// This is the merged weekly and monthly sections
const CodeX_HackathonsAndContests = () => {
  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography variant="h2" sx={{ textAlign: 'center', mb: 6 }}>
        Timeline Implementation
      </Typography>

      <Timeline position="alternate">
        {/* Weekly Contests */}
        {[1, 2, 3, 4].map((week) => (
          <TimelineItem key={week}>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Card>
                <CardContent>
                  <Typography variant="h6">Week {week}</Typography>
                  <Typography>Contest details</Typography>
                </CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>
        ))}

        {/* Monthly Hackathons */}
        {['January', 'February'].map((month) => (
          <TimelineItem key={month}>
            <TimelineSeparator>
              <TimelineDot color="secondary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Card sx={{ bgcolor: 'secondary.light' }}>
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
  );
};

export default CodeX_HackathonsAndContests;