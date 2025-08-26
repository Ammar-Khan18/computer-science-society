import * as React from "react";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const socials = [
  { icon: FaFacebook, href: "https://www.facebook.com/share/16zYAU4tV3/", label: "Facebook" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/company/iba-computer-science-society/", label: "LinkedIn" },
  { icon: FaInstagram, href: "https://www.instagram.com/css.iba", label: "Instagram" },
];

const DescriptionSection: React.FC = () => (
  <section className="flex flex-col md:flex-row items-center justify-between py-12 px-4 md:px-12 md:ml-20 gap-8 mt-20">
    <div className="flex-1 order-1 relative">
      <h2 className="font-heading text-3xl md:text-4xl colour-text mb-10 mx-4 md:mx-0 relative z-10">
        About the Society
        <span className="absolute -top-0 right-1 md:-top-2 md:right-70 -z-1 pointer-events-none select-none">
          <Image
            src="/Home/Robot.png"
            alt="Robot"
            width={80}
            height={80}
            className="opacity-70 md:w-40 md:h-40 w-25 h-25"
            style={{ transform: "translateY(-50%)" }}
          />
        </span>
      </h2>

      <p className="font-text text-sm md:text-md colour-text text-justify tracking-tight mx-4 md:mx-0">
        The <span className="text-amber-500">IBA Computer Science Society (CSS)</span> is the premier platform for students of the School of Mathematics and Computer Science (SMCS) at IBA. 
        Since its establishment in 2013, CSS has been dedicated to fostering a strong foundation in computing, equipping students with essential technical skills, and nurturing a vibrant community of tech enthusiasts, coders, and innovators.
      </p>

      <p className="font-text mt-4 text-sm md:text-md colour-text text-justify tracking-tight mx-4 md:mx-0">
        Through flagship events like <span className="text-amber-500">ProBattle</span>, one of Pakistan&apos;s largest competitive programming contests, as well as hands-on workshops, hackathons, and networking sessions, CSS creates opportunities for students to learn, collaborate, and grow. 
        Driven by innovation and a passion for technology, the society continues to empower its members and expand its impact within and beyond IBA.
      </p>

      <div className="flex space-x-4 mt-4 mx-4 md:mx-0">
        {socials.map(({ icon: Icon, href, label }) => (
          <Link key={label} href={href} target="_blank" rel="noopener noreferrer" className="text-[var(--colour-text)] hover:text-[var(--colour-accent)] transition-colors">
            <Icon className="w-6 h-6" />
          </Link>
        ))}
      </div>

    </div>
    <div className="flex-1 flex justify-center items-center order-2 md:mt-6">
      <Image src="/Home/About.jpg" alt="Society" width={320} height={320} className="rounded-xl border-2 border-[var(--colour-secondary)] w-78 h-48 md:w-110 md:h-80 object-cover" />
    </div>
  </section>
);

export default DescriptionSection;
