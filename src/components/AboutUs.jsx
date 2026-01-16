import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa6';
import anuragImage from '../assets/anurag.jpg';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <section id="about" className="about-section">
            <div className="container about-container">
                <div className="about-image fade-in">
                    <img src={anuragImage} alt="Anurag Ratna" />
                </div>
                <div className="about-content fade-in">
                    <span className="about-pretitle">Leadership</span>
                    <h2 className="about-name">Anurag Ratna</h2>
                    <h3 className="about-role">Co-Founder</h3>

                    <p className="about-bio">
                        Helping merchants bridge the technical gap in the agentic economy.
                        Focused on Universal Commerce Protocol (UCP) implementation and
                        AI-driven digital transformation.
                    </p>

                    <div className="about-contact">
                        <a
                            href="https://www.linkedin.com/in/anuragratnasaxena/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="about-link"
                        >
                            <FaLinkedin className="about-icon" />
                            <span>Connect on LinkedIn</span>
                        </a>
                        <a
                            href="mailto:anurag.ratna@openquest.solutions"
                            className="about-link"
                        >
                            <FaEnvelope className="about-icon" />
                            <span>anurag.ratna@openquest.solutions</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
