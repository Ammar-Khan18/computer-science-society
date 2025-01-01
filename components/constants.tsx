// Purpose: Contains the constants used in the application.


interface Event {
    id: number;
    title: string;
    details: string;
    members: number;
    link: string;
}

interface NewEvents {
    id: number;
    title: string;
    details: string;
    members: number;
    link: string;
}

const events: Event[] = [
    {
        id : 1,
        title: "Competitive Programming",
        details: "Details of the event will be added here as long as the description is not too long.",
        members: 5,
        link: "https://www.google.com",
    },
    {
        id : 2,
        title: "Speed Debugging",
        details: "Details of the event will be added here as long as the description is not too long.",
        members: 7,
        link: "https://www.google.com",
    },
    {
        id : 3,
        title: "Pseudo War",
        details: "Details of the event will be added here as long as the description is not too long.",
        members: 3,
        link: "https://www.google.com",
    },
    {
        id : 4,
        title: "Database Design",
        details: "Details of the event will be added here as long as the description is not too long.",
        members: 4,
        link: "https://www.google.com",
    },
    {
        id : 5,
        title: "Code In The Dark",
        details: "Details of the event will be added here as long as the description is not too long.",
        members: 6,
        link: "https://www.google.com",
    },
    {
        id : 6,
        title: "UI/UX Design",
        details: "Details of the event will be added here as long as the description is not too long.",
        members: 2,
        link: "https://www.google.com",
    },
    {
        id : 7,
        title: "App Development",
        details: "Details of the event will be added here as long as the description is not too long.",
        members: 8,
        link: "https://www.google.com",
    },
    {
        id : 8,
        title: "hackathon",
        details: "Details of the event will be added here as long as the description is not too long.",
        members: 4,
        link: "https://www.google.com",
    },
    {
        id : 9,
        title: "ML showdown",
        details: "Details of the event will be added here as long as the description is not too long.",
        members: 5,
        link: "https://www.google.com",
    },
    {
        id : 10,
        title: "Shark Tank",
        details: "Details of the event will be added here as long as the description is not too long.",
        members: 3,
        link: "https://www.google.com",
    },
    {
        id : 11,
        title: "FIFA",
        details: "Details of the event will be added here as long as the description is not too long.",
        members: 6,
        link: "https://www.google.com",
    },
    {
        id : 12,
        title: "Capture The Flag",
        details: "Details of the event will be added here as long as the description is not too long.",
        members: 4,
        link: "https://www.google.com",
    }
];

const newevents: NewEvents[] = [
    {
        id : 1,
        title: "AI Bot Battle",
        details: "Details of the event will be added here as long as the description is not too long.",
        members: 5,
        link: "https://www.google.com",
    },
    {
        id : 2,
        title: "Code Refactoring Sprint",
        details: "Details of the event will be added here as long as the description is not too long.",
        members: 7,
        link: "https://www.google.com",
    },
    {
        id : 3,
        title: "Web Scraping Challenge",
        details: "Details of the event will be added here as long as the description is not too long.",
        members: 3,
        link: "https://www.google.com",
    },
    {
        id : 4,
        title: "Creative Coding Art",
        details: "Details of the event will be added here as long as the description is not too long.",
        members: 4,
        link: "https://www.google.com",
    },
];

const robotics: NewEvents[] = [
    {
        id : 1,
        title: "Line Following Robot",
        details: "Details of the event will be added here as long as the description is not too long.",
        members: 5,
        link: "https://www.google.com",
    },
    {
        id : 2,
        title: "Robo Soccer",
        details: "Details of the event will be added here as long as the description is not too long.",
        members: 7,
        link: "https://www.google.com",
    },
    {
        id : 3,
        title: "Robo Rumble",
        details: "Details of the event will be added here as long as the description is not too long.",
        members: 3,
        link: "https://www.google.com",
    },
    {
        id : 4,
        title: "Robo War light Weight",
        details: "Details of the event will be added here as long as the description is not too long.",
        members: 4,
        link: "https://www.google.com",
    },
];

const highschool: NewEvents[] = [
    {
        id : 1,
        title: "Scratch Off Coding",
        details: "Details of the event will be added here as long as the description is not too long.",
        members: 5,
        link: "https://www.google.com",
    },
    {
        id : 2,
        title: "Binary Treasure Hunt",
        details: "Details of the event will be added here as long as the description is not too long.",
        members: 7,
        link: "https://www.google.com",
    },
    {
        id : 3,
        title: "Encryption Relay",
        details: "Details of the event will be added here as long as the description is not too long.",
        members: 3,
        link: "https://www.google.com",
    },
    {
        id : 4,
        title: "LED Coding",
        details: "Details of the event will be added here as long as the description is not too long.",
        members: 4,
        link: "https://www.google.com",
    },
];

export { events, newevents, robotics, highschool };