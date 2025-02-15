// Purpose: Contains the constants used in the application.


interface Event {
    id: number;
    title: string;
    details: string;
    minMember: number;
    maxMember: number;
    pricingEarly: number;
    pricingLate: number;
    category: "College" | "University" | "University + College";
    Tier: "1" | "2" | "3";
    rulebook?: string;
    status: "Open" | "Filled";
}

// Event Data
const UniversityEvents: Event[] = [
    {
        id: 1,
        title: "Machine Learning",
        details: "Participants will build or refine machine learning models to solve specific tasks, such as classification, regression, or clustering. They will need to demonstrate skills in data preprocessing, model training, and evaluation.",
        minMember: 1,
        maxMember: 3,
        pricingEarly: 1500,
        pricingLate: 2000,
        category:  "University",
        Tier: "1",
        rulebook: "https://drive.google.com/file/d/1MRPVIlhy1gGq8tjMJaNiz_vFf4td3FUL/view?usp=sharing",
        status: "Open",
    },
    {
        id: 2,
        title: "Web Development",
        details: "The process of creating web applications responsive for all device sizes. Encompasses frontend and backend development, user interface design, and deployment strategies.",
        minMember: 1,
        maxMember: 3,
        pricingEarly: 1500,
        pricingLate: 2000,
        category: "University",
        Tier: "1",
        rulebook: "https://drive.google.com/file/d/1hFLHBYPufoBnUttpUQun_dHHA6fHhWXO/view?usp=sharing",
        status: "Filled",
    },
    {
        id: 3,
        title: "Natural Language Processing",
        details: "This module involves working on tasks related to text analysis, chatbots, or other NLP applications. Participants will explore techniques such as tokenization, sentiment analysis, and language modeling to solve real-world language processing problems.",
        minMember: 1,
        maxMember: 3,
        pricingEarly: 1500,
        pricingLate: 2000,
        category: "University",
        Tier: "1",
        rulebook: "https://github.com/YahyaAhmedKhan/nlp-guide",
        status: "Open",
    },
    {
        id: 4,
        title: "Business Intelligence",
        details: "Participants will analyze datasets to derive actionable insights using BI tools. They will work on data visualization, report generation, and predictive analytics, aiming to make data-driven decisions that can impact businesses positively.",
        minMember: 1,
        maxMember: 3,
        pricingEarly: 1500,
        pricingLate: 2000,
        category: "University",
        Tier: "1",
        rulebook: "https://drive.google.com/file/d/1PQ12eIxP93DdvD9TOXVzcK1eb9cNPRIP/view?usp=sharing",
        status: "Open",
    },
    {
        id: 5,
        title: "Competitive Programming (Code)",
        details: "Problem-solving challenges where participants write efficient code to solve algorithmic puzzles. Tests speed, accuracy, and optimization skills under time constraints. Participants will solve algorithmic problems using programming languages like C++, Java, or Python.",
        minMember: 1,
        maxMember: 2,
        pricingEarly: 1500,
        pricingLate: 2000,
        category: "University",
        Tier: "2",
        rulebook: "https://drive.google.com/file/d/1ES3iYFl_UE5an2q8GH6ZbITWaZ87zBW_/view?usp=sharing",
        status: "Filled",
    },
    {
        id: 6,
        title: "Speed Debugging (Code)",
        details: "Participants will be given code with bugs and are required to debug and correct it using traditional coding environments. They must quickly identify issues in syntax, logic, or runtime to ensure proper functionality.",
        minMember: 1,
        maxMember: 2,
        pricingEarly: 1500,
        pricingLate: 2000,
        category: "University",
        Tier: "3",
        rulebook: "https://drive.google.com/file/d/18efuLXMtfo-3_InOI7kjMCHd2n9Yg2Bh/view?usp=sharing",
        status: "Open",
    },
    {
        id: 7,
        title: "Query Quest (Database)",
        details: "Participants will be tasked with creating efficient and innovative database schemas. They will focus on optimizing data storage, retrieval, and ensuring the design adheres to best practices like normalization, indexing, and scalability.",
        minMember: 1,
        maxMember: 3,
        pricingEarly: 1500,
        pricingLate: 2000,
        category: "University",
        Tier: "2",
        rulebook: "https://drive.google.com/file/d/1xnNYNRSR3B6cL9LqcQLHyF8CjpR8nFhl/view?usp=sharing",
        status: "Open",
    },
    {
        id: 8,
        title: "Cyber Security - Capture the Flag",
        details: "Participants will write scripts, exploit code, and use programming skills to solve challenges, find vulnerabilities, and capture flags in a simulated cybersecurity environment.",
        minMember: 1,
        maxMember: 3,
        pricingEarly: 1500,
        pricingLate: 2000,
        category: "University",
        Tier: "2",
        rulebook: "https://drive.google.com/file/d/1cuoMsaW2CVIxOsyBrT9r7yOSB8WrVsso/view?usp=sharing",
        status: "Open",
    },
    {
        id: 9,
        title: "UI/UX Design",
        details: "This module challenges participants to design engaging, intuitive, and user-friendly interfaces. They will need to demonstrate an understanding of user experience principles, visual design aesthetics, and usability best practices.",
        minMember: 1,
        maxMember: 3,
        pricingEarly: 1500,
        pricingLate: 2000,
        category: "University + College",
        Tier: "3",
        rulebook: "https://drive.google.com/file/d/1gg_5CVYDQ3L9AIpnVbSZEiAk3RfTQClx/view?usp=sharing",
        status: "Open",
    },
    {
        id: 10,
        title: "Robotics (Lightweight Robo War)",
        details: "Participants will design, build, and program lightweight robots to compete in a battle arena. The objective is to disable or push the opponent’s robot out of the designated area. This module tests mechanical design, durability, programming for strategic combat, and control mechanisms.",
        minMember: 1,
        maxMember: 3,
        pricingEarly: 2500,
        pricingLate: 3000,
        category: "University + College",
        Tier: "3",
        rulebook: "https://drive.google.com/file/d/1KRsPCC15dx_guwDp9tmNl_R4qZNbRBmt/view?usp=drive_link",
        status: "Open",
    },
    {
        id: 11,
        title: "Robotics (Robo Soccer)",
        details: "In Robo Soccer, participants will create and program robots to play a game of soccer. Teams will need to design robots capable of maneuvering, passing, and shooting the ball into the opponent's goal. The module emphasizes coordination, precision, and tactical programming to simulate real soccer gameplay.",
        minMember: 1,
        maxMember: 3,
        pricingEarly: 2500,
        pricingLate: 3000,
        category: "University + College",
        Tier: "3",
        rulebook: "https://drive.google.com/file/d/1I0X4BL2lHz3NxINtHhB5d6mwccA_O3Ef/view?usp=drive_link",
        status: "Open",
    },
    {
        id: 12,
        title: "Robotics (Line Following Robot)",
        details: "Participants will build and program robots to navigate a course by following a designated line. The challenge is to optimize the robot's sensors and control algorithms for speed and accuracy. This module focuses on sensor integration, path-following algorithms, and efficient programming to complete the course in the shortest time possible.",
        minMember: 1,
        maxMember: 3,
        pricingEarly: 2500,
        pricingLate: 3000,
        category: "University + College",
        Tier: "3",
        rulebook: "https://drive.google.com/file/d/1Zl40Kc7JuekfXtF9kFat5r0_jgFwZJQ7/view?usp=drive_link",
        status: "Open",
    },
    {
        id: 13,
        title: "Tech Tank",
        details: "Participants will pitch innovative tech solutions to real-world problems in a competitive environment, akin to a startup pitch. Teams will present their ideas to a panel of judges, focusing on the technical feasibility, market potential, and overall impact of their solutions. This module emphasizes creativity, business acumen, and presentation skills.",
        minMember: 1,
        maxMember: 4,
        pricingEarly: 2500,
        pricingLate: 3000,
        category: "University + College",
        Tier: "3",
        rulebook: "https://docs.google.com/document/d/1Z7wQq1Bpviw_ycM9Ayq2UcT9SowZKET-/edit?usp=sharing&ouid=107570660791762691660&rtpof=true&sd=true",
        status: "Open",
    },
    {
        id: 14,
        title: "Trading",
        details: "In this module, participants will engage in real-time mock stock trading, simulating the dynamic environment of the stock market. They will analyze live data, develop and execute trading strategies, and respond to market fluctuations. The focus will be on understanding market trends, practicing risk management, and leveraging financial analytics to make informed trading decisions.",
        minMember: 1,
        maxMember: 3,
        pricingEarly: 2500,
        pricingLate: 3000,
        category: "University + College",
        Tier: "3",
        rulebook: "#",
        status: "Filled",
    },
    {
        id: 15,
        title: "FIFA",
        details: "Participants will compete in a FIFA video game tournament, showcasing their skills in virtual soccer. Players will need to demonstrate tactical gameplay, quick decision-making, and mastery of the game mechanics to outplay their opponents and advance through the rounds.",
        minMember: 1,
        maxMember: 1,
        pricingEarly: 1000,
        pricingLate: 1500,
        category: "University + College",
        Tier: "3",
        rulebook: "#",
        status: "Open",
    },
    {
        id: 16,
        title: "Tekken",
        details: "In this Tekken module, participants will engage in intense one-on-one battles in the popular fighting game. Players must utilize character-specific moves, combos, and strategies to defeat their opponents. The tournament emphasizes reflexes, strategy, and deep knowledge of the game’s mechanics to claim victory.",
        minMember: 1,
        maxMember: 1,
        pricingEarly: 1000,
        pricingLate: 1500,
        category: "University + College",
        Tier: "2",
        rulebook: "#",
        status: "Filled",
    },
];

const CollegeEvents: Event[] = [
    {
        id: 1,
        title: "Competitive Programming (No Code)",
        details: "Participants will solve logical and algorithmic puzzles using flowcharts, pseudocode, or drag-and-drop programming interfaces. The focus is on conceptual problem-solving without writing actual code.",
        minMember: 1,
        maxMember: 2,
        pricingEarly: 1500,
        pricingLate: 2000,
        category: "College",
        Tier: "2",
        rulebook: "#",
        status: "Open",
    },
    {
        id: 2,
        title: "Speed Debugging (No Code)",
        details: "Participants will debug logic flows or identify errors in visual programming or GUI-based applications. They will focus on understanding the workflow and fixing logical issues without direct coding.",
        minMember: 1,
        maxMember: 2,
        pricingEarly: 1500,
        pricingLate: 2000,
        category: "College",
        Tier: "3",
        rulebook: "#",
        status: "Filled",
    },
    {
        id: 3,
        title: "UI/UX Design",
        details: "Creating user-friendly and visually appealing interfaces. Focuses on user research, wireframing, and designing intuitive interactions.",
        minMember: 1,
        maxMember: 3,
        pricingEarly: 1500,
        pricingLate: 2000,
        category: "University + College",
        Tier: "3",
        rulebook: "https://drive.google.com/file/d/1gg_5CVYDQ3L9AIpnVbSZEiAk3RfTQClx/view?usp=sharing",
        status: "Open",
    },
    {
        id: 4,
        title: "Robotics (Lightweight Robo War)",
        details: "A robotics competition where autonomous robots attempt to push opponents out of a circular ring. Tests robot design, stability, and strategic programming.",
        minMember: 1,
        maxMember: 3,
        pricingEarly: 2500,
        pricingLate: 3000,
        category: "University + College",
        Tier: "3",
        rulebook: "https://drive.google.com/file/d/1KRsPCC15dx_guwDp9tmNl_R4qZNbRBmt/view?usp=drive_link",
        status: "Open",
    },
    {
        id: 5,
        title: "Robotics (Robo Soccer)",
        details: "Robots compete in teams to play soccer, requiring precise movement control and coordination. Involves sensors, real-time decision making, and multi-robot cooperation.",
        minMember: 1,
        maxMember: 3,
        pricingEarly: 2500,
        pricingLate: 3000,
        category: "University + College",
        Tier: "3",
        rulebook: "https://drive.google.com/file/d/1I0X4BL2lHz3NxINtHhB5d6mwccA_O3Ef/view?usp=drive_link",
        status: "Open",
    },
    {
        id: 6,
        title: "Robotics (Line Following Robot)",
        details: "Participants will build and program robots to navigate a course by following a designated line. The challenge is to optimize the robot's sensors and control algorithms for speed and accuracy. This module focuses on sensor integration, path-following algorithms, and efficient programming to complete the course in the shortest time possible.",
        minMember: 1,
        maxMember: 3,
        pricingEarly: 2500,
        pricingLate: 3000,
        category: "University + College",
        Tier: "3",
        rulebook: "https://drive.google.com/file/d/1Zl40Kc7JuekfXtF9kFat5r0_jgFwZJQ7/view?usp=drive_link",
        status: "Open",
    },
    {
        id: 7,
        title: "Tech Tank",
        details: "Participants will pitch innovative tech solutions to real-world problems in a competitive environment, akin to a startup pitch. Teams will present their ideas to a panel of judges, focusing on the technical feasibility, market potential, and overall impact of their solutions. This module emphasizes creativity, business acumen, and presentation skills.",
        minMember: 1,
        maxMember: 4,
        pricingEarly: 2500,
        pricingLate: 3000,
        category: "University + College",
        Tier: "3",
        rulebook: "https://docs.google.com/document/d/1Z7wQq1Bpviw_ycM9Ayq2UcT9SowZKET-/edit?usp=sharing&ouid=107570660791762691660&rtpof=true&sd=true",
        status: "Open",
    },
    {
        id: 8,
        title: "Trading",
        details: "In this module, participants will engage in real-time mock stock trading, simulating the dynamic environment of the stock market. They will analyze live data, develop and execute trading strategies, and respond to market fluctuations. The focus will be on understanding market trends, practicing risk management, and leveraging financial analytics to make informed trading decisions.",
        minMember: 1,
        maxMember: 3,
        pricingEarly: 2500,
        pricingLate: 3000,
        category: "University + College",
        Tier: "3",
        rulebook: "#",
        status: "Filled",
    },
    {
        id: 9,
        title: "FIFA",
        details: "Participants will compete in a FIFA video game tournament, showcasing their skills in virtual soccer. Players will need to demonstrate tactical gameplay, quick decision-making, and mastery of the game mechanics to outplay their opponents and advance through the rounds.",
        minMember: 1,
        maxMember: 1,
        pricingEarly: 1000,
        pricingLate: 1500,
        category: "University + College",
        Tier: "3",
        rulebook: "#",
        status: "Open",
    },
    {
        id: 10,
        title: "Tekken",
        details: "In this Tekken module, participants will engage in intense one-on-one battles in the popular fighting game. Players must utilize character-specific moves, combos, and strategies to defeat their opponents. The tournament emphasizes reflexes, strategy, and deep knowledge of the game’s mechanics to claim victory.",
        minMember: 1,
        maxMember: 1,
        pricingEarly: 1000,
        pricingLate: 1500,
        category: "University + College",
        Tier: "2",
        rulebook: "#",
        status: "Filled",
    },
];

export { UniversityEvents, CollegeEvents };
