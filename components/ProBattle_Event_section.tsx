"use client";
import React from "react";
import { Box, Button, Typography, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import HowToRegIcon from '@mui/icons-material/HowToReg';

const ProBattleSection: React.FC = () => {
  return (
    <Box
      id="probattle-section"
      sx={{
        display: "flex",
        alignItems: "center", // Center content vertically
        justifyContent: "center", // Center content horizontally
        textAlign: "center", // Center text
        color: "white", // Text color
        minHeight: "100vh", // Full height
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={4} justifyContent="center" alignItems="center" >
          {/* Title */}
          <Grid size={12} >
            <Typography
              variant="h5"
              component="h2"
              sx={{
                fontWeight: "semibold",
                fontSize: { xs: "1.2rem", sm: "1.5rem" },
                mb: 1,
              }}
            >
              Introducing
            </Typography>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "3rem", sm: "4rem" },
                mb: 2,
                borderBottom: "2px solid", 
                borderColor: "primary.secondary",
                display: "inline-block",
              }}
            >
              Pro Battle
            </Typography>
          </Grid>

          {/* Logo */}
          <Grid size={12} >
            <Box
              component="img"
              src="/path-to-your-logo.png" // Replace with your logo path
              alt="Pro Battle Logo"
              sx={{
                maxWidth: "200px", // Adjust the size as needed
                width: "100%",
                mx: "auto",
              }}
            />
          </Grid>

          {/* Description */}
          <Grid size={{ xs: 12, sm: 8, md: 10 }} >
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.2rem",
                mb: 3,
                px: 2,
              }}
            >
              Join the ultimate competitive coding event, where top developers
              battle it out to solve complex challenges and win exciting prizes!
            </Typography>
          </Grid>

          {/* Register Button with an icon */}
          <Grid size={12} >
            <Button
              component="a"
              href="#register" // Replace with your registration link
              variant="contained"
              color="primary"
              endIcon={<HowToRegIcon />} // Icon on the right side
              sx={{
              backgroundColor: "#FFD700", // Gold color
              color: "black",
              fontWeight: "bold",
              px: 4, // Extra padding for better button appearance
              py: 1.5,
              "&:hover": {
                backgroundColor: "#FFA500", // Darker gold on hover
              },
              }}
            >
              Get Started
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProBattleSection;
