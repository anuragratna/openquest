import React from 'react';
import './UCPReady.css';

const UCPReady = () => {
    return (
        <section className="ucp-ready-section" id="ucp-ready">
            <div className="container ucp-ready-container">
                <div className="ucp-glass-card">
                    <div className="ucp-visual">
                        <div className="scanner-line"></div>
                        <div className="pulse-circles">
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                        </div>
                        <div className="ucp-status-display">
                            <span className="status-label">PROTOCOL STATUS:</span>
                            <span className="status-value">PENDING SCAN</span>
                        </div>
                    </div>

                    <div className="ucp-content">
                        <div className="ucp-badge-container">
                            <span className="hero-badge-dot"></span>
                            <span className="ucp-badge">Agentic Priority // Protocol v1.0</span>
                        </div>

                        <h2 className="ucp-title">
                            Are you <span className="highlight-text">Google UCP</span> Ready?
                        </h2>

                        <p className="ucp-description">
                            The Universal Commerce Protocol is redefining digital trade. In the <strong>Agentic World</strong>,
                            visibility isn't just about SEO—it's about <strong>AEO (Agentic Engine Optimization)</strong>.
                            Ensure your website is discoverable and transaction-ready for the autonomous agents of tomorrow.
                        </p>

                        <div className="ucp-actions">
                            <a href="/testAgenticReadiness" className="btn btn-ai ucp-btn">
                                ✦ Run Agentic Readiness Scan
                            </a>
                            <p className="ucp-hint">
                                <span className="hint-icon">💡</span>
                                <a href="#contact">Contact our experts</a> to lead the traffic with AEO.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UCPReady;
