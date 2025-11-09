import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <div className="profile-section">
                        <div className="profile-picture">
                            <img
                                src="https://i.ibb.co/vx6CGZ9v/Whats-App-Image-2025-11-09-at-12-45-29-1113a186.jpg"
                                alt="KARTHIKEYAN R"
                            />
                        </div>

                        <h1 className="hero-title">
                            Hi, I'm <span className="highlight">KARTHIKEYAN R</span>
                        </h1>
                        <h2 className="hero-subtitle">Full Stack Developer</h2>
                        <p className="hero-description">
                            Building modern web applications with React, Node.js, and MySQL.
                        </p>
                        <div className="cta-buttons">
                            <Link to="/projects" className="btn btn-primary">
                                View My Work
                            </Link>
                            <Link to="/contact" className="btn btn-secondary">
                                Contact Me
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="skills">
                <h3 className="section-title">Tech Stack</h3>
                <div className="skill-grid">
                    <div className="skill-card"><div className="skill-icon">🌐</div><h4>HTML5</h4><p>Semantic markup</p></div>
                    <div className="skill-card"><div className="skill-icon">🎨</div><h4>CSS3</h4><p>Responsive design</p></div>
                    <div className="skill-card"><div className="skill-icon">⚡</div><h4>JavaScript</h4><p>ES6+ features</p></div>
                    <div className="skill-card"><div className="skill-icon">⚛️</div><h4>React</h4><p>Component-based UI</p></div>
                    <div className="skill-card"><div className="skill-icon">🟢</div><h4>Node.js</h4><p>Server-side JS</p></div>
                    <div className="skill-card"><div className="skill-icon">🗄️</div><h4>MySQL</h4><p>Database management</p></div>
                </div>
            </section>

            {/* About Preview */}
            <section className="about-preview">
                <h3 className="section-title">About Me</h3>
                <p className="about-text">
                    I'm a passionate full-stack developer with expertise in building
                    modern web applications. I love creating solutions that make a difference
                    and am constantly learning new technologies.
                </p>
                <Link to="/about" className="btn btn-outline">Learn More</Link>
            </section>
        </div>
    );
}

export default Home;
