import React from 'react';
import { Link } from 'react-router-dom';
import { knowledgeBase } from '../data/content';
import './KnowledgeBase.css';

const KnowledgeBase = () => {
    return (
        <section id="knowledge-base" className="kb-section">
            <div className="container">
                <h2 className="section-title">Knowledge Base</h2>
                <div className="kb-grid">
                    {knowledgeBase.map((item) => (
                        <div key={item.id} className="kb-card">
                            <span className="kb-type">{item.type}</span>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <Link to={item.link} className="kb-link">Download Resource &rarr;</Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KnowledgeBase;
