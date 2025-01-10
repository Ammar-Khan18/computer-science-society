"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Link,
  Chip,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import FaceIcon from "@mui/icons-material/Face";
import { events, newevents, robotics, highschool } from "./constants";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// EventCard Component
interface Event {
  id: number;
  title: string;
  details: string;
  members: number;
  link: string;
}

const EventCard: React.FC<{ event: Event }> = ({ event }) => (
  <Grid size={{ xs: 12, sm: 6, md: 4 }} key={event.id}>
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        borderRadius: 2,
        boxShadow: "4px 6px #8D0B41",
        transition: "0.3s",
        overflow: "visible",
      }}
    >
      <Box
        sx={{
          position: "relative",
          top: -16,
          left: "45%",
          width: 32,
          height: 32,
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
      <CardContent sx={{ flexGrow: 1 }}>
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
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {event.details}
        </Typography>
        <Box display="flex" alignItems="center" gap={1} mb={2}>
          <Chip
            icon={<FaceIcon />}
            label={`Members: ${event.members}`}
            variant="outlined"
          />
        </Box>
        <Link
          href={event.link}
          color="primary"
          underline="hover"
          variant="button"
        >
          Learn More
        </Link>
      </CardContent>
    </Card>
  </Grid>
);

const ProBattleInfo: React.FC = () => {
  const [value, setValue] = useState(0);

  const categories = [
    { label: "ProBattle Events", data: events },
    { label: "New Additions", data: newevents },
    { label: "Robotics", data: robotics },
    { label: "High School Categories", data: highschool },
  ];

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div style={{ backgroundColor: "#000", padding: "50px 0" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="secondary"
            variant="fullWidth"
            aria-label="category tabs"
            sx={{ width: "100%", maxWidth: 1000 }}
          >
            {categories.map((category, index) => (
              <Tab label={category.label} key={index} sx={{ color: "white", fontSize: { xs: "0.65rem", sm: "1rem", md: "0.9rem" } }} />
            ))}
          </Tabs>
        </Box>

        <Box sx={{ mt: 10 }}>
          {/* <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
            <Typography
              variant="h4"
              align="center"
              sx={{
                color: "#D81B60",
                fontSize: { xs: "1.7rem", md: "3rem", lg: "3.5rem" },
                borderBottom: "2px solid",
                borderColor: "primary.secondary",
                display: "inline-block",
              }}
            >
              {categories[value].label}
            </Typography>
          </Box> */}
          <Grid container spacing={8}>
            {categories[value].data.map((event) => (
              <EventCard event={event} key={event.id} />
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default ProBattleInfo;
