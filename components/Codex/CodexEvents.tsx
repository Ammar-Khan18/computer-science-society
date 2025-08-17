import * as React from "react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface Events {
  name: string;
  detail: string;
  link: string;
}

interface CodexEventsProps {
  events: Events[];
}


const CodexEvents: React.FC<CodexEventsProps> = ({ events }) => (
  <section className="py-8 pb-40 px-4 md:px-12">
    <h2 className="font-heading text-3xl md:text-5xl colour-text mb-10 text-center">Past Sessions & Events</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {events.length === 0 ? (
        Array.from({ length: 2 }).map((_, index) => (
          <div key={index} className="flex flex-col space-y-3">
            <Skeleton className="h-[150px] w-full mx-auto" />
            <Skeleton className="h-[50px] w-full mx-auto" />
          </div>
        ))
      ) : (
        events.map((event) => (
          <Card key={event.name} className="flex flex-col p-6 rounded-xl shadow-md colour-box-secondary">
            <h3 className="font-heading text-xl text-black mb-2">{event.name}</h3>
            <p className="font-text text-sm text-black mb-2">{event.detail}</p>
            {event.link && (
              <Link href={event.link} target="_blank" rel="noopener noreferrer" className="flex font-heading items-center gap-1 text-sm colour-primary hover:underline">
                View Details <ExternalLink className="w-4 h-4" />
              </Link>
            )}
          </Card>
        ))
      )}
    </div>
  </section>
);

export default CodexEvents;
