import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
                <Link to="/" className="logo">
                    <img src={logo} alt="OpenQuest Solutions" />
                    <span>OpenQuest</span>
                </Link>
                <nav className="nav">
                    <ul className="nav-list">
                        {navLinks.map((link) => (
                            <li key={link.name} className="nav-item">
                                <a href={link.href} className="nav-link">{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <a href="https://app.cal.eu/anuragratna" className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">Book a Demo</a>
            </div>
        </header>
    );
};

export default Header;
