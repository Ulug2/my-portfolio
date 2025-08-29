import vigilwatch1 from './assets/vigilwatch1.png';
import vigilwatch2 from './assets/vigilwatch2.png';
import vigilwatch3 from './assets/vigilwatch3.png';
import tutorAI1 from './assets/tutorAI1.png';
import tutorAI2 from './assets/tutorAI2.png';
import tutorAI3 from './assets/tutorAI3.png';
import tutorAI4 from './assets/tutorAI4.png';
import greaseGallery1 from './assets/greaseGallery1.png';
import greaseGallery2 from './assets/greaseGallery2.png';
import greaseGallery3 from './assets/greaseGallery3.png';
import pettok1 from './assets/pettokLogIn.png'
import pettok2 from './assets/pettokTrips.png'
import pettok3 from './assets/pettokChat.png'
import pettok4 from './assets/pettokProfile.png'
import pettok5 from './assets/pettokLevels.png'
import pettok6 from './assets/pettokVideo.png'
import pettok7 from './assets/pettokMain.png'

// Project data
const projects = [
    {
        id: 'pettokai',
        title: 'PetTok AI Mobile App',
        event: 'Internship',
        date: '2025 Summer',
        description: 'A cross-platform mobile app that redefines dog training by providing structured, AI-powered guidance and an engaging social experience for pet owners.',
        achievements: [
            'Co-developed PetTok AI, an innovative mobile app tackling the high cost, inconvenience, and inconsistency of traditional dog training.',
            'Designed and implemented the React Native front end, including onboarding, authentication, training progress tracking, and interactive course modules.',
            'Integrated with a Python backend and AI chatbot to deliver personalized training plans based on dog breed, age, and behavioral patterns.',
            'Built motivating features such as badges, progress bars, and daily goals to help users stay consistent in training.',
            'Collaborated with a 5-member team to create structured programs (e.g., a first-year puppy onboarding plan) and deliver a working demo.'
        ],
        techStack: ['React Native', 'Python', 'REST API', 'AI Chatbot'],
        images: [pettok1, pettok2, pettok3, pettok4, pettok5, pettok6],
        cover: [pettok7],
        githubLink: 'https://github.com/Jananjiang/PetTok-AI',
        liveLink: 'https://drive.google.com/file/d/1yaNGkXt_3fZHWXm-udKz8q-GbGmoeetH/view?usp=sharing'
    },
    {
        id: 'vigilwatch',
        title: 'VigilWatch Web App',
        event: 'HenHacks',
        date: 'March 2025',
        description: 'A real-time emergency alert web application that allows users to send distress signals with live location.',
        achievements: [
            'Developed a real-time emergency alert web application that allows users to send distress signals with live location.',
            'Implemented user authentication with email, password, and unique usernames to ensure secure access.',
            'Built a RESTful API using Express and Node.js to handle user registration, authentication, and alert management.',
            'Integrated MongoDB for reliable and persistent data storage of user information and alerts.',
            'Incorporated the Google Maps API to display real-time user locations and enhance emergency response coordination.'
        ],
        techStack: ['React', 'Express', 'Node.js', 'MongoDB', 'Google Maps API'],
        images: [vigilwatch1, vigilwatch2, vigilwatch3],
        cover: [vigilwatch2],
        githubLink: 'https://github.com/Ulug2/emergencycall',
        liveLink: 'https://youtu.be/cqjRRSt0LuQ'
    },
    {
        id: 'tutorAI',
        title: 'TutorAI Bot',
        event: 'Personal Project',
        date: 'October 2024',
        description: 'An AI-driven interactive Telegram Bot that delivers personalized learning experiences, real-time assessments, and adaptive feedback to students.',
        achievements: [
            'Engineered a full-featured AI tutoring platform leveraging OpenAI GPT-4 and Java, integrated with Telegram Bot API to create a 24/7 accessible virtual tutor.',
            'Designed adaptive learning roadmaps that adjust to user performance, providing a customized experience across multiple subjects and difficulty levels.',
            'Implemented real-time interactive Q&A and instant feedback, simulating human-like tutoring sessions and significantly enhancing user engagement.',
            'Reduced reliance on traditional human tutoring by creating scalable, cost-effective, and always-available AI support for students.',
            'Optimized system performance and conversational flow to handle complex queries while maintaining accuracy and context in extended learning sessions.'
        ],
        techStack: ['Java', 'OpenAI GPT-4', 'Telegram Bot API'],
        images: [tutorAI4, tutorAI2, tutorAI3],
        cover: [tutorAI4],
        githubLink: 'https://github.com/Ulug2/TutorAI',
        liveLink: 'doesnotexist'
    },
    {
        id: 'greaseGallery',
        title: 'Grease Gallery Website',
        event: 'YCP Hackathon',
        date: 'November 2024',
        description: 'A website for uploading, analyzing, and managing grease sample images.',
        achievements: [
            'Designed and implemented a website for uploading, analyzing, and managing grease sample images.',
            'Developed functionality for color analysis and dataset creation, enabling efficient extraction of color values in various formats and attachment to sample IDs.'
        ],
        techStack: ['React', 'TypeScript', 'Python', 'Image Processing'],
        images: [greaseGallery1, greaseGallery2, greaseGallery3],
        cover: [greaseGallery1],
        githubLink: 'https://github.com/Ulug2/grease-gallery-rasp-web-2',
        liveLink: 'https://grease-gallery-rasp-web.vercel.app/'
    }
];

export default projects;