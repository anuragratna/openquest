import React from 'react';
import { caseStudies } from '../data/content';
import './CaseStudies.css';

const CaseStudies = () => {
    return (
        <section id="case-studies" className="section-padding case-studies-section">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-title">Success Stories</h2>
                    <p className="section-subtitle">Real results for real businesses</p>
                </div>

                <div className="case-studies-grid">
                    {caseStudies.map((study) => (
                        <article key={study.id} className="case-card">
                            <div className="case-image-wrapper">
                                <img src={study.image} alt={study.title} className="case-image" />
                                <span className="case-category">{study.category}</span>
                            </div>
                            <div className="case-content">
                                <h3 className="case-title">{study.title}</h3>
                                <p className="case-excerpt">{study.excerpt}</p>
                                <a href="#" className="btn-text">Read Case Study</a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
