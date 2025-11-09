import React, { useState, useEffect } from 'react';
import axios from '../api/axios';
import './Projects.css';

function Projects() {
    // State management
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState('all');

    // Fetch projects when component loads
    useEffect(() => {
        fetchProjects();
    }, []);

    // Function to get projects from backend
    const fetchProjects = async () => {
        try {
            setLoading(true);
            const response = await axios.get('/projects');
            
            if (response.data.success) {
                setProjects(response.data.data);
                setError(null);
            }
        } catch (err) {
            console.error('Error fetching projects:', err);
            setError('Failed to load projects. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    // Get unique technologies for filter
    const getTechnologies = () => {
        const allTech = projects.flatMap(p => 
            p.technologies.split(',').map(t => t.trim())
        );
        return ['all', ...new Set(allTech)];
    };

    // Filter projects based on selected technology
    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(p => 
            p.technologies.toLowerCase().includes(filter.toLowerCase())
          );

    // Loading state
    if (loading) {
        return (
            <div className="loading-container">
                <div className="spinner"></div>
                <p>Loading projects...</p>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className="error-container">
                <p className="error-message">{error}</p>
                <button onClick={fetchProjects} className="btn btn-primary">
                    Try Again
                </button>
            </div>
        );
    }

    return (
        <div className="projects-page">
            <div className="projects-header">
                <h1>My Projects</h1>
                <p className="subtitle">
                    A collection of my work showcasing various technologies and skills
                </p>
            </div>

            {/* Filter Buttons */}
            <div className="filter-section">
                <p>Filter by technology:</p>
                <div className="filter-buttons">
                    {getTechnologies().map(tech => (
                        <button
                            key={tech}
                            className={`filter-btn ${filter === tech ? 'active' : ''}`}
                            onClick={() => setFilter(tech)}
                        >
                            {tech.charAt(0).toUpperCase() + tech.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            {/* Projects Grid */}
            <div className="projects-grid">
                {filteredProjects.length === 0 ? (
                    <p className="no-projects">No projects found with this filter.</p>
                ) : (
                    filteredProjects.map(project => (
                        <div key={project.id} className="project-card">
                            <div className="project-image">
                                <img 
                                    src={project.image_url || 'https://via.placeholder.com/400x250'} 
                                    alt={project.title}
                                    onError={(e) => {
                                        e.target.src = 'https://via.placeholder.com/400x250/667eea/ffffff?text=Project';
                                    }}
                                />
                                <div className="project-overlay">
                                    <div className="overlay-content">
                                        <h3>{project.title}</h3>
                                        <p>Click to view details</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                
                                <div className="tech-tags">
                                    {project.technologies.split(',').map((tech, index) => (
                                        <span key={index} className="tech-tag">
                                            {tech.trim()}
                                        </span>
                                    ))}
                                </div>
                                
                                <div className="project-links">
                                    {project.github_link && (
                                        <a 
                                            href={project.github_link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="project-link github"
                                        >
                                            <span>📂</span> GitHub
                                        </a>
                                    )}
                                    {project.live_link && (
                                        <a 
                                            href={project.live_link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="project-link live"
                                        >
                                            <span>🚀</span> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Projects;