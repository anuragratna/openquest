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
                    <a href="https://app.cal.eu/anuragratna" className="btn btn-primary hero-btn" target="_blank" rel="noopener noreferrer">
                        Book a Demo
                    </a>
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
