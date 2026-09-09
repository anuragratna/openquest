import React from 'react';
import { howWeWork } from '../data/content';
import './HowWeWork.css';

const HowWeWork = () => {
    return (
        <section id="how-we-work" className="how-we-work section-padding">
            <div className="container">
                <div className="text-center fade-in">
                    <h2 className="section-title">How We Work</h2>
                    <p className="section-subtitle">Our Embed & Ship Forward Deployed Engineering Model</p>
                </div>

                <div className="hww-pipeline fade-in">
                    {howWeWork.map((step, index) => (
                        <div key={step.id} className="hww-step glass-panel">
                            <div className="hww-icon">{step.icon}</div>
                            <h3 className="hww-step-title">{step.title}</h3>
                            <p className="hww-step-desc">{step.description}</p>
                            {index < howWeWork.length - 1 && (
                                <div className="hww-connector"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowWeWork;
