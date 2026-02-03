import React from 'react';

import { heroContent } from '../data/content';
import './Hero.css';

const Hero = () => {

    return (
        <section className="hero">
            <div className="container hero-content fade-in">
                <div className="hero-badge-group">
                    <div className="hero-badge">
                        <span className="hero-badge-dot"></span>
                        <span>System Online // Neural Core Active</span>
                    </div>
                    <a href="#ucp-ready" className="hero-badge hero-badge-ucp">
                        <span className="hero-badge-dot pulse-purple"></span>
                        <span>Protocol v1.0 // Check UCP Readiness</span>
                    </a>
                </div>

                <h1 className="hero-title">{heroContent.title}</h1>
                <p className="hero-subtitle">{heroContent.subtitle}</p>

                <div className="hero-signup-container">
                    <a href="https://app.cal.eu/anuragratna" className="btn btn-ai hero-btn" target="_blank" rel="noopener noreferrer">
                        ✦ Book a Demo
                    </a>
                    <p className="hero-form-subtext">Running OpenQuest v2.4a // Ready for Query</p>
                </div>

                <div className="hero-actions">
                    <a href="#products" className="btn btn-outline">Explore Data Intelligence</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
