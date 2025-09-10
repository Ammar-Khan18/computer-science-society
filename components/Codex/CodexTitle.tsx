"use client"

import * as React from "react";
import dynamic from "next/dynamic";

const BackgroundAnimation = dynamic(() => import("@/components/Codex/BackgroundAnimation"), { ssr: false });

const CodexTitle: React.FC = () => (
  <div className="relative flex flex-col h-140 md:min-h-screen items-center py-10 px-4 md:px-12 overflow-hidden">

    {/* Wave Animation - behind all content */}
    <div className="
      absolute
      left-2/3 top-[70%]
      -translate-x-1/2 -translate-y-1/2
      md:left-[33%] md:-top-95 md:-translate-x-1/3 md:-translate-y-0
      rotate-7
      w-[150vw] h-[100vh]
      md:w-[100vw] md:h-[70vh]
      lg:w-[120vw] lg:h-[80vh]
      xl:w-[140vw] xl:h-[80vh]
      2xl:w-[160vw] 2xl:h-[80vh]
      z-0 pointer-events-none select-none opacity-35
    ">
      <BackgroundAnimation />
    </div>

    {/* Main Content */}
    <h1 className="font-title text-5xl md:text-7xl colour-text mt-8 mb-10 md:mb-14 text-center relative z-10">What is <br /> <span className="text-7xl md:text-9xl">CodeX?</span></h1>
    <p className="font-text text-sm md:text-lg colour-accent text-center tracking-wider mx-4 md:mx-0 max-w-2xl relative z-10">Codex is the flagship initiative of the IBA Computer Science Society, designed to foster learning, collaboration, and innovation among students passionate about coding and technology.</p>
  
  </div>
);

export default CodexTitle;
