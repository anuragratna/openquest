import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { navLinks } from '../data/content';
import './Header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <div className="logo">
                    <img src={logo} alt="OpenQuest Solutions" />
                    <span>OpenQuest</span>
                </div>
                <nav className="nav">
                    <ul className="nav-list">
                        {navLinks.map((link) => (
                            <li key={link.name} className="nav-item">
                                <a href={link.href} className="nav-link">{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <a href="#contact" className="btn btn-primary btn-sm">Get in Touch</a>
            </div>
        </header>
    );
};

export default Header;
