import React from 'react';
import { footerContent } from '../data/content';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>{footerContent.companyName}</h3>
                        <p className="footer-address">{footerContent.address}</p>
                    </div>
                    <div className="footer-contact">
                        <h4>Contact Us</h4>
                        <p><a href={`mailto:${footerContent.email}`}>{footerContent.email}</a></p>
                        <p><a href={`tel:${footerContent.phone}`}>{footerContent.phone}</a></p>
                    </div>
                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#case-studies">Case Studies</a></li>
                            <li><a href="#about">About Us</a></li>
                        </ul>
                    </div>
                    <div className="footer-social">
                        <h4>Connect With Us</h4>
                        <a
                            href="https://www.linkedin.com/company/110117743/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-linkedin-link"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                            <span>Follow us on LinkedIn</span>
                        </a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>{footerContent.copyright}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
