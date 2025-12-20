import React, { useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
    // Formspree hook
    const [state, handleSubmit] = useForm("xykgezow");
    const navigate = useNavigate();

    useEffect(() => {
        if (state.succeeded) {
            const timer = setTimeout(() => {
                navigate('/');
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [state.succeeded, navigate]);

    if (state.succeeded) {
        return (
            <section id="contact" className="contact-section">
                <div className="container">
                    <div className="contact-wrapper">
                        <div className="success-message" style={{ display: 'block', padding: '3rem', textAlign: 'center' }}>
                            <div className="success-content">
                                <span className="check-icon" style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>✓</span>
                                <h4>Request Received</h4>
                                <p>Your request is well received and we will contact you shortly.</p>
                                <p style={{ fontSize: '0.9rem', color: '#6b7280', marginTop: '1rem' }}>Redirecting to home page...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

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
                                    required
                                    placeholder="John Doe"
                                />
                                <ValidationError
                                    prefix="Name"
                                    field="name"
                                    errors={state.errors}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="john@company.com"
                                />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <select
                                    id="subject"
                                    name="subject"
                                    required
                                    defaultValue=""
                                >
                                    <option value="" disabled>Select a topic</option>
                                    <option value="product">Product Inquiry</option>
                                    <option value="Consulting Inquiry">Consulting Inquiry</option>
                                    <option value="Partnership">Partnership</option>
                                    <option value="Support">Support</option>
                                    <option value="Other">Other</option>
                                </select>
                                <ValidationError
                                    prefix="Subject"
                                    field="subject"
                                    errors={state.errors}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows="5"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
                            </div>

                            <button type="submit" className="btn btn-primary btn-block" disabled={state.submitting}>
                                {state.submitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
