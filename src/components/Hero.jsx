import React from 'react';
import { useForm } from '@formspree/react';
import { heroContent } from '../data/content';
import './Hero.css';

const Hero = () => {
    const [state, handleSubmit] = useForm("xykgezow");
    const [showSuccess, setShowSuccess] = React.useState(false);

    React.useEffect(() => {
        if (state.succeeded) {
            setShowSuccess(true);
            const timer = setTimeout(() => {
                setShowSuccess(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [state.succeeded]);

    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-content fade-in">
                <h1 className="hero-title">{heroContent.title}</h1>
                <p className="hero-subtitle">{heroContent.subtitle}</p>
                <div className="hero-signup-container">
                    {showSuccess ? (
                        <div className="hero-success-message fade-out-target">
                            <span className="check-icon" style={{ fontSize: '1.5rem', display: 'block', marginBottom: '0.5rem' }}>✓</span>
                            <p className="hero-success-text">We have successfully submitted your request. A member of our team will be in touch soon.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="hero-signup-form">
                            <input
                                type="hidden"
                                name="subject"
                                value="Quick Demo Request (Home Page)"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your work email"
                                required
                                className="hero-input"
                                disabled={state.submitting}
                            />
                            <button type="submit" className="btn btn-primary hero-btn" disabled={state.submitting}>
                                {state.submitting ? 'Sending...' : 'Book a Demo'}
                            </button>
                        </form>
                    )}
                    {!showSuccess && <p className="hero-form-subtext">Get a free consultation for Sales Compass.</p>}
                </div>
                <div className="hero-actions" style={{ marginTop: '2rem' }}>
                    <a href="#products" className="btn btn-outline">Explore Sales Compass</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
