import * as React from "react";
import Image from "next/image";

const developers = [
  { name: "Abdullah Tariq", img: "/Home/Abdullah.jpg" },
  { name: "Nawail Khan", img: "/Home/dev2.jpg" },
  { name: "Ammar Khan", img: "/Home/dev3.jpg" },
];

const DevelopersSection: React.FC = () => (
  <section className="py-12 px-4 md:px-12 mt-30 min-h-[500px]">
    <h2 className="font-heading text-3xl md:text-4xl colour-text mb-10 text-center">Meet the Developers</h2>
    <div className="flex flex-wrap justify-center gap-20 md:mt-15">
      {developers.map((dev) => (
        <div key={dev.name} className="flex flex-col items-center">
          <Image src={dev.img} alt={dev.name} width={120} height={120} className="rounded-full border-4 border-[#dddbff] w-32 h-32 md:w-40 md:h-40 object-cover mb-2" />
          <span className="font-text text-lg colour-text text-center">{dev.name}</span>
        </div>
      ))}
    </div>
  </section>
);
const DescriptionSection: React.FC = () => (
  <section className="flex flex-col md:flex-row items-center justify-between py-12 px-4 md:px-12 md:ml-20 gap-8 mt-20">
    <div className="flex-1 order-1">
      <h2 className="font-heading text-3xl md:text-4xl colour-text mb-10 mx-4 md:mx-0">About the Society</h2>
      <p className="font-text text-sm md:text-md colour-text text-justify tracking-tight mx-4 md:mx-0">
        The IBA Computer Science Society is a vibrant community of tech enthusiasts, coders, and innovators. We organize workshops, hackathons, and networking events to foster learning and collaboration among students passionate about computer science and technology.
      </p>

    </div>
    <div className="flex-1 flex justify-center items-center order-2 md:mt-6">
      <Image src="/Home/Home1.jpg" alt="Society" width={320} height={320} className="rounded-xl border-2 border-[var(--colour-secondary)] w-78 h-48 md:w-110 md:h-80 object-cover" />
    </div>
  </section>
);

export default DevelopersSection;
