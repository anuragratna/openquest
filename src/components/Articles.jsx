import React from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data/content';
import './Articles.css';

const Articles = () => {
    return (
        <section id="articles" className="articles-section">
            <div className="container">
                <h2 className="section-title">Latest Insights</h2>
                <div className="articles-grid">
                    {articles.map((article) => (
                        <article key={article.id} className="article-card">
                            <div className="article-image">
                                <img src={article.image} alt={article.title} />
                            </div>
                            <div className="article-content">
                                <span className="article-date">{article.date}</span>
                                <h3>{article.title}</h3>
                                <p>{article.excerpt}</p>
                                <Link to={article.link} className="read-more">Read Article</Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Articles;
