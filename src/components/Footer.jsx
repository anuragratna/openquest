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
                </div>
                <div className="footer-bottom">
                    <p>{footerContent.copyright}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
