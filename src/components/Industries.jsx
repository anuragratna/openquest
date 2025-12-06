import React from 'react';
import { industries } from '../data/content';
import './Industries.css';

const Industries = () => {
    return (
        <section id="industries" className="industries-section">
            <div className="container">
                <h2 className="section-title">Industry Expertise</h2>
                <div className="industries-grid">
                    {industries.map((industry) => (
                        <div key={industry.id} className="industry-card">
                            <div className="industry-icon">{industry.icon}</div>
                            <h3>{industry.title}</h3>
                            <p>{industry.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Industries;
