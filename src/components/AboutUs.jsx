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
                        An action-driven leader with vast experience in banking and finance, believing
                        that the greatest transformations emerge not from technology alone, but from
                        understanding the human systems it serves. Focused on bridging the gap between
                        what's possible and what's practical—turning strategic vision into measurable
                        impact for organizations navigating the complexities of a rapidly evolving world.
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
