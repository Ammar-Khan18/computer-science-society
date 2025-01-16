"use client";
import React from "react";
import { Container, Box, useTheme, useMediaQuery, Typography } from "@mui/material";
import Image from "next/image";
import AnimatedBackground from "./animated-background";

const ProBattleSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect mobile screens

  return (
    <div style={{ backgroundColor: "transparent", padding: "50px 0" }}>

      <div style={{ position: "absolute", top: 0, zIndex: -1, left: 0 }}>
        <AnimatedBackground />
          <div
            style={{
              position: "absolute",
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1))",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
            }}
          ></div>
      </div>

      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >

        {/* Big Image */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            paddingY: 3,
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: 1200 },
              height: { xs: 300, md: 460 },
              overflow: "hidden",
              borderRadius: 5,
              position: "relative", // Needed for Image to scale properly
            }}
          >
            <Image
              src="/Banner.png" // Replace with the path to your image
              alt="ProBattle Title"
              fill // Makes the image fill the parent container
              style={{
                transition: "transform 0.5s ease-in-out",
                transformOrigin: "center",
                objectFit: isMobile ? "cover" : "contain", // Changes behavior based on screen size
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
          </Box>
        </Box>

        {/* Text */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            textAlign: "center",
            paddingTop: 2,
          }}
        >
          <Typography variant="h5" color="#fff" sx={{ flex: "1 1 auto", minWidth: "33%" }}>
            February 15 - 16, 2025
          </Typography>
          <Typography variant="h5" color="#fff" sx={{ flex: "1 1 auto", minWidth: "33%" }}>
            Live 
          </Typography>
          <Typography variant="h5" color="#fff" sx={{ flex: "1 1 auto", minWidth: "33%" }}>
            IBA Main Campus, Karachi
          </Typography>
        </Box>

        {/* Another Image but with no hover effect */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            paddingY: 3,
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: 1150 },
              height: { xs: 100, md: 300 },
              overflow: "hidden",
              borderRadius: 5,
              position: "relative", // Needed for Image to scale properly
            }}
          >
            <Image
              src="/probattle white.png" // Replace with the path to your image
              alt="ProBattle Title"
              fill // Makes the image fill the parent container
              style={{ 
                objectFit: isMobile ? "cover" : "contain", // Changes behavior based on screen size
              }}
            />
          </Box>
        </Box>

      </Container>
    </div>
  );
};

export default ProBattleSection;
