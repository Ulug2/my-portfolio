import { useState } from 'react';
import './style/Projects.css';
import projects from './ProjectDatabase'

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [modalImageIndex, setModalImageIndex] = useState(0);

    const openModal = (project) => {
        setSelectedProject(project);
        setModalImageIndex(0); // Reset to first image when opening modal
    };

    const closeModal = () => {
        setSelectedProject(null);
        setModalImageIndex(0);
    };

    const nextModalImage = () => {
        if (selectedProject) {
            setModalImageIndex(prev => 
                (prev + 1) % selectedProject.images.length
            );
        }
    };

    const prevModalImage = () => {
        if (selectedProject) {
            setModalImageIndex(prev => 
                (prev - 1 + selectedProject.images.length) % selectedProject.images.length
            );
        }
    };

    const goToModalSlide = (slideIndex) => {
        setModalImageIndex(slideIndex);
    };

    return (
        <div className="projects-section">
            <h2>projects()</h2>
            
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={project.id} className="project-card" onClick={() => openModal(project)}>
                        <div className="project-image">
                            <img src={project.cover[0]} alt={project.title} />
                            <div className="project-overlay">
                                <button className="view-more-btn">View Details</button>
                            </div>
                        </div>
                        
                        <div className="project-info">
                            <div className="project-header">
                                <h3>{project.title}</h3>
                                <span className="project-event">{project.event}</span>
                            </div>
                            
                            <p className="project-description">
                                {project.description.length > 120 
                                    ? `${project.description.substring(0, 120)}...` 
                                    : project.description
                                }
                            </p>
                            
                            <div className="tech-stack">
                                {project.techStack.slice(0, 3).map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                ))}
                                {project.techStack.length > 3 && (
                                    <span className="tech-more">+{project.techStack.length - 3}</span>
                                )}
                            </div>
                            
                            <div className="project-links">
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" 
                                   onClick={(e) => e.stopPropagation()}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                </a>
                                {project.liveLink !== 'doesnotexist' && (
                                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" 
                                       onClick={(e) => e.stopPropagation()}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for detailed view */}
            {selectedProject && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>&times;</button>
                        
                        <div className="modal-header">
                            <h2>{selectedProject.title}</h2>
                            <div className="modal-meta">
                                <span className="modal-event">{selectedProject.event}</span>
                                <span className="modal-date">{selectedProject.date}</span>
                            </div>
                        </div>

                        {/* Modal Image Slideshow */}
                        <div className="modal-slideshow">
                            <div className="modal-slideshow-container">
                                <img 
                                    src={selectedProject.images[modalImageIndex]} 
                                    alt={`${selectedProject.title} ${modalImageIndex + 1}`}
                                    className="modal-slideshow-image"
                                />
                                
                                {selectedProject.images.length > 1 && (
                                    <>
                                        <button 
                                            className="modal-slide-btn modal-prev-btn"
                                            onClick={prevModalImage}
                                        >
                                            &#8249;
                                        </button>
                                        
                                        <button 
                                            className="modal-slide-btn modal-next-btn"
                                            onClick={nextModalImage}
                                        >
                                            &#8250;
                                        </button>

                                        <div className="modal-slide-indicators">
                                            {selectedProject.images.map((_, i) => (
                                                <button
                                                    key={i}
                                                    className={`modal-indicator ${i === modalImageIndex ? 'active' : ''}`}
                                                    onClick={() => goToModalSlide(i)}
                                                />
                                            ))}
                                        </div>

                                        <div className="modal-slide-counter">
                                            {modalImageIndex + 1} / {selectedProject.images.length}
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="modal-body">
                            <p className="modal-description">{selectedProject.description}</p>
                            
                            <div className="modal-achievements">
                                <h4>Key Achievements:</h4>
                                <ul>
                                    {selectedProject.achievements.map((achievement, i) => (
                                        <li key={i}>{achievement}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="modal-tech">
                                <h4>Tech Stack:</h4>
                                <div className="tech-stack-full">
                                    {selectedProject.techStack.map((tech, i) => (
                                        <span key={i} className="tech-tag-full">{tech}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="modal-links">
                                <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className="modal-link">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                    View Code
                                </a>
                                {selectedProject.liveLink !== 'doesnotexist' && (
                                    <a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer" className="modal-link">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                                        </svg>
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Projects;