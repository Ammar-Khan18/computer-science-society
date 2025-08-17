import * as React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

const whatsappLink = "https://chat.whatsapp.com/your-group-link";

const CodexJoin: React.FC = () => (
  <section className="flex flex-col items-center my-30 py-10 px-4 md:px-12">
    <h2 className="font-heading text-2xl md:text-3xl colour-text mb-6 text-center tracking-tight">Ready to Join the Community?</h2>
    <Button
      asChild
      variant="default"
      className="flex items-center gap-2 font-text text-lg px-7 py-4 rounded-xl shadow-xl font-text colour-text hover:scale-[1.04] transition-transform duration-200"
    >
      <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="w-6 h-6 mr-2" />
        <span className="font-text">Join WhatsApp Community</span>
      </Link>
    </Button>
  </section>
);

export default CodexJoin;
