import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const members = [
    { name: "Zainab Irfan", position: "CEO", img: "/Home/Zainab.jpg" },
    { name: "Abdullah Tariq", position: "COO", img: "/Home/Abdullah.jpg" },
    { name: "Bisma Kasbati", position: "CFO", img: "/Home/Bisma.jpg" },
];

const TeamSection: React.FC = () => (
  <section className="py-12 px-4 md:px-12 mt-30 min-h-[500px]">
    <h2 className="font-heading text-3xl md:text-4xl colour-text mb-10 text-center">Meet The Team</h2>
    <div className="flex flex-wrap justify-center gap-20 md:mt-15">
      {members.map((dev) => (
        <div key={dev.name} className="flex flex-col items-center">
          <Image src={dev.img} alt={dev.name} width={120} height={120} className="rounded-full border-4 border-[#dddbff] w-32 h-32 md:w-40 md:h-40 object-cover mb-2" />
          <span className="font-text text-lg colour-text text-center">{dev.name}</span>
          <span className="font-text text-sm colour-text text-center">{dev.position}</span>
        </div>
      ))}
    </div>

    <div className="flex flex-col items-center mt-10">
      <span className="font-text text-lg colour-text mb-4">Developed by</span>

      <div className="*:data-[slot=avatar]:ring-amber-600 flex -space-x-1 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:backdrop-grayscale-100">
        <Link href="https://www.linkedin.com/in/abdullahtariq78/" target="_blank" rel="noopener noreferrer">
          <Avatar className="ring-2 ring-amber-600">
            <AvatarImage alt="Abdullah" />
            <AvatarFallback>AT</AvatarFallback>
          </Avatar>
        </Link>
        
        <Link href="https://www.linkedin.com/in/nawail-khan/" target="_blank" rel="noopener noreferrer">
          <Avatar className="ring-2 ring-amber-600">
            <AvatarImage alt="Nawail Khan" />
            <AvatarFallback>NK</AvatarFallback>
          </Avatar>
        </Link>

        <Link href="https://www.linkedin.com/in/ammarbinaamirkhan/" target="_blank" rel="noopener noreferrer">
          <Avatar className="ring-2 ring-amber-600">
            <AvatarImage alt="Ammar Khan" />
            <AvatarFallback>AK</AvatarFallback>
          </Avatar>
        </Link>
      </div>
      
    </div>

  </section>
);

export default TeamSection;
