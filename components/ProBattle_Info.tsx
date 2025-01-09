"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Link,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
  OutlinedInput,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Chip from "@mui/material/Chip";
import FaceIcon from "@mui/icons-material/Face";
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
          <Chip icon={<FaceIcon />} label={`Members: ${event.members}`} variant="outlined" />
        </Box>
        <Link href={event.link} color="primary" underline="hover" variant="button">
          Learn More
        </Link>
      </CardContent>
    </Card>
  </Grid>
);

const ProBattleInfo: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("events");

  const categories = [
    { label: "ProBattle Events", value: "events" },
    { label: "New Additions", value: "newevents" },
    { label: "Robotics", value: "robotics" },
    { label: "High School Categories", value: "highschool" },
  ];

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectedCategory(event.target.value as string);
    handleClose();
  };

  const getSelectedEvents = () => {
    switch (selectedCategory) {
      case "events":
        return events;
      case "newevents":
        return newevents;
      case "robotics":
        return robotics;
      case "highschool":
        return highschool;
      default:
        return [];
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, justifyContent: "center", alignItems: "center", display: "flex" }}>
        <Button variant="outlined" onClick={handleOpen} color="primary">
          View Categories
        </Button>
      </Box>

      <Dialog
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
        width: { xs: '80%', sm: '60%', md: '40%' },
        maxWidth: '400px',
        borderRadius: 2,
        boxShadow: 3,
        p: 2,
          },
        }}
      >
        <DialogTitle sx={{ textAlign: 'center', fontWeight: 'bold', color: 'primary.main' }}>
          Select a Category
        </DialogTitle>
        <DialogContent>
          <FormControl fullWidth variant="outlined" sx={{ mt: 2 }}>
        <InputLabel id="category-select-label">Category</InputLabel>
        <Select
          labelId="category-select-label"
          value={selectedCategory}
          onChange={handleChange}
          input={<OutlinedInput label="Category" />}
        >
          {categories.map((category) => (
            <MenuItem key={category.value} value={category.value}>
          {category.label}
            </MenuItem>
          ))}
        </Select>
          </FormControl>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center' }}>
          <Button onClick={handleClose} color="secondary" variant="outlined">
        Cancel
          </Button>
        </DialogActions>
      </Dialog>

      {selectedCategory && (
        <Box sx={{ mt: 4 }}>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Typography variant="h4" align="center" sx={{ color: '#D81B60', fontSize: { xs: '1.7rem', md: '3rem', lg: '3.5rem' }, mb: 7, borderBottom: '2px solid', borderColor: 'primary.secondary', display: 'inline-block' }}>
              {categories.find((cat) => cat.value === selectedCategory)?.label}
            </Typography>
          </Box>
          <Grid container spacing={8}>
            {getSelectedEvents().map((event) => (
              <EventCard event={event} key={event.id} />
            ))}
          </Grid>
        </Box>
      )}
    </Container>
  );
};

export default ProBattleInfo;
