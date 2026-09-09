import React from 'react';

import { heroContent } from '../data/content';
import './Hero.css';

const Hero = () => {

    return (
        <section className="hero">
            <div className="container hero-container fade-in">
                <div className="hero-content">
                    <h1 className="hero-title">{heroContent.title}</h1>
                    <p className="hero-subtitle">{heroContent.subtitle}</p>

                    <div className="hero-signup-container">
                        <a href="https://app.cal.eu/anuragratna" className="btn btn-ai hero-btn" target="_blank" rel="noopener noreferrer">
                            ✦ {heroContent.ctaPrimary}
                        </a>
                    </div>

                    <div className="hero-actions">
                        <a href="#how-we-work" className="btn btn-outline">{heroContent.ctaSecondary}</a>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="architecture-placeholder glass-panel">
                        <div className="arch-header">
                            <span className="dot dot-red"></span>
                            <span className="dot dot-yellow"></span>
                            <span className="dot dot-green"></span>
                        </div>
                        <div className="arch-body">
                            <div className="arch-box arch-data">Data Layer</div>
                            <div className="arch-arrow">↓</div>
                            <div className="arch-box arch-agent">AI Agent Protocol</div>
                            <div className="arch-arrow">↓</div>
                            <div className="arch-box arch-deploy">Enterprise Deployment</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
