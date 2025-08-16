'use client';

import * as React from "react";
import { HomeCarousel } from "@/components/Home/Carousel";
import TitleSection from "@/components/Home/TitleSection";
import DescriptionSection from "@/components/Home/DescriptionSection";
import CodeX from "@/components/Home/CodeX";
import ProBattle from "@/components/Home/ProBattle";
// import DevelopersSection from "@/components/Home/DevelopersSection";
import TeamSection from "@/components/Home/TeamSection";
import WelcomeScreen from "@/components/Home/WelcomeScreen";

const Home: React.FC = () => {
  const [showWelcome, setShowWelcome] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="colour-bg min-h-screen">
      <WelcomeScreen show={showWelcome} onFinish={() => setShowWelcome(false)} />
      {!showWelcome && (
        <>
          <TitleSection />
          <HomeCarousel />
          <DescriptionSection />
          <CodeX />
          <ProBattle />
          {/* <DevelopersSection /> */}
          <TeamSection />
        </>
      )}
    </div>
  );
};

export default Home;
