import React from 'react';
import { useForm } from '@formspree/react';
import './DemoSignup.css';

const DemoSignup = () => {
    const [state, handleSubmit] = useForm("xykgezow"); // Using same formspree id as Hero for now, or could use a new one
    const [showSuccess, setShowSuccess] = React.useState(false);

    React.useEffect(() => {
        if (state.succeeded) {
            setShowSuccess(true);
            window.scrollTo(0, 0);
        }
    }, [state.succeeded]);

    return (
        <div className="demo-signup-page fade-in">
            <div className="container demo-signup-container">
                <div className="demo-signup-header">
                    <h1 className="section-title">Get a Personalized Demo of <span className="highlight-text">Sales Compass</span></h1>
                    <p className="section-subtitle">See how our AI-powered data intelligence platform can transform your multi-channel business.</p>
                </div>

                {showSuccess ? (
                    <div className="demo-success-message">
                        <div className="success-icon">✓</div>
                        <h2>Request Received!</h2>
                        <p>Thank you for your interest in Sales Compass. Our team will contact you shortly to schedule your personalized demo.</p>
                        <a href="/" className="btn btn-primary">Return to Home</a>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="demo-signup-form">
                        <input type="hidden" name="subject" value="Full Demo Request (Signup Page)" />

                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                placeholder="John Doe"
                                required
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Work Email</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="john@company.com"
                                required
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="company">Company Name</label>
                            <input
                                id="company"
                                type="text"
                                name="company"
                                placeholder="Acme Corp"
                                required
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number (Optional)</label>
                            <input
                                id="phone"
                                type="tel"
                                name="phone"
                                placeholder="+1 (555) 000-0000"
                                className="form-input"
                            />
                        </div>

                        <button type="submit" className="btn btn-primary submit-btn" disabled={state.submitting}>
                            {state.submitting ? 'Submitting...' : 'Request Demo'}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default DemoSignup;
