// HeroCarousel.tsx
"use client";
import { Box, Typography } from '@mui/material';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import React, { useEffect } from 'react';

interface Slide {
    title: string;
    description: string;
    date: string;
    /*image: string;*/
  }

const slides: Slide[] = [
  {
    title: 'Weekly Contests',
    description: 'Compete with peers every week and improve your coding skills.',
    date: 'October 21, 2024',
    /*image: '/path-to-your-image1.jpg',*/ // Replace with actual image paths
  },
  {
    title: 'Monthly Hackathons',
    description: 'Collaborate on innovative projects and win exciting prizes!',
    date: 'October 28, 2024',
    /*image: '/path-to-your-image2.jpg',*/
  },
  {
    title: 'Arena Research Program',
    description: 'Dive deep into research and be a part of groundbreaking projects.',
    date: 'November 4, 2024',
    /*image: '/path-to-your-image3.jpg',*/
  },
];

const HeroCarousel: React.FC = () => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    renderMode: "performance",
    drag: true, // Disable dragging for auto-play only
  });

  // Auto-play effect
  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 3000); // 5 seconds per slide

    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <Box ref={sliderRef} className="keen-slider" sx={{ height: '300px' }}>
      {slides.map((slide, i) => (
        <Box
          key={i}
          className="keen-slider__slide"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            p: 4,
            /*background: `url(${slide.image}) center center / cover no-repeat`,*/ // Image as background
            color: 'black',
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
            {slide.title}
          </Typography>
          <Typography variant="body1">{slide.description}</Typography>
          <Typography variant="body1">{slide.date}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default HeroCarousel;
