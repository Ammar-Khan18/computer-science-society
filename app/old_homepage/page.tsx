import AboutUs_section from "@/components/AboutUs_section";
import CodeX_Event_section from "@/components/CodeX_Event_section";
import Hero_section from "@/components/Hero_section";
import ProBattle_Event_section from "@/components/ProBattle_Event_section";

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
          background: 'black',
          height: '100vh',
          // background: 'rgb(2,0,36) linear-gradient(to bottom, black 5%, rgba(2,0,36,1) 0%, rgba(121,9,118,1) 35%, rgba(255,0,114,1) 100%)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: -2,
        }}
      />
      <Hero_section />
      <CodeX_Event_section />
      {/* <Social_section /> */}
    </>
  );
}
