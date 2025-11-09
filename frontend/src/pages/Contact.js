import React, { useState } from 'react';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, you'd send this to your backend
        console.log('Form submitted:', formData);
        setSubmitted(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
            setFormData({ name: '', email: '', subject: '', message: '' });
            setSubmitted(false);
        }, 3000);
    };

    return (
        <div className="contact-page">
            <div className="contact-hero">
                <h1>Get In Touch</h1>
                <p>Have a question or want to work together? I'd love to hear from you!</p>
            </div>

            <div className="contact-content">
                <div className="contact-info">
                    <h2>Contact Information</h2>
                    
                    <div className="info-item">
                        <span className="info-icon">📧</span>
                        <div>
                            <h3>Email</h3>
                            <p>r.karthikeyan770@gmail.com</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <span className="info-icon">📱</span>
                        <div>
                            <h3>Phone</h3>
                            <p>+91 7806821770</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <span className="info-icon">📍</span>
                        <div>
                            <h3>Location</h3>
                            <p>Salem, Tamil Nadu, India</p>
                        </div>
                    </div>

                //    <div className="social-links">
                        <h3>Connect With Me</h3>
                        <div className="social-icons">
                           // <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <span>🐙</span> GitHub
                          //  </a>
                            //<a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <span>💼</span> LinkedIn
                            </a>
                           // <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <span>🐦</span> Twitter
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact-form-container">
                    <h2>Send Me a Message</h2>
                    
                    {submitted && (
                        <div className="success-message">
                            ✓ Message sent successfully! I'll get back to you soon.
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Your full name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="your.email@example.com"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject *</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                placeholder="What is this about?"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message *</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="6"
                                placeholder="Your message here..."
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;