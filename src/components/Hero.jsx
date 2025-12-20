import React from 'react';
import { heroContent } from '../data/content';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-content fade-in">
                <h1 className="hero-title">{heroContent.title}</h1>
                <p className="hero-subtitle">{heroContent.subtitle}</p>
                <div className="hero-signup-container">
                    <form action="https://formspree.io/f/xykgezow" method="POST" className="hero-signup-form">
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
                        />
                        <button type="submit" className="btn btn-primary hero-btn">Book a Demo</button>
                    </form>
                    <p className="hero-form-subtext">Get a free consultation for Sales Compass.</p>
                </div>
                <div className="hero-actions" style={{ marginTop: '2rem' }}>
                    <a href="#products" className="btn btn-outline">Explore Sales Compass</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
