import tripPlanner from "../../assets/tripPlanner.png";
import movieSelector from "../../assets/movie-selector-home.png";
import portfoliopic from "../../assets/portfolio-2025-pic.png"
import pluvioFlow from "../../assets/pluvioFlow.png"
import eOn from "../../assets/e.on.png"

export const PortData = [
    {
        projectName: 'PluvioFlow',
        pageLink: 'https://www.pluvioflow.com/',
        image: pluvioFlow,
        type: 'Professional Experience',
        overview: 
            'Worked on the development of PluvioFlow\'s production website, focusing on improving structure, user flow, and overall user experience.',
        problem: 
            'The website needed a clearer structure and more intuitive navigation to better communicate the company\'s services and improve usability.',
        role: [
            'Improved overall site structure and content flow',
            'Developed and refined frontend components',
            'Focused on creating a more intuitive and user-friendly experience'
        ],
        tech: [
            'React',
            'JavaScript',
            'HTML',
            'Vite', 
            'Tailwind CSS'
        ],
        challenges: [
            'Organizing content in a clear and scalable way',
            'Balancing design, usability, and performance',
            'Working within an existing codebase'
        ],
        solution: [
            'Restructured layout and navigation to improve user flow',
            'Simplified and clarified content presentation',
            'Focused on clean, maintainable frontend implementation'
        ],
        result: [
            'More intuitive and cohesive user experience',
            'Improved clarity of company services',
            'Stronger overall usability of the site'
        ],
        nextSteps: 
            'Continuing collaboration through a final exam project to design and build an error reporting pipeline for improved system monitoring and debugging.'
    },
     {
        projectName: 'E.ON – Outage Data Management System',
        pageLink: '',
        image: eOn,
        type: 'Professional Experience',
       overview: 
        'Worked on an internal system to streamline and standardize the transfer of planned outage data to Svenska kraftnät, improving the efficiency and reliability of critical infrastructure communication.',

    problem: 
        'The process of transferring planned outage data needed to be more efficient, reliable, and standardized to ensure accurate communication between internal systems and external stakeholders.',

    role: [
        'Developed frontend features and user interfaces',
        'Integrated APIs to handle and display outage data',
        'Contributed to backend development and data handling',
        'Worked across the full stack to support system functionality'
    ],

    tech: [
        'React',
        'TypeScript',
        'Vite',
        'Zustand',
        'Tailwind',
        'shadcn',
        'C#',
        '.NET'
    ],

    challenges: [
        'Working with complex data structures related to infrastructure systems',
        'Ensuring reliable data flow between internal and external systems',
        'Balancing usability with technical constraints',
        'Collaborating within an existing system architecture'
    ],

    solution: [
        'Built and improved frontend components for clearer data presentation',
        'Integrated APIs to support real-time and structured data flow',
        'Contributed to backend logic for handling and processing outage data',
        'Improved overall usability and reliability of the system'
    ],

    result: [
        'More efficient and standardized data transfer process',
        'Improved reliability in communication with Svenska kraftnät',
        'Enhanced usability for handling complex outage data',
        'Contributed to a more robust and maintainable system'
    ],
        nextSteps: 
            'Future updates could include route optimization, accommodation suggestions, and budget planning tools.'
    },
];