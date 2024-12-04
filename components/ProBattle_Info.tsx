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

interface NewEvents {
    id: number;
    title: string;
    details: string;
    members: number;
    link: string;
}

const events: Event[] = [
    {
        id : 1,
        title: "Competitive Programming",
        details: "Details of the event will be added here as long as the description is not too long.",
        members: 5,
        link: "https://www.google.com",
    },
    {
        id : 2,
        title: "Speed Debugging",
        details: "Details of the event will be added here as long as the description is not too long.",
        members: 7,
        link: "https://www.google.com",
    },
    {
        id : 3,
        title: "Pseudo War",
        details: "Details of the event will be added here as long as the description is not too long.",
        members: 3,
        link: "https://www.google.com",
    },
    {
        id : 4,
        title: "Database Design",
        details: "Details of the event will be added here as long as the description is not too long.",
        members: 4,
        link: "https://www.google.com",
    },
    {
        id : 5,
        title: "Code In The Dark",
        details: "Details of the event will be added here as long as the description is not too long.",
        members: 6,
        link: "https://www.google.com",
    },
    {
        id : 6,
        title: "UI/UX Design",
        details: "Details of the event will be added here as long as the description is not too long.",
        members: 2,
        link: "https://www.google.com",
    },
    {
        id : 7,
        title: "App Development",
        details: "Details of the event will be added here as long as the description is not too long.",
        members: 8,
        link: "https://www.google.com",
    },
    {
        id : 8,
        title: "hackathon",
        details: "Details of the event will be added here as long as the description is not too long.",
        members: 4,
        link: "https://www.google.com",
    },
    {
        id : 9,
        title: "ML showdown",
        details: "Details of the event will be added here as long as the description is not too long.",
        members: 5,
        link: "https://www.google.com",
    },
    {
        id : 10,
        title: "Shark Tank",
        details: "Details of the event will be added here as long as the description is not too long.",
        members: 3,
        link: "https://www.google.com",
    },
    {
        id : 11,
        title: "FIFA",
        details: "Details of the event will be added here as long as the description is not too long.",
        members: 6,
        link: "https://www.google.com",
    },
    {
        id : 12,
        title: "Capture The Flag",
        details: "Details of the event will be added here as long as the description is not too long.",
        members: 4,
        link: "https://www.google.com",
    }
];

const newevents: NewEvents[] = [
    {
        id : 1,
        title: "AI Bot Battle",
        details: "Details of the event will be added here as long as the description is not too long.",
        members: 5,
        link: "https://www.google.com",
    },
    {
        id : 2,
        title: "Code Refactoring Sprint",
        details: "Details of the event will be added here as long as the description is not too long.",
        members: 7,
        link: "https://www.google.com",
    },
    {
        id : 3,
        title: "Web Scraping Challenge",
        details: "Details of the event will be added here as long as the description is not too long.",
        members: 3,
        link: "https://www.google.com",
    },
    {
        id : 4,
        title: "Creative Coding Art",
        details: "Details of the event will be added here as long as the description is not too long.",
        members: 4,
        link: "https://www.google.com",
    },
];



const ProBattleInfo: React.FC = () => {
    return (
        <Container maxWidth="lg">
            <Box sx={{ mt: 4, mb: 10, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                <Typography variant="h3" align="center" sx={{ color: '#D81B60', fontSize: { xs: '1.8rem', md: '2.5rem', lg: '3rem' }, borderBottom: '2px solid', borderColor: 'primary.secondary', display: 'inline-block' }}>
                    ProBattle Events
                </Typography>
            </Box>

            <Grid container spacing={8} sx={{ mb: 10 }}>
                {events.map((event) => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={event.id}>
                        <Card
                            sx={{
                            display: "flex",
                            flexDirection: "column",
                            height: "350px",
                            borderRadius: 2,
                            // applying shadow effect only on right and bottom side 
                            boxShadow: "4px 6px #1B1A55",
                            transition: "0.3s",
                            overflow: "visible",
                            }}
                        >
                            {/* Event ID Badge */}
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
                ))}
            </Grid>

            <Typography variant="h4" align="center" sx={{ fontSize: { xs: '1.5rem', md: '2rem', lg: '2.5rem' }, mb: 4 }}>
                New Events
            </Typography>

            <Grid container spacing={8} sx={{ mb: 10 }}>
                {newevents.map((event) => (
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
                ))}
            </Grid>
        </Container>
    );
};

export default ProBattleInfo;
