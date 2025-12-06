import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles } from '../data/content';
import './ArticleDetail.css';

const ArticleDetail = () => {
    const { id } = useParams();
    const article = articles.find(a => a.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!article) {
        return <div className="not-found">Article not found</div>;
    }

    return (
        <div className="article-detail-page">
            <div className="article-header" style={{ backgroundImage: `url(${article.image})` }}>
                <div className="article-header-overlay"></div>
                <div className="container">
                    <Link to="/" className="back-link">&larr; Back to Home</Link>
                    <span className="article-date">{article.date}</span>
                    <h1 className="article-title">{article.title}</h1>
                </div>
            </div>
            <div className="container article-body">
                <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }}></div>
            </div>
        </div>
    );
};

export default ArticleDetail;
