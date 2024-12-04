"use client";
import React from "react";
import { Box, Container, Typography } from "@mui/material";

// importing icons for the list form the MUI library
import { Assignment, Group, People, School, SpeakerNotes, Work } from "@mui/icons-material";


export default function ProBattle_Intro() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        bgcolor: "inherit",
        display: "flex",
        pb: { xs: 6, sm: 8 },
        flexDirection: "column",
        gap: { xs: 6, sm: 8 },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: -1,
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
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: { xs: 4, sm: 6 },
        }}
      >
        <Box>
          <Typography variant="h6" color="#D81B60" fontWeight="bold" gutterBottom>
            Introduction
          </Typography>
          <Typography
            variant="h3"
            fontWeight="bold"
            gutterBottom
            sx={{ color: "text.primary", fontSize: { xs: "1.7rem", md: "3rem" } }}
          >
            Learn about ProBattle
          </Typography>
          <Typography variant="body1" sx={{ color: "text.tertiary", textAlign: "left", alignItems: "flex-start" }}>
              The event is meticulously structured to offer participants an array of
              opportunities to test their skills, explore cutting-edge technologies, and
              glean insights from industry leaders. By fostering a collaborative
              environment, ProBattle 2024 encourages the exchange of ideas and
              creativity, ensuring a platform where participants can thrive.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 4,
            textAlign: "left",
            width: "100%",
          }}
        >
          <Typography variant="body1" sx={{ color: "text.tertiary" }}>
            ProBattle is a premier hackathon event that brings together students,
            professionals, and industry experts to collaborate and innovate. With a
            focus on emerging technologies and real-world problem-solving, ProBattle
            provides a platform for participants to showcase their skills and gain
            valuable experience.
          </Typography>
          <Box
            component="ul"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              pl: 0,
              listStyle: "none",
            }}
          >
            {[
              {
                icon: <Assignment sx={{ color: "text.primary" }} />,
                title: "Expanded Age Groups",
                description:
                  "A Levels, UnderGrads and PostGrads are all welcome to participate.",
              },
              {
                icon: <Group sx={{ color: "text.primary" }} />,
                title: "High-Profile Collaborations",
                description:
                  "Software Houses, STEM Clubs and Societies and Industry Experts",
              },
              {
                icon: <People sx={{ color: "text.primary" }} />,
                title: "Increased Number of Modules",
                description:
                  "Offer a 15+ diverse modules, providing participants with a richer and more comprehensive learning experience.",
              },
              {
                icon: <School sx={{ color: "text.primary" }} />,
                title: "Large-Scale Participation",
                description:
                  "Aim to attract over 3000 participants, ensuring a dynamic event that brings together tech enthusiasts from various backgrounds.",
              },
              {
                icon: <SpeakerNotes sx={{ color: "text.primary" }} />,
                title: "IMentorship Sessions & Tech Talks",
                description:
                  "Speaker sessions, Hands on workshops and Panel Interviews",
              },
              {
                icon: <Work sx={{ color: "text.primary" }} />,
                title: "Networking Opportunities",
                description:
                  "1:1 Mentoring Sessions and Career Advices",
              },
            ].map(({ icon, title, description }, index) => (
              <Box
                key={index}
                component="li"
                sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "start",
                }}
              >
                <Box>{icon}</Box>
                <Box>
                  <Typography variant="body1" fontWeight="bold" color="text.primary" sx={{ mb: 0.5 }}>
                    {title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
          
        </Box>
      </Container>
    </Box>
  );
}
