import AboutUs_section from "@/components/AboutUs_section";
import CodeX_Event_section from "@/components/CodeX_Event_section";
import Hero_section from "@/components/Hero_section";
import ProBattle_Event_section from "@/components/ProBattle_Event_section";
import Social_section from "@/components/Social_section";

import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      {/* Background Image */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundImage: 'url(/gradient_bg_hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: -2,
        }}
      />
      
      <Hero_section />
      <CodeX_Event_section />
      {/* <Social_section /> */}
      <AboutUs_section />
    </>
  );
}
