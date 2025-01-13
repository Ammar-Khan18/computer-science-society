import { Module } from "./types";
    // {
    //     "name": "Spectator",
    //     "description": "Attendee Pass (Individual)",
    //     "modules": [
    //         {
    //             "name": "Open to speaker sessions, workshops, mentor's lounge",
    //             "type": "attendee",
    //             "price": 800,
    //             "minMembers": 1,
    //             "maxMembers": 1,
    //             "start": "12 Jan",
    //             "end": "30 Jan"
    //         }
    //     ]
    // },
export const TieredModules: {name: string, description: string, modules: Module[] | object[]}[] = [

    {
        "name": "Technical Tier 1",
        "description": "University level competition",
        "modules": [
            {
                "name": "Machine Learning",
                "type": "regular",
                "price": 1500,
                "minMembers": 2,
                "maxMembers": 3,
                "start": "12 Jan",
                "end": "30 Jan"
            },
            {
                "name": "App Dev",
                "type": "regular",
                "price": 1500,
                "minMembers": 1,
                "maxMembers": 3,
                "start": "12 Jan",
                "end": "30 Jan"
            },
            {
                "name": "NLP",
                "type": "regular",
                "price": 1500,
                "minMembers": 1,
                "maxMembers": 3,
                "start": "12 Jan",
                "end": "30 Jan"
            },
            {
                "name": "Business Intelligence",
                "type": "regular",
                "price": 1500,
                "minMembers": 1,
                "maxMembers": 3,
                "start": "12 Jan",
                "end": "30 Jan"
            },
            {
                "name": "UI/UX",
                "type": "regular",
                "price": 1500,
                "minMembers": 1,
                "maxMembers": 3,
                "start": "12 Jan",
                "end": "30 Jan",
                "description": "University + College level competition"
            },
            {
                "name": "Robotics Robo Soccer",
                "type": "regular",
                "price": 1500,
                "minMembers": 1,
                "maxMembers": 3,
                "start": "12 Jan",
                "end": "30 Jan",
                "description": "University + College level competition"
            },
            {
                "name": "Robotics LFR",
                "type": "regular",
                "price": 1500,
                "minMembers": 1,
                "maxMembers": 3,
                "start": "12 Jan",
                "end": "30 Jan",
                "description": "University + College level competition"
            }
        ]
    },
    {
        "name": "Technical Tier 2",
        "description": "Code-based competition",
        "modules": [
            {
                "name": "Competitive Programming",
                "type": "regular",
                "price": 1500,
                "minMembers": 1,
                "maxMembers": 2,
                "start": "12 Jan",
                "end": "30 Jan"
            },
            {
                "name": "Speed Debugging (code)",
                "type": "regular",
                "price": 1500,
                "minMembers": 1,
                "maxMembers": 2,
                "start": "12 Jan",
                "end": "30 Jan"
            },
            {
                "name": "Speed Debugging (no code)",
                "type": "regular",
                "price": 1500,
                "minMembers": 1,
                "maxMembers": 2,
                "start": "12 Jan",
                "end": "30 Jan",
                "description": "College-level competition"
            },
            {
                "name": "Query Quest (Database)",
                "type": "regular",
                "price": 1500,
                "minMembers": 1,
                "maxMembers": 2,
                "start": "12 Jan",
                "end": "30 Jan",
                "description": "University-level competition"
            },
            {
                "name": "Cybersecurity",
                "type": "regular",
                "price": 1500,
                "minMembers": 1,
                "maxMembers": 2,
                "start": "12 Jan",
                "end": "30 Jan",
                "description": "University-level competition"
            }
        ]
    },
    {
        "name": "General",
        "description": "University + College level competition",
        "modules": [
            {
                "name": "Tech Tank",
                "type": "regular",
                "price": 2500,
                "minMembers": 1,
                "maxMembers": 4,
                "start": "12 Jan",
                "end": "30 Jan"
            },
            {
                "name": "Trading",
                "type": "regular",
                "price": 2500,
                "minMembers": 1,
                "maxMembers": 4,
                "start": "12 Jan",
                "end": "30 Jan"
            },
            {
                "name": "FIFA",
                "type": "regular",
                "price": 1000,
                "minMembers": 1,
                "maxMembers": 1,
                "start": "12 Jan",
                "end": "30 Jan",
                "description": "Individual competition"
            },
            {
                "name": "Tekken",
                "type": "regular",
                "price": 1000,
                "minMembers": 1,
                "maxMembers": 1,
                "start": "12 Jan",
                "end": "30 Jan",
                "description": "Individual competition"
            }
        ]
    }
];
