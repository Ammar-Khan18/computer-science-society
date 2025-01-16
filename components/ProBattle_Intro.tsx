"use client";
import React from "react";
import { Box, Container, ImageList, ImageListItem, useTheme, useMediaQuery, Typography } from "@mui/material";

// Importing the image
import Image from "next/image";

// Images
const itemData = [
  {
    img: "/Pro1.jpg",
    title: "Pro1",
  },
  {
    img: "/Pro2.jpg",
    title: "Pro2",
  },
  {
    img: "/Pro3.jpg",
    title: "Pro3",
  },
  {
    img: "/Pro4.jpg",
    title: "Pro4",
  },
  {
    img: "/Pro5.jpg",
    title: "Pro5",
  },
  {
    img: "/Pro6.jpg",
    title: "Pro6",
  },
  {
    img: "/Pro7.jpg",
    title: "Pro7",
  },
  {
    img: "/Pro8.jpg",
    title: "Pro8",
  },
  {
    img: "/Pro9.jpg",
    title: "Pro9",
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
          <ImageList sx={{ width: "100%", height: 900, margin: "0 auto", maxWidth: 1200 }} variant="woven" cols={ isMobile ? 2 : 3 } gap={20}>
            {itemData.map((item) => (
              <ImageListItem key={item.title} sx={{ overflow: "hidden", borderRadius: 3 }}>
                <Image
                  src={item.img} // Use the src property of the imported 'hero' image
                  alt={item.title}
                  fill 
                  sizes="100%"
                  loading="lazy"
                  style={{ objectFit: "cover", width: "100%", height: "100%", opacity: 0.6 }}
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
              color: "#D9DFC6", // Base color for the text
              marginTop: 5,
              maxWidth: 1160,
              fontSize: { xs: "1.1rem", sm: "1.6rem", md: "1.8rem" },
              "& span": { color: "#fff" }, // White color for keywords and highlighted text
            }}
          >
            🌟 Welcome to <span>ProBattle 2025</span>, the <span>ultimate tech showdown</span> organized by the <span>IBA Computer Science Society!</span> <br /> <br />
            Prepare 💡 yourself for an exhilarating competition where innovation meets skill, and ideas come to life. 
            Gain insights and hands-on experience and dive deep into a wide range of technical topics including <span>Machine Learning, Competitive Programming, Robotics</span>, and much more.
            <span>Build</span> valuable connections during our dedicated networking sessions.
          </Typography>
          <Box
            sx={{
              textAlign: "left",
              marginTop: 3,
              maxWidth: 1160,
              color: "#D9DFC6", // Base color for bullets
              fontSize: { xs: "1.1rem", sm: "1.6rem", md: "1.8rem" },
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#fff" }}>Event Highlights:</Typography>
            <ul style={{ listStyleType: "disc", paddingLeft: 20, lineHeight: 1 }}>
              <li><b>Expert-Led Workshops & Seminars:</b> Gain insights and hands-on experience from workshops and seminars conducted by seasoned experts in various tech domains.</li>
              <li><b>18 Technical Modules:</b> Dive deep into a wide range of technical topics, including Machine Learning, Competitive Programming, Robotics, and much more. Each module is designed to enhance your knowledge and skills in cutting-edge technologies.</li>
              <li><b>Networking Sessions:</b> Build valuable connections during our dedicated networking sessions, including a special &quot;Networking Corner&quot; where you can interact with peers, mentors, and industry professionals.</li>
            </ul>

            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#fff", marginTop: 2 }}>Why Participate?</Typography>
            <ul style={{ listStyleType: "disc", paddingLeft: 20, lineHeight: 1 }}>
              <li><b>Exciting Prizes:</b> Win cash rewards, exclusive tech merchandise, and more.</li>
              <li><b>Networking Opportunities:</b> Connect with industry leaders, peers, and potential employers.</li>
              <li><b>Skill Development:</b> Hone your skills through practical, hands-on challenges.</li>
              <li><b>Recognition:</b> Stand out by showcasing your talent and innovation.</li>
            </ul>
            
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#fff", marginTop: 2 }}>
              Get ready to battle it out and emerge as a champion of ProBattle25!
            </Typography>
          </Box>
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
