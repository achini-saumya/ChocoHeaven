import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={menuOpen ? 'show-mobile-menu' : ''}>
            <nav className="navbar">
                <div className="logo">
                    Choco<span>Heaven</span>
                </div>
                <ul className={`menu-links ${menuOpen ? 'open' : ''}`}>
                    <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link></li>
                    <li><Link to="/cart" onClick={() => setMenuOpen(false)}>Cart</Link></li>
                    <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
                    <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
                    
                </ul>
                <div id="menu-btn" onClick={toggleMenu}>
                    &#9776;
                </div>
                <div id="close-menu-btn" onClick={toggleMenu}>
                    &times;
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
