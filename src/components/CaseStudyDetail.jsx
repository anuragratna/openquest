import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaTwitter, FaLinkedinIn, FaEnvelope, FaArrowLeft } from 'react-icons/fa6';
import { caseStudies } from '../data/content';
import './CaseStudyDetail.css';

const CaseStudyDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const caseStudy = caseStudies.find(study => study.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!caseStudy) {
        return (
            <div className="container" style={{ padding: '8rem 2rem', textAlign: 'center' }}>
                <h2>Case Study not found</h2>
                <button onClick={() => navigate('/')} className="btn btn-primary" style={{ marginTop: '1rem' }}>
                    Go Home
                </button>
            </div>
        );
    }

    const shareUrl = window.location.href;
    const shareText = `Check out this case study: ${caseStudy.title}`;

    return (
        <article className="case-detail-section">
            <div className="case-detail-container">
                <button onClick={() => navigate(-1)} className="btn btn-outline" style={{ border: 'none', paddingLeft: 0, marginBottom: '2rem' }}>
                    <FaArrowLeft /> Back
                </button>

                <header className="case-detail-header fade-in">
                    <span className="case-detail-category">{caseStudy.category}</span>
                    <h1 className="case-detail-title">{caseStudy.title}</h1>
                </header>

                <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="case-detail-image fade-in"
                />

                <div
                    className="case-detail-content fade-in"
                    dangerouslySetInnerHTML={{ __html: caseStudy.content }}
                />

                <div className="case-detail-meta fade-in">
                    {caseStudy.hashtags && (
                        <div className="case-detail-hashtags">
                            {caseStudy.hashtags.map((tag, index) => (
                                <span key={index} className="hashtag">{tag}</span>
                            ))}
                        </div>
                    )}

                    <div className="case-detail-share">
                        <span className="share-label">Share:</span>
                        <div className="share-buttons">
                            <a
                                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="share-btn"
                                aria-label="Share on Twitter"
                            >
                                <FaTwitter />
                            </a>
                            <a
                                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(caseStudy.title)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="share-btn"
                                aria-label="Share on LinkedIn"
                            >
                                <FaLinkedinIn />
                            </a>
                            <a
                                href={`mailto:?subject=${encodeURIComponent(caseStudy.title)}&body=${encodeURIComponent(shareText + ' ' + shareUrl)}`}
                                className="share-btn"
                                aria-label="Share via Email"
                            >
                                <FaEnvelope />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default CaseStudyDetail;
