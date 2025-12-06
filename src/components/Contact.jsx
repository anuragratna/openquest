import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    useEffect(() => {
        if (status === 'success') {
            const timer = setTimeout(() => {
                setStatus('idle');
                setFormData({ name: '', email: '', subject: '', message: '' });
            }, 5000); // Fade out after 5 seconds
            return () => clearTimeout(timer);
        }
    }, [status]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
        }, 1500);
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h2 className="section-title">Get in Touch</h2>
                        <p className="section-subtitle">Ready to transform your business? Let's start the conversation.</p>

                        <div className="info-item">
                            <h3>Email Us</h3>
                            <p>contact@openquest.solutions</p>
                        </div>
                        <div className="info-item">
                            <h3>Call Us</h3>
                            <p>+31 683540581</p>
                        </div>
                        <div className="info-item">
                            <h3>Visit Us</h3>
                            <p>Netherlands</p>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="john@company.com"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled>Select a topic</option>
                                    <option value="Consulting Inquiry">Consulting Inquiry</option>
                                    <option value="Partnership">Partnership</option>
                                    <option value="Support">Support</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block" disabled={status === 'submitting'}>
                                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>

                        {status === 'success' && (
                            <div className="success-message">
                                <div className="success-content">
                                    <span className="check-icon">✓</span>
                                    <h4>Message Sent!</h4>
                                    <p>Thank you for contacting us! We will get back to you soon.</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
