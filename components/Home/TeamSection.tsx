import * as React from "react";
import Image from "next/image";

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
  </section>
);

export default TeamSection;
