import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const CodeX: React.FC = () => (
  <section className="flex flex-col md:flex-row-reverse items-center justify-between py-12 px-4 md:mr-40 gap-8 mt-20">
    <div className="flex-1 order-1">
      <h2 className="font-heading text-3xl md:text-4xl colour-text mb-10 mx-4 md:mx-0">
        CodeX `25
        <span className="pointer-events-none select-none inline-block align-middle mr-2 mt-2" style={{ verticalAlign: "middle" }}>
          <Image
            src="/Home/Codex.png"
            alt="Robot"
            width={32}
            height={32}
            className="w-15 h-15"
            style={{ transform: "translateY(-10%)" }}
          />
        </span>
      </h2>
      <p className="font-text text-[15px] md:text-[17px] colour-text text-justify tracking-tight mx-4 md:mx-0">
        CODEX, an initiative of the IBA Computer Science Society (CSS), is a dynamic tech-driven community bringing together over 300 active members across multiple platforms. 
        It serves as a hub for students to <span className="text-amber-500">learn, collaborate, and showcase their talents</span> in the ever-evolving world of technology.
      </p>

      <p className="font-text mt-4 text-[15px] md:text-[17px] colour-text text-justify tracking-tight mx-4 md:mx-0">
        From <span className="text-amber-500">coding competitions and hackathons to guest lectures and interactive workshops</span>, CODEX provides countless opportunities for growth. 
        By fostering connections and promoting innovation, the community helps its members enhance their technical expertise, build meaningful networks, and stay at the forefront of emerging tech trends.
      </p>

      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button asChild variant="default" className="mt-4 ml-4 md:ml-0 md:mt-4 font-text text-sm colour-box-secondry colour-text flex items-center gap-2">
          <Link className="hover:underline flex items-center gap-2" href="/Codex">
            Read More
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </motion.button>
      
    </div>
    <div className="flex-1 flex justify-center items-center order-2 md:mt-6">
      <Image src="/Home/Codex2.png" alt="Events" width={320} height={320} className="rounded-xl border-2 border-[var(--colour-secondary)] w-84 h-48 md:w-110 md:h-80 object-cover" />
    </div>
  </section>
);

export default CodeX;
