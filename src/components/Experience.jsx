import React from 'react';
import { Link } from 'react-router-dom';
import './style/Experience.css';
import { FaArrowLeft, FaBriefcase, FaChalkboardTeacher, FaUserTie } from 'react-icons/fa';

const Experience = () => {
    return (
        <div className="experience-container">
            <div className="navigation-bar">
                <Link to="/" className="nav-button">
                    <FaArrowLeft /> Back to Home
                </Link>
            </div>
            
            <h1 className="experience-title">Professional Experience</h1>
            
            <div className="experience-timeline">
                <div className="experience-card">
                    <div className="experience-icon">
                        <FaBriefcase />
                    </div>
                    <div className="experience-content">
                        <div className="experience-header">
                            <h2>Outreach Officer</h2>
                            <span className="experience-date">May 2024 - Present</span>
                        </div>
                        <p className="experience-company">ACM (Association for Computing and Machinery) | Gettysburg, PA</p>
                        <ul className="experience-achievements">
                            <li>Organized over 10 interactive coding challenges and tech trivia campaigns on Instagram, increasing club engagement to 104 active participants and reaching over 2,000 accounts</li>
                            <li>Created more than 20 visually branded posts highlighting member achievements, resulting in a 25% increase in new member sign-ups</li>
                        </ul>
                    </div>
                </div>
                
                <div className="experience-card">
                    <div className="experience-icon">
                        <FaChalkboardTeacher />
                    </div>
                    <div className="experience-content">
                        <div className="experience-header">
                            <h2>Teacher</h2>
                            <span className="experience-date">October 2023 - August 2024</span>
                        </div>
                        <p className="experience-company">Online</p>
                        <ul className="experience-achievements">
                            <li>Tutored over 50 students in SAT Math, leading to an average score increase of more than 150 points</li>
                            <li>Designed customized lesson plans for IELTS students, helping 90% of them achieve a band score of 6.5 or higher</li>
                            <li>Adapted various teaching methods to suit individual student needs, fostering a supportive and friendly learning environment that simplified complex concepts</li>
                        </ul>
                    </div>
                </div>
                
                <div className="experience-card">
                    <div className="experience-icon">
                        <FaUserTie />
                    </div>
                    <div className="experience-content">
                        <div className="experience-header">
                            <h2>Student Government President</h2>
                            <span className="experience-date">September 2021 - September 2022</span>
                        </div>
                        <p className="experience-company">Kazakh-Turkish Lyceum | Kazakhstan, Almaty</p>
                        <ul className="experience-achievements">
                            <li>Led a team of over 10 members to organize five monthly charity fairs, raising $4,000 to provide food, educational supplies, and medical aid for 25 families, an orphanage, and a nursing home</li>
                            <li>Initiated Cyber Month, hosting four weekly video game tournaments (CS:GO, FIFA, PUBG, and Brawl Stars) that attracted over 120 participants and featured a $500 prize pool secured through alumni sponsorships, increasing campus engagement by 30%</li>
                            <li>Organized more than five concerts for tutors, teachers, and new students, attracting over 1,000 attendees and fostering community engagement through cultural events</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="buttons-container">
                <Link to="/" className="main-button">Return to Main Page</Link>
            </div>
        </div>
    );
};

export default Experience;