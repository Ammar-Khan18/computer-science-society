"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Chip,
  Stack,
  Divider,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import { UniversityEvents, CollegeEvents } from "./constants";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// EventCard Component
interface Event {
  id: number;
  title: string;
  details: string;
  minMember: number;
  maxMember: number;
  pricingEarly: number;
  pricingLate: number;
  category: "College" | "University" | "University + College";
  Tier: "1" | "2" | "General";
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

      <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
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

        <Box sx={{ flexGrow: 1 }} />

        <Box display="flex" alignItems="center" gap={1} mb={2}>
          <Chip
            icon={<PersonIcon />}
            label={`Min Members: ${event.minMember}`}
            variant="outlined"
          />
          <Chip
            icon={<GroupsIcon />}
            label={`Max Members: ${event.maxMember}`}
            variant="outlined"
          />
        </Box>

        <Box sx={{ flexGrow: 0 }} />

        <Divider sx={{ my: 2 }} />

        <Stack spacing={1}>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            Pricing Information
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <strong>Module Fee:</strong> {event.pricingEarly}
          </Typography>
        </Stack>

      </CardContent>
    </Card>
  </Grid>
);

const ProBattleInfo: React.FC = () => {
  const [value, setValue] = useState(0);

  const categories = [
    { label: "University Level", data: UniversityEvents },
    { label: "College Level", data: CollegeEvents },
  ];

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const getTieredEvents = (events: Event[], tier: string) =>
    events.filter((event) => event.Tier === tier);


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
              <Tab
                label={category.label}
                key={index}
                sx={{ color: "white", fontSize: { xs: "0.65rem", sm: "1rem", md: "0.9rem" } }}
              />
            ))}
          </Tabs>
        </Box>

        {(["1", "2", "General"] as const).map((tier) => {
          const tieredEvents = getTieredEvents(categories[value].data, tier);

          if (tieredEvents.length === 0) return null;

          return (
            <Box key={tier} sx={{ mt: tier === "1" ? 0 : 6 }}>
              <Typography
                variant="h4"
                sx={{ color: "white", textAlign: "center", mb: 4 }}
              >
                Tier {tier}
              </Typography>
              <Grid container spacing={8}>
                {tieredEvents.map((event, index) => (
                  <EventCard
                    event={{ ...event, id: index + 1 }} // Renumber cards
                    key={index}
                  />
                ))}
              </Grid>
            </Box>
          );
        })}
      </Container>
    </div>
  );
};

export default ProBattleInfo;
