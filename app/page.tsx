import AboutUs_section from "@/components/AboutUs_section";
import CodeX_Event_section from "@/components/CodeX_Event_section";
import Hero_section from "@/components/Hero_section";
import ProBattle_Event_section from "@/components/ProBattle_Event_section";
import Social_section from "@/components/Social_section";

export default function Home() {
  return (
    <>
      <Hero_section />
      <CodeX_Event_section />
      <Social_section />
      <AboutUs_section />
    </>
  );
}
