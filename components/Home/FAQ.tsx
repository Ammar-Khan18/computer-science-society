import * as React from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import faqs from "@/app/constants";

const FAQ: React.FC = () => (
  <section className="py-16">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">

        {/* Left column: heading and subheading */}
        <div className="mx-4 md:mx-0 flex flex-col justify-start md:max-w-[70%]">
          <h2 className="font-heading colour-text text-3xl md:text-4xl mb-4">Frequently asked questions</h2>
          <p className="mb-8 text-lg colour-text">
            Can&apos;t find the answer you&apos;re looking for? Reach out to our{" "}
            <Link href="mailto:ComputerSciencesSociety@khi.iba.edu.pk" className="text-amber-500 font-medium hover:underline">team</Link>.
          </p>
        </div>

        {/* Right column: questions and answers */}
        <div className="flex flex-col gap-6 mx-4 md:mx-0">
          {faqs.map((faq, idx) => (
            <div key={idx}>
              <h3 className="font-heading text-xl colour-accent mb-2">{faq.question}</h3>
              <p className="colour-text leading-relaxed">{faq.answer}</p>
              <Separator className="my-3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FAQ;