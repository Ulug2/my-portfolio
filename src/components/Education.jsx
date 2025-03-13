import React from 'react';
import { Link } from 'react-router-dom';
import './style/Education.css';
import { FaArrowLeft, FaGraduationCap, FaUniversity } from 'react-icons/fa';

const Education = () => {
    return (
        <div className="education-container">
            <div className="navigation-bar">
                <Link to="/" className="nav-button">
                    <FaArrowLeft /> Back to Home
                </Link>
            </div>
            
            <h1 className="education-title">My Education</h1>
            
            <div className="education-timeline">
                <div className="education-card">
                    <div className="education-icon">
                        <FaGraduationCap />
                    </div>
                    <div className="education-content">
                        <h2>Gettysburg College</h2>
                        <p className="education-years">2023 - 2027 (Expected)</p>
                        <p className="education-degree">Bachelor of Science</p>
                        <p className="education-major">
                            <span className="highlight">Major:</span> Computer Science
                        </p>
                        <p className="education-minor">
                            <span className="highlight">Minors:</span> Data Science, Business
                        </p>
                        <div className="education-details">
                            <p>Pursuing a comprehensive education in computer science with complementary focus on data science and business applications.</p>
                        </div>
                    </div>
                </div>
                
                <div className="education-card">
                    <div className="education-icon">
                        <FaUniversity />
                    </div>
                    <div className="education-content">
                        <h2>Kazakh-Turkish Lyceum</h2>
                        <p className="education-years">2018 - 2023</p>
                        <p className="education-degree">High School Diploma</p>
                        <p className="education-focus">School for Gifted Boys</p>
                        <div className="education-details">
                            <p>Specialized education program for academically gifted students in Almaty, Kazakhstan.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="buttons-container">
                <Link to="/" className="main-button">Return to Main Page</Link>
            </div>
        </div>
    );
};

export default Education;