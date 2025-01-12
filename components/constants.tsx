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
}

// Event Data
const UniversityEvents: Event[] = [
    {
        id: 1,
        title: "Machine Learning",
        details: "A field focused on creating algorithms that can learn and improve from experience. Involves training models on data to make predictions and decisions, using techniques like neural networks and regression.",
        minMember: 1,
        maxMember: 3,
        pricingEarly: 1500,
        pricingLate: 2000,
        category:  "University",
    },
    {
        id: 2,
        title: "App Development",
        details: "The process of creating software applications for mobile and web platforms. Encompasses frontend and backend development, user interface design, and deployment across different operating systems.",
        minMember: 1,
        maxMember: 3,
        pricingEarly: 1500,
        pricingLate: 2000,
        category: "University",
    },
    {
        id: 3,
        title: "Natural Language Processing",
        details: "Technology that enables computers to understand, interpret, and generate human language. Uses algorithms to analyze text, perform translation, sentiment analysis, and create chatbots.",
        minMember: 1,
        maxMember: 3,
        pricingEarly: 1500,
        pricingLate: 2000,
        category: "University",
    },
    {
        id: 4,
        title: "Business Intelligence",
        details: "Analyzing business data to make informed decisions. Uses data visualization, reporting tools, and analytics to derive meaningful insights.",
        minMember: 1,
        maxMember: 3,
        pricingEarly: 1500,
        pricingLate: 2000,
        category: "University",
    },
    {
        id: 5,
        title: "Competitive Programming (Code)",
        details: "Problem-solving challenges where participants write efficient code to solve algorithmic puzzles. Tests speed, accuracy, and optimization skills under time constraints.",
        minMember: 1,
        maxMember: 2,
        pricingEarly: 1500,
        pricingLate: 2000,
        category: "University",
    },
    {
        id: 6,
        title: "Speed Debugging (Code)",
        details: "The Science Fair is a high school science competition that is held annually in the spring. It is a great opportunity for students to showcase their skills in science and engineering.",
        minMember: 1,
        maxMember: 2,
        pricingEarly: 1500,
        pricingLate: 2000,
        category: "University",
    },
    {
        id: 7,
        title: "Query Quest (Database)",
        details: "Creating efficient and organized data storage systems. Involves designing schemas, relationships, and optimizing queries for data management.",
        minMember: 1,
        maxMember: 3,
        pricingEarly: 1500,
        pricingLate: 2000,
        category: "University",
    },
    {
        id: 8,
        title: "Cyber Security",
        details: "Protecting systems and networks from digital attacks. Includes penetration testing, vulnerability assessment, and implementing security measures.",
        minMember: 1,
        maxMember: 3,
        pricingEarly: 1500,
        pricingLate: 2000,
        category: "University",
    },
];

const CollegeEvents: Event[] = [
    {
        id: 1,
        title: "Competitive Programming (No Code)",
        details: "Writing algorithms in plain English or simplified notation before actual coding. Helps in planning program logic and structure without worrying about syntax.",
        minMember: 1,
        maxMember: 2,
        pricingEarly: 1500,
        pricingLate: 2000,
        category: "College",
    },
    {
        id: 2,
        title: "Speed Debugging (No Code)",
        details: "The Math Competition is a high school math competition that is held annually in the fall. It is a great opportunity for students to showcase their skills in math and engineering.",
        minMember: 1,
        maxMember: 2,
        pricingEarly: 1500,
        pricingLate: 2000,
        category: "College",
    },
];

const MixEvents: Event[] = [
    {
        id: 1,
        title: "UI/UX Design",
        details: "Creating user-friendly and visually appealing interfaces. Focuses on user research, wireframing, and designing intuitive interactions.",
        minMember: 1,
        maxMember: 3,
        pricingEarly: 1500,
        pricingLate: 2000,
        category: "University + College",
    },
    {
        id: 2,
        title: "Robotics (Robo Sumo)",
        details: "A robotics competition where autonomous robots attempt to push opponents out of a circular ring. Tests robot design, stability, and strategic programming.",
        minMember: 1,
        maxMember: 3,
        pricingEarly: 1500,
        pricingLate: 2000,
        category: "University + College",
    },
    {
        id: 3,
        title: "Robotics (Robo Soccer)",
        details: "Robots compete in teams to play soccer, requiring precise movement control and coordination. Involves sensors, real-time decision making, and multi-robot cooperation.",
        minMember: 1,
        maxMember: 3,
        pricingEarly: 1500,
        pricingLate: 2000,
        category: "University + College",
    },
    {
        id: 4,
        title: "Robotics (Line Following Robot)",
        details: "Autonomous robots that detect and follow a line path using sensors. Tests precise motor control and sensor calibration for smooth navigation.",
        minMember: 1,
        maxMember: 3,
        pricingEarly: 1500,
        pricingLate: 2000,
        category: "University + College",
    },
    {
        id: 5,
        title: "Tech Tank",
        details: "A competition format similar to ''Shark Tank'' where participants pitch innovative technical solutions or products. Teams present their ideas and prototypes to judges for evaluation.",
        minMember: 1,
        maxMember: 4,
        pricingEarly: 2500,
        pricingLate: 3000,
        category: "University + College",
    },
    {
        id: 6,
        title: "BlockChain Trading",
        details: "Understanding and implementing cryptocurrency trading strategies. Involves blockchain technology, smart contracts, and market analysis.",
        minMember: 1,
        maxMember: 3,
        pricingEarly: 2500,
        pricingLate: 3000,
        category: "University + College",
    },
    {
        id: 7,
        title: "FIFA",
        details: "A popular soccer video game where players control virtual teams and compete against each other. Requires skill in gameplay mechanics, strategy, and team management.",
        minMember: 1,
        maxMember: 1,
        pricingEarly: 1000,
        pricingLate: 1500,
        category: "University + College",
    },
    {
        id: 8,
        title: "Tekken",
        details: "A fighting game where players compete in one-on-one battles. Requires quick reflexes, strategic thinking, and mastery of character movesets.",
        minMember: 1,
        maxMember: 1,
        pricingEarly: 1000,
        pricingLate: 1500,
        category: "University + College",
    },
];

export { UniversityEvents, CollegeEvents, MixEvents };
