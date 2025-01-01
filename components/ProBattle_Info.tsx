"use client";
import React from "react";
import { Box, Typography, Container, Card, CardContent, Link } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';
import { events, newevents, robotics, highschool } from "./constants";

// EventCard Component
const EventCard: React.FC<{ event: any }> = ({ event }) => (
  <Grid size={{ xs: 12, sm: 6, md: 4 }} key={event.id}>
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        borderRadius: 2,
        boxShadow: "4px 6px #1B1A55",
        transition: "0.3s",
        overflow: "visible",
      }}
    >
      <Box
        sx={{
          position: "relative",
          top: -16, // Half of the circle height
          left: "45%",
          width: 32, // Circle width
          height: 32, // Circle height
          backgroundColor: "primary.main",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontWeight: "bold",
          boxShadow: 1,
        }}
      >
        {event.id}
      </Box>

      {/* Card Content */}
      <CardContent sx={{ flexGrow: 1 }}>
        {/* Title */}
        <Typography
          gutterBottom
          variant="h5"
          component="h3"
          sx={{
            fontWeight: "bold",
            mb: 2,
            color: "primary.main",
          }}
        >
          {event.title}
        </Typography>

        {/* Details */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2 }}
        >
          {event.details}
        </Typography>

        {/* Number of Members */}
        <Box display="flex" alignItems="center" gap={1} mb={2}>
          <Chip icon={<FaceIcon />} label={`Members: ${event.members}`} variant="outlined" />
        </Box>

        {/* Link */}
        <Link href={event.link} color="primary" underline="hover" variant="button">
          Learn More
        </Link>
      </CardContent>
    </Card>
  </Grid>
);

const ProBattleInfo: React.FC = () => {
  
  

    return (
        <Container maxWidth="lg">
            <Box sx={{ mt: 4, mb: 10, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                <Typography variant="h2" align="center" sx={{ color: '#D81B60', fontSize: { xs: '2.2rem', md: '3rem', lg: '4rem' }, mb: 4, borderBottom: '2px solid', borderColor: 'primary.secondary', display: 'inline-block' }}>
                ProBattle Events
                </Typography>
            </Box>

            <Grid container spacing={8} sx={{ mb: 10 }}>
                {events.map((event) => (
                <EventCard event={event} key={event.id} />
                ))}
            </Grid>

            <Box sx={{ mt: 4, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                <Typography variant="h2" align="center" sx={{ color: '#D81B60', fontSize: { xs: '1.7rem', md: '3rem', lg: '3.5rem' }, mb: 10, borderBottom: '2px solid', borderColor: 'primary.secondary', display: 'inline-block' }}>
                New Additions
                </Typography>
            </Box>

            <Grid container spacing={8} sx={{ mb: 10 }}>
                {newevents.map((event) => (
                <EventCard event={event} key={event.id} />
                ))}
            </Grid>

            <Box sx={{ mt: 4, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                <Typography variant="h2" align="center" sx={{ color: '#D81B60', fontSize: { xs: '1.7rem', md: '3rem', lg: '3.5rem' }, mb: 10, borderBottom: '2px solid', borderColor: 'primary.secondary', display: 'inline-block' }}>
                Robotics
                </Typography>
            </Box>

            <Grid container spacing={8} sx={{ mb: 10 }}>
                {robotics.map((event) => (
                <EventCard event={event} key={event.id} />
                ))}
            </Grid>

            <Box sx={{ mt: 4, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                <Typography variant="h2" align="center" sx={{ color: '#D81B60', fontSize: { xs: '1.7rem', md: '3rem', lg: '3.5rem' }, mb: 10, borderBottom: '2px solid', borderColor: 'primary.secondary', display: 'inline-block' }}>
                High School Categories
                </Typography>
            </Box>

            <Grid container spacing={8} sx={{ mb: 10 }}>
                {highschool.map((event) => (
                <EventCard event={event} key={event.id} />
                ))}
            </Grid>
        </Container>
    );
};

export default ProBattleInfo;
