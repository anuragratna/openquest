import React from 'react';

import { heroContent } from '../data/content';
import './Hero.css';

const Hero = () => {

    return (
        <section className="hero">
            <div className="container hero-content fade-in">


                <h1 className="hero-title">{heroContent.title}</h1>
                <p className="hero-subtitle">{heroContent.subtitle}</p>

                <div className="hero-signup-container">
                    <a href="https://app.cal.eu/anuragratna" className="btn btn-ai hero-btn" target="_blank" rel="noopener noreferrer">
                        ✦ Book a Demo
                    </a>
                </div>

                <div className="hero-actions">
                    <a href="#products" className="btn btn-outline">Explore Data Intelligence</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
