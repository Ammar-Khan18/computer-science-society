
import * as React from "react";
import { HomeCarousel } from "@/components/Home/Carousel";
import TitleSection from "@/components/Home/TitleSection";
import DescriptionSection from "@/components/Home/DescriptionSection";
import CodeX from "@/components/Home/CodeX";
import ProBattle from "@/components/Home/ProBattle";
// import DevelopersSection from "@/components/Home/DevelopersSection";
import TeamSection from "@/components/Home/TeamSection";

const Home: React.FC = () => {
  return (
    <div className="colour-bg min-h-screen">
      <TitleSection />
      <HomeCarousel />
      <DescriptionSection />
      <CodeX />
      <ProBattle />
      {/* <DevelopersSection /> */}
      <TeamSection />
    </div>
  );
};

export default Home;
