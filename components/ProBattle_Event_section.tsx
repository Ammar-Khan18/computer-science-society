"use client";
import React from "react";
import { Container, Box, useTheme, useMediaQuery, Typography, Button } from "@mui/material";
import Image from "next/image";
import KeyboardArrowRightSharpIcon from '@mui/icons-material/KeyboardArrowRightSharp';
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
        maxWidth="lg"
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
              priority
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
            width: { xs: "100%", md: 1200 },
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            textAlign: "center",
            paddingTop: 1,
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

        {/* Text and a button on the right */}
        <Container maxWidth="md">
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" }, // Column on mobile, row on larger screens
              flexWrap: "wrap",
              justifyContent: { xs: "center", sm: "space-between" }, // Center on mobile, space-between on larger screens
              textAlign: { xs: "center", sm: "left" }, // Center-align text on mobile
              alignItems: "center", // Align items in the center
              gap: 2, // Add spacing between items
            }}
          >
            <Typography
              variant="h5"
              color="#fff"
              sx={{
                fontSize: { xs: "1rem", sm: "1.5rem" }, // Smaller font size on mobile
                lineHeight: { xs: 1.5, sm: 1.8 }, // Adjust line height for better readability
                maxWidth: { xs: "90%", sm: "70%" }, // Restrict width for text on mobile
              }}
            >
              Our biggest event of the year is here!<br />
              Register now to participate in the ProBattle event.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: { xs: "100%", sm: "auto" }, // Full width on mobile
                marginTop: { xs: 2, sm: 0 }, // Add spacing on mobile
                marginRight: { xs: 0, sm: 4 }, // Add spacing on mobile
              }}
            >
              <Button
                variant="contained"
                size="large"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfehhlMhJX52jWSTI2L_Dsw2DvRZB2ukF0bphOSpLlYMEOdVw/viewform"
                endIcon={<KeyboardArrowRightSharpIcon />}
                sx={{
                  position: "relative",
                  zIndex: 1,
                  borderRadius: "5px",
                  marginLeft: 2,
                  padding: "20px 35px",
                  backgroundColor: "#000",
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  border: "none",
                  overflow: "hidden",
                  "::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: -1,
                    borderRadius: "inherit",
                    padding: "2px", // Border thickness
                    background: "linear-gradient(90deg, #09A599, blue, #B52B65)",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  },
                  "&:hover": {
                    "::before": {
                      background: "white",
                      transition: "all 0.5s ease",
                    },
                  },
                }}
              >
                Register
              </Button>
            </Box>
          </Box>
        </Container>

      </Container>
    </div>
  );
};

export default ProBattleSection;
