import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
  useMediaQuery,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LabelSharpIcon from '@mui/icons-material/LabelSharp';
import { useTheme } from '@mui/material/styles';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  timelineItemClasses,
} from '@mui/lab';

const CodeX_HackathonsAndContests = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  const week = [1, 2, 3, 4];
  const month = ['January', 'February'];

  const sampleDetails = {
    contestDetails: 'A thrilling coding challenge focused on algorithms.',
    timings: '2:00 PM - 5:00 PM',
    days: 'Saturday',
    winners: 'John Doe, Jane Smith',
    topics: ['Algorithms', 'Data Structures', 'Problem Solving'],
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ padding: '2rem' }}>
        <Typography variant={isMdUp ? 'h2' : 'h5'} sx={{ textAlign: 'center', mb: 6, fontWeight: 600 }}>
          Hackathons and Contests
        </Typography>

        <Timeline
          position={isMdUp ? 'alternate' : 'right'}
          sx={{
            ...(isMdUp
              ? {}
              : {
                  [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                  },
                }),
          }}
        >
          {/* Weekly Contests */}
          {week.map((weekNumber) => (
            <TimelineItem key={`week-${weekNumber}`}>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Card
                  sx={{
                    bgcolor: '#F5EBEB',
                    width: { xs: '100%', sm: '80%', md: '60%' },
                    mx: 'auto',
                    mt: 4,
                    borderRadius: '8px',
                    boxShadow: "4px 6px #1B1A55",
                    transition: "0.3s",
                  }}
                >

                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <Typography variant="h6" sx={{ borderBottom: '1px solid #000', display: 'inline-block', mb: 2 }}>
                        Week {weekNumber}
                      </Typography>
                    </Box>
                    <Accordion sx={{ mt: 2, bgcolor: '#CDC1FF' }}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Details</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography sx={{ alignItems: 'left', textAlign: 'left' }}><b>Contest Details:</b> {sampleDetails.contestDetails}</Typography>
                        <Divider sx={{ my: 1 }} />
                        <Typography sx={{ alignItems: 'left', textAlign: 'left' }}><b>Timings:</b> {sampleDetails.timings}</Typography>
                        <Divider sx={{ my: 1 }} />
                        <Typography sx={{ alignItems: 'left', textAlign: 'left' }}><b>Days:</b> {sampleDetails.days}</Typography>
                        <Divider sx={{ my: 1 }} />
                        <Typography sx={{ alignItems: 'left', textAlign: 'left' }}><b>Winners:</b> {sampleDetails.winners}</Typography>
                        <Divider sx={{ my: 1 }} />
                        <Typography sx={{ alignItems: 'left', textAlign: 'left' }}><b>Topics:</b>
                        {sampleDetails.topics.map((topic) => (
                          <Box key={topic} sx={{ display: 'flex', alignItems: 'center' }}>
                            <LabelSharpIcon sx={{ fontSize: '1rem', mr: 1 }} />
                            <Typography>{topic}</Typography>
                          </Box>
                        ))}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </CardContent>
                </Card>
              </TimelineContent>
            </TimelineItem>
          ))}

          {/* Monthly Hackathons */}
          {month.map((monthName) => (
            <TimelineItem key={`month-${monthName}`}>
              <TimelineSeparator>
                <TimelineDot color="secondary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Card
                  sx={{
                    bgcolor: '#F5EBEB',
                    width: { xs: '100%', sm: '80%', md: '60%' },
                    mx: 'auto',
                    mt: 4,
                    borderRadius: '8px',
                    boxShadow: "4px 6px #1B1A55",
                    transition: "0.3s",
                  }}
                >
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <Typography variant="h6" sx={{ borderBottom: '1px solid #000', display: 'inline-block', mb: 2 }}>
                        {monthName}
                      </Typography>
                    </Box>
                    <Accordion sx={{ mt: 2, bgcolor: '#FFC1C1' }}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Details</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography sx={{ alignItems: 'left', textAlign: 'left' }}><b>Contest Details:</b> {sampleDetails.contestDetails}</Typography>
                        <Divider sx={{ my: 1 }} />
                        <Typography sx={{ alignItems: 'left', textAlign: 'left' }}><b>Timings:</b> {sampleDetails.timings}</Typography>
                        <Divider sx={{ my: 1 }} />
                        <Typography sx={{ alignItems: 'left', textAlign: 'left' }}><b>Days:</b> {sampleDetails.days}</Typography>
                        <Divider sx={{ my: 1 }} />
                        <Typography sx={{ alignItems: 'left', textAlign: 'left' }}><b>Winners:</b> {sampleDetails.winners}</Typography>
                        <Divider sx={{ my: 1 }} />
                        <Typography sx={{ alignItems: 'left', textAlign: 'left' }}><b>Topics:</b>  
                        {sampleDetails.topics.map((topic) => (
                          <Box key={topic} sx={{ display: 'flex', alignItems: 'center' }}>
                            <LabelSharpIcon sx={{ fontSize: '1rem', mr: 1 }} />
                            <Typography>{topic}</Typography>
                          </Box>
                        ))}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
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
