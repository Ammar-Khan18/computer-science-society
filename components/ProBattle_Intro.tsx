"use client";
import React from "react";
import { Box, Container, ImageList, ImageListItem, useTheme, useMediaQuery } from "@mui/material";
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
            width: "100%",
            zIndex: 100,
            height: 30,
            backgroundColor: "#000",
            boxShadow: "0px -10px 20px 10px #000", // Top shadow
          }}
        />
      </Container>
    </div>
  );
}
