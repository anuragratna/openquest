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

    // Create the share URL (use production domain, fallback to current location)
    const getShareUrl = () => {
        const baseUrl = 'https://openquest.solutions';
        const articlePath = `/article/${article.id}`;
        return `${baseUrl}${articlePath}`;
    };

    const handleLinkedInShare = () => {
        const shareUrl = getShareUrl();
        const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        window.open(linkedInUrl, '_blank', 'noopener,noreferrer');
    };

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

                {/* LinkedIn Sharing Section */}
                <div className="article-social-share">
                    <div className="share-divider"></div>
                    <div className="share-buttons">
                        <button
                            onClick={handleLinkedInShare}
                            className="linkedin-share-btn"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                            Share on LinkedIn
                        </button>
                        <a
                            href="https://www.linkedin.com/company/110117743/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="linkedin-company-btn"
                        >
                            Follow OpenQuest on LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticleDetail;
