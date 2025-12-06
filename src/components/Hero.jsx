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
                <div className="hero-actions">
                    <a href="#services" className="btn btn-primary">{heroContent.ctaPrimary}</a>
                    <a href="#case-studies" className="btn btn-outline">{heroContent.ctaSecondary}</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
