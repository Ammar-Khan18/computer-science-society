import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ProBattle: React.FC = () => (
  <section className="flex flex-col md:flex-row items-center justify-between py-12 px-4 md:px-12 md:ml-20 gap-8 mt-20">
    <div className="flex-1 order-1">
      <h2 className="font-heading text-3xl md:text-4xl colour-text mb-10 mx-4 md:mx-0">
        ProBattle `26
        <span className="pointer-events-none select-none inline-block align-middle mr-2 mt-2" style={{ verticalAlign: "middle" }}>
          <Image
            src="/Home/ProBattle.png"
            alt="Robot"
            width={32}
            height={32}
            className="w-15 h-15"
            style={{ transform: "translateY(-10%)" }}
          />
        </span>
      </h2>
      <p className="font-text text-sm md:text-md colour-text text-justify tracking-tight mx-4 md:mx-0">
        Join a supportive network of peers and mentors who are dedicated to helping each other succeed. Our society is the perfect place to learn, share, and grow together in the world of computer science.
        Join a supportive network of peers and mentors who are dedicated to helping each other succeed. Our society is the perfect place to learn, share, and grow together in the world of computer science.
        Join a supportive network of peers and mentors who are dedicated to helping each other succeed. Our society is the perfect place to learn, share, and grow together in the world of computer science.
      </p>
      
      <Button asChild variant="default" className="mt-4 ml-4 md:ml-0 md:mt-4 font-text text-sm colour-box-secondry colour-text flex items-center gap-2">
        <Link className="hover:underline flex items-center gap-2" href="/ProBattle">
          Discover More
          <ArrowRight className="w-4 h-4" />
        </Link>
      </Button>
    </div>
    <div className="flex-1 flex justify-center items-center order-2 md:mt-6">
      <Image src="/Home/Home3.jpg" alt="Society" width={320} height={320} className="rounded-xl border-2 border-[var(--colour-secondary)] w-78 h-48 md:w-110 md:h-80 object-cover" />
    </div>
  </section>
);

export default ProBattle;

