
import * as React from "react";
import { HomeCarousel } from "@/components/Home/Carousel";

const Home: React.FC = () => {
  return (
    <div className="colour-bg min-h-screen">
      <h1 className="text-center font-title text-4xl md:text-8xl p-4 colour-accent mb-8">IBA <br /> Computer Science Society</h1>
      <HomeCarousel />
    </div>
  );
};

export default Home;
