import 'keen-slider/keen-slider.min.css';
import { Box } from '@mui/material';
import { useKeenSlider } from 'keen-slider/react';
import React, { useEffect } from 'react';
import Image from 'next/image';

interface Slide {
  image: string;
}

const slides: Slide[] = [
  { image: '/Week 1 Code Clash.jpg' },
  { image: '/Week 2 Code Clash.jpg' },
  { image: '/Week 1 Code Clash.jpg' },
];

const HeroCarousel: React.FC = () => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    renderMode: 'performance',
    drag: true,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 3000); // 3 seconds per slide

    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <Box ref={sliderRef} className="keen-slider" sx={{ width: '100%', height: '300px' }}>
      {slides.map((slide, i) => (
        <Box key={i} className="keen-slider__slide" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <Image src={slide.image} alt={`Slide ${i + 1}`} width={1920} height={1080} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Box>
      ))}
    </Box>
  );
};

export default HeroCarousel;
