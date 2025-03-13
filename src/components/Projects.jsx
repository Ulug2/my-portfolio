import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style/Projects.css';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Import your project images here
// Make sure these image files exist in your project
import vigilwatch1 from './assets/vigilwatch1.png';
import vigilwatch2 from './assets/vigilwatch2.png';
import vigilwatch3 from './assets/vigilwatch3.png';
import tutorAI1 from './assets/tutorAI1.png';
import tutorAI2 from './assets/tutorAI2.png';
import tutorAI3 from './assets/tutorAI3.png';
import greaseGallery1 from './assets/greaseGallery1.png';
import greaseGallery2 from './assets/greaseGallery2.png';
import greaseGallery3 from './assets/greaseGallery3.png';

const Projects = () => {
    // State to track current slide for each project
    const [currentSlides, setCurrentSlides] = useState({
        vigilwatch: 0,
        tutorAI: 0,
        greaseGallery: 0
    });

    // Project data
    const projects = [
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
            githubLink: 'https://github.com/Ulug2/emergencycall',
            liveLink: 'doesnotexist'
        },
        {
            id: 'tutorAI',
            title: 'TutorAI',
            event: 'Personal Project',
            date: 'October 2024',
            description: 'An intelligent interactive tutoring system powered by AI.',
            achievements: [
                'Developed an AI-powered tutoring platform using OpenAI GPT-4 and Java, integrated with the Telegram Bot API to deliver personalized learning roadmaps, interactive Q&A, and real-time assessments.',
                'Enhanced self-paced education by simulating one-on-one tutoring, reducing dependency on human instructors while improving user confidence in complex subjects.'
            ],
            techStack: ['Java', 'OpenAI GPT-4', 'Telegram Bot API'],
            images: [tutorAI1, tutorAI2, tutorAI3],
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
            techStack: ['HTML/CSS', 'JavaScript', 'Python', 'Image Processing'],
            images: [greaseGallery1, greaseGallery2, greaseGallery3],
            githubLink: 'https://github.com/Ulug2/grease-gallery-rasp-web-2',
            liveLink: 'doesnotexist'
        }
    ];

    // Function to navigate slideshow
    const changeSlide = (projectId, direction) => {
        const project = projects.find(p => p.id === projectId);
        if (!project) return;
        
        setCurrentSlides(prev => {
            const currentIndex = prev[projectId];
            const totalSlides = project.images.length;
            
            let newIndex;
            if (direction === 'next') {
                newIndex = (currentIndex + 1) % totalSlides;
            } else {
                newIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            }
            
            return {
                ...prev,
                [projectId]: newIndex
            };
        });
    };

    return (
        <div className="projects-container">
            <div className="navigation-bar">
                <Link to="/" className="nav-button">
                    <FaArrowLeft /> Back to Home
                </Link>
            </div>
            
            <h1 className="projects-title">My Projects</h1>
            
            <div className="projects-grid">
                {projects.map(project => (
                    <div className="project-card" key={project.id}>
                        <div className="project-slideshow">
                            <div className="slideshow-container">
                                <img 
                                    src={project.images[currentSlides[project.id]]} 
                                    alt={`${project.title} screenshot ${currentSlides[project.id] + 1}`} 
                                    className="project-image"
                                />
                                
                                <button 
                                    className="slideshow-btn prev-btn" 
                                    onClick={() => changeSlide(project.id, 'prev')}
                                    aria-label="Previous slide"
                                >
                                    ←
                                </button>
                                
                                <button 
                                    className="slideshow-btn next-btn" 
                                    onClick={() => changeSlide(project.id, 'next')}
                                    aria-label="Next slide"
                                >
                                    →
                                </button>
                                
                                <div className="slideshow-dots">
                                    {project.images.map((_, index) => (
                                        <span 
                                            key={index} 
                                            className={`dot ${index === currentSlides[project.id] ? 'active' : ''}`}
                                            onClick={() => setCurrentSlides({...currentSlides, [project.id]: index})}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        <div className="project-info">
                            <h2>{project.title}</h2>
                            <p className="project-meta">{project.event} | {project.date}</p>
                            <p className="project-description">{project.description}</p>
                            
                            <div className="project-achievements">
                                <ul>
                                    {project.achievements.map((achievement, index) => (
                                        <li key={index}>{achievement}</li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className="project-tech-stack">
                                <h3>Technologies Used:</h3>
                                <div className="tech-tags">
                                    {project.techStack.map(tech => (
                                        <span className="tech-tag" key={tech}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="project-links">
                                <a href={project.githubLink} className="project-link github-link">
                                    <FaGithub /> View Code
                                </a>
                                <a href={project.liveLink} className="project-link live-link">
                                    <FaExternalLinkAlt /> Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="buttons-container">
                <Link to="/" className="main-button">Return to Main Page</Link>
            </div>
        </div>
    );
};

export default Projects;