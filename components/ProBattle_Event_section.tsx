"use client";
import React from "react";
import { Box, Button, Typography, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

// importing framer motion
import { motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";

const ProBattleSection: React.FC = () => {
  // Define breakpoints
  const isMd = useMediaQuery("(min-width: 768px)");
  const isLg = useMediaQuery("(min-width: 1200px)");

  // Calculate responsive styles
  const styles = {
    top: isLg ? 10 : isMd ? 5 : "auto",
    left: isLg ? 50 : isMd ? 10 : "auto",
    width: isLg ? "300px" : isMd ? "280px" : "100px", // Adjust small default if needed
    height: isLg ? "300px" : isMd ? "280px" : "100px",
    display: isMd ? "block" : "none",
  };
  
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
        backgroundColor: "inherit", // Inherit background color
      }}
    >
      <motion.div
        // hover effect: up and down
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
        style={{
          position: "absolute",
          top: styles.top,
          left: styles.left,
          width: styles.width,
          height: styles.height,
          backgroundImage: "url(/Pro_Battle_main.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
          display: styles.display,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: -3,
          overflow: "hidden",
        }}
      >
        <svg
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "calc(max(50%, 25rem))",
            top: 0,
            height: "64rem",
            width: "128rem",
            transform: "translateX(-50%)",
          }}
        >
          <defs>
            <pattern
              id="grid-pattern"
              x="50%"
              y={-1}
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V0.5M0.5 0.5H200" fill="none" stroke="rgba(200,200,200,0.5)" />
            </pattern>
          </defs>
          <rect fill="url(#grid-pattern)" width="100%" height="100%" />
        </svg>
      </Box>

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
                color: "#000000",
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
                color: "#D81B60",
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
                color: "text.secondary",
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
              href="#register" // Replace with your register section ID
              variant="contained"
              color="primary"
              endIcon={<PlayCircleOutlineIcon />} // Icon on the right side
              sx={{
                color: "black",
                fontWeight: "semibold",
                px: 4, // Extra padding for better button appearance
                py: 1.5,
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
