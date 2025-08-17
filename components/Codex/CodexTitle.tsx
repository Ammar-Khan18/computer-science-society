"use client"

import * as React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const WaveAnimation = dynamic(() => import("@/components/Codex/WaveAnimation"), { ssr: false });

const CodexTitle: React.FC = () => (
  <section className="flex flex-col h-140 md:min-h-screen items-center py-10 px-4 md:px-12">
    {/* <h1 className="font-title text-5xl md:text-8xl colour-text mb-2 md:mb-0 text-center">What is <span className="inline-block align-middle"><Image src="/Codex/codex_title.png" alt="Codex" width={120} height={60} className="inline w-32 h-32 md:w-60 md:h-60 object-contain" /></span>?</h1> */}
    <h1 className="font-title text-5xl md:text-8xl colour-text mt-12 mb-10 md:mb-14 text-center">What is CodeX?</h1>
    <p className="font-text text-sm md:text-md colour-text text-justify md:text-center tracking-wider mx-4 md:mx-0 max-w-2xl">Codex is the flagship initiative of the IBA Computer Science Society, designed to foster learning, collaboration, and innovation among students passionate about coding and technology.</p>

    {/* Wave Animation */}
    <div className="absolute inset-0 -bottom-80 md:bottom-20 flex items-center justify-center z-10 pointer-events-none select-none">
        <div className="w-[120vw] h-[80vh] opacity-60">
            <WaveAnimation />
        </div>
    </div>
  </section>
);

export default CodexTitle;
