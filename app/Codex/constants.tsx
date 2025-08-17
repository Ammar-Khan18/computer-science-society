import { Code, Users, Award, Rocket } from "lucide-react";

interface Events {
  name: string;
  detail: string;
  link: string;
}

interface Data {
    icon: React.ReactNode;
    title: string;
    desc: string;
}

const events: Events[] = [
  { name: "Intro to Python", detail: "A beginner-friendly session on Python basics.", link: "https://example.com/python-session" },
  { name: "Hackathon 2025", detail: "Annual coding competition with exciting prizes.", link: "https://example.com/hackathon" },
  { name: "Web Dev Bootcamp", detail: "Learn modern web development from scratch.", link: "" },
];

const data: Data[] = [
    {
        icon: (
            <span className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100">
                <Code className="w-8 h-8 text-blue-600" />
            </span>
        ),
        title: "Coding Sessions",
        desc: "Hands-on workshops and coding challenges for all levels.",
    },
    {
        icon: (
            <span className="flex items-center justify-center w-14 h-14 rounded-full bg-green-100">
                <Users className="w-8 h-8 text-green-600" />
            </span>
        ),
        title: "Community",
        desc: "Connect with fellow tech enthusiasts and mentors.",
    },
    {
        icon: (
            <span className="flex items-center justify-center w-14 h-14 rounded-full bg-yellow-100">
                <Award className="w-8 h-8 text-yellow-600" />
            </span>
        ),
        title: "Competitions",
        desc: "Participate in exciting coding competitions and win prizes.",
    },
    {
        icon: (
            <span className="flex items-center justify-center w-14 h-14 rounded-full bg-purple-100">
                <Rocket className="w-8 h-8 text-purple-600" />
            </span>
        ),
        title: "Growth",
        desc: "Expand your skills and portfolio through real projects.",
    },
];

export { data, events };