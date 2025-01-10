"use client";
import React from "react";
import { Box, Container, ImageList, ImageListItem, useTheme, useMediaQuery, Typography } from "@mui/material";
import hero from "../public/hero-video.jpg"; // Importing the image correctly



// Images
const itemData = [
  {
    img: hero, // Using the imported 'hero' image here
    title: "Breakfast",
  },
  {
    img: hero,
    title: "Burgers",
  },
  {
    img: hero,
    title: "Camera",
  },
  {
    img: hero,
    title: "Morning",
  },
  {
    img: hero,
    title: "Hats",
  },
  {
    img: hero,
    title: "Honey",
  },
  {
    img: hero,
    title: "Vegetables",
  },
  {
    img: hero,
    title: "Water plant",
  },
];

const Features = [
  "Expanded Age Groups",
  "High-Profile Collaborations",
  "Increased Number of Modules",
  "Large Scale Participation",
  "Mentorship Sessions and Tech Talks",
  "Networking Opportunities",
];

export default function ProBattle_Intro() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect mobile screens

  return (
    <div style={{ backgroundColor: "#000", padding: "50px 0" }}>
      <Container maxWidth="lg">

          {/* Bento Grid of Images */}
          <ImageList sx={{ width: "100%", height: 800, margin: "0 auto", maxWidth: 1200 }} variant="woven" cols={ isMobile ? 2 : 3 }
          gap={30}>
            {itemData.map((item) => (
              <ImageListItem key={item.title} sx={{ overflow: "hidden", borderRadius: 3 }}>
                <img
                  src={item.img.src} // Use the src property of the imported 'hero' image
                  alt={item.title}
                  loading="lazy"
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </ImageListItem>
            ))}
          </ImageList>

          {/* A little black shadow below the images */}
          <Box
            sx={{
              position: "absolute",
              width: "80%",
              zIndex: 100,
              height: 30,
              backgroundColor: "#000",
              boxShadow: "0px -10px 20px 10px #000", // Top shadow
            }}
          />
        

        {/* Text */}
        <Box sx={{ textAlign: "center", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h4"
            align="left"
            sx={{
              color: "gray", // Base color for the text
              marginTop: 5,
              maxWidth: 1160,
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
              "& span": { color: "#fff" }, // White color for keywords and highlighted text
            }}
          >
            <span>🌟 Welcome to ProBattle 2025 – your ultimate platform to{" "} innovate,</span> <span>collaborate, and excel!</span> 
            This event is meticulously crafted to challenge your skills, immerse you in cutting-edge technologies, and provide invaluable{" "} insights from industry leaders. 
            By fostering a{" "} dynamic and collaborative environment, ProBattle 2025 encourages the exchange of ideas,{" "} creativity, and innovation. 
            Whether you<span style={{color: "gray"}}>&#39;</span>re{" "} testing your abilities, exploring the{" "} latest advancements, or networking with{" "} like-minded individuals, this is where{" "} talent meets opportunity. 
            🚀 <span>Don't miss your chance to{" "} thrive and make your mark!</span> 💡
          </Typography>
        </Box>

        {/* Feature Section of small boxes with text */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: 5,
          }}
        >
          {Features.map((feature, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: "#1e1e1e", // Slightly lighter gray for the background
                color: "#ccc", // Light gray for the text
                padding: 3, // Increased padding for better spacing
                borderRadius: 3, // More rounded corners
                margin: 2,
                minWidth: 320, // Slightly wider boxes
                textAlign: "center",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)", // Subtle shadow for depth
                transition: "all 0.3s ease", // Smooth hover animation
                "&:hover": {
                  backgroundColor: "#333", // Darker gray on hover
                  color: "#fff", // Bright white text on hover
                  transform: "translateY(-5px)", // Lift effect
                  boxShadow: "0 8px 15px rgba(0, 0, 0, 0.5)", // Enhanced shadow on hover
                },
              }}
            >
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: 1 }}>
                  <Box
                    sx={{
                    backgroundColor: "#444", // Icon background
                    padding: 1.5,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: "1.5rem", // Icon size
                    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    <i className="fas fa-star"></i> {/* Replace this with your desired icon */}
                  </Box>
                <Typography
                  variant="h5"
                  sx={{
                  fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
                  fontWeight: "bold",
                  }}
                >
                  {feature}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>


      </Container>
    </div>
  );
}
