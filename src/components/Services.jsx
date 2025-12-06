import React from 'react';
import { services } from '../data/content';
import './Services.css';

const Services = () => {
    return (
        <section id="services" className="section-padding services-section">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-title">Our Expertise</h2>
                    <p className="section-subtitle">Comprehensive solutions for the digital age</p>
                </div>

                <div className="services-grid">
                    {services.map((service) => (
                        <div key={service.id} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.description}</p>
                            <a href="#" className="service-link">Learn More →</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
