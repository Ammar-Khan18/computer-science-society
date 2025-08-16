"use client";
import * as React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const WelcomeAnimation = dynamic(() => import("@/components/Home/welcomeAnimation"), { ssr: false });

const TitleSection: React.FC = () => (
    <section className="relative flex flex-col md:flex-row items-center justify-between py-12 px-4 md:px-12 gap-8 overflow-visible">
        
        {/* Lottie animation top left on desktop */}
        <div className="absolute z-20 -top-16 -left-24 md:-top-16 md:-left-0 w-40 h-40 md:w-70 md:h-70 pointer-events-none select-none hidden md:block">
            <WelcomeAnimation />
        </div>

        {/* Lottie animation top left on mobile */}
        <div className="absolute z-20 -top-2 right-0 w-36 h-36 pointer-events-none select-none md:hidden">
            <WelcomeAnimation />
        </div>

        <div className="flex-1 flex flex-col items-center md:items-start">
            <h1
                className="z-21 font-title text-5xl text-center md:text-left md:text-8xl mb-4 md:ml-12 bg-gradient-to-r from-[var(--colour-text)] via-[var(--colour-accent)] to-[var(--colour-text)] bg-clip-text text-transparent"
                style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
                IBA <br /> Computer Science Society
            </h1>
            <p
                className="font-heading text-base text-center md:text-left md:text-2xl md:ml-12 bg-gradient-to-r from-[var(--colour-text)] via-[var(--colour-accent)] to-[var(--colour-text)] bg-clip-text text-transparent"
                style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
                Innovate . Collaborate . Excel .
            </p>
        </div>

        <div className="hidden md:flex flex-1 justify-center items-center">
            <Image
                src="/icon.png"
                alt="CSS Logo"
                width={320}
                height={320}
                className="w-48 h-48 md:w-120 md:h-120"
                priority
            />
        </div>

    </section>
);

export default TitleSection;
