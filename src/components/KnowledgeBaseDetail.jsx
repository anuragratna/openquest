import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { knowledgeBase } from '../data/content';
import './ArticleDetail.css'; // Reusing styles for consistency

const KnowledgeBaseDetail = () => {
    const { id } = useParams();
    const item = knowledgeBase.find(i => i.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!item) {
        return <div className="not-found">Resource not found</div>;
    }

    return (
        <div className="article-detail-page">
            <div className="article-header" style={{ backgroundColor: 'var(--color-primary)' }}>
                <div className="container">
                    <Link to="/" className="back-link">&larr; Back to Home</Link>
                    <span className="kb-type" style={{ color: 'var(--color-secondary)', background: 'rgba(255,255,255,0.1)' }}>{item.type}</span>
                    <h1 className="article-title">{item.title}</h1>
                </div>
            </div>
            <div className="container article-body">
                <div className="article-content" dangerouslySetInnerHTML={{ __html: item.content }}></div>
            </div>
        </div>
    );
};

export default KnowledgeBaseDetail;
