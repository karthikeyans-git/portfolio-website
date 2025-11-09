import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about-page">
            <div className="about-hero">
                <h1>About Me</h1>
                <p className="tagline">Passionate Developer | Problem Solver | Lifelong Learner</p>
            </div>

            <div className="about-content">
                <section className="about-section">
                    <h2>👋 Hello!</h2>
                    <p>
                        I'm a full-stack developer with a passion for creating elegant solutions 
                        to complex problems. With expertise in modern web technologies, I build 
                        applications that are both functional and beautiful.
                    </p>
                    <p>
                        My journey in web development started with curiosity and has evolved into 
                        a career focused on delivering high-quality, user-centric applications.
                    </p>
                </section>

                <section className="about-section">
                    <h2>🎓 Education & Experience</h2>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <h3>Bachelor's in Computer Science</h3>
                                <p className="timeline-date">2024 - present</p>
                                                            </div>
                        </div>
                                           </div>
                </section>

                <section className="about-section">
                    <h2>💪 Core Competencies</h2>
                    <div className="competencies">
                        <div className="competency-item">
                            <h3>Frontend Development</h3>
                            <ul>
                                <li>React.js & Modern JavaScript</li>
                                <li>Responsive Web Design</li>
                                <li>CSS3 & Animations</li>
                                <li>UI/UX Best Practices</li>
                            </ul>
                        </div>
                        <div className="competency-item">
                            <h3>Backend Development</h3>
                            <ul>
                                <li>Node.js & Express</li>
                                <li>RESTful API Design</li>
                                <li>Database Management</li>
                                <li>Authentication & Security</li>
                            </ul>
                        </div>
                        <div className="competency-item">
                            <h3>Tools & Technologies</h3>
                            <ul>
                                <li>Git & Version Control</li>
                                <li>MySQL & Database Design</li>
                                <li>Agile Development</li>
                                <li>Testing & Debugging</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="about-section">
                    <h2>🎯 What I'm Working On</h2>
                    <div className="current-focus">
                        <div className="focus-card">
                            <span className="focus-icon">📚</span>
                            <h3>Learning</h3>
                            <p>Exploring cloud technologies and microservices architecture</p>
                        </div>
                        <div className="focus-card">
                            <span className="focus-icon">🚀</span>
                            <h3>Building</h3>
                            <p>Developing a real-time collaboration platform for teams</p>
                        </div>
                        <div className="focus-card">
                            <span className="focus-icon">🤝</span>
                            <h3>Contributing</h3>
                            <p>Active contributor to open-source projects on GitHub</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default About;