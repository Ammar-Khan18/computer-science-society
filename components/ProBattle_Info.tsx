"use client";
import React from "react";
import { Box, Typography, Container, Card, CardContent, Link } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';

interface Event {
    id: number;
    title: string;
    details: string;
    members: number;
    link: string;
}

const events: Event[] = [
    {
        id : 1,
        title: "Event 1",
        details: "Details of the event will be added here as long as the description is not too long.",
        members: 5,
        link: "https://www.google.com",
    },
    {
        id : 2,
        title: "Event 2",
        details: "Details of the event will be added here as long as the description is not too long.",
        members: 7,
        link: "https://www.google.com",
    },
    {
        id : 3,
        title: "Event 3",
        details: "Details of the event will be added here as long as the description is not too long.",
        members: 3,
        link: "https://www.google.com",
    },
];

const ProBattleInfo: React.FC = () => {
    return (
        <Container maxWidth="lg">
            <Box sx={{ mt: 4, mb: 10 }}>
                <Typography variant="h3" align="center" sx={{ fontSize: { xs: '1.8rem', md: '2.5rem', lg: '3rem' } }}>
                    Show off your skills <br /> 
                    and win big!
                </Typography>
            </Box>

            <Grid container spacing={8} sx={{ mb: 10 }}>
                {events.map((event) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={event.id}>
                        <Card
                            sx={{
                            display: "flex",
                            flexDirection: "column",
                            height: "100%",
                            borderRadius: 2,
                            boxShadow: 2,
                            transition: "0.3s",
                            "&:hover": { boxShadow: 5 },
                            backgroundColor: "#f9f9f9",
                            }}
                        >
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
                ))}
            </Grid>
        </Container>
    );
};

export default ProBattleInfo;
