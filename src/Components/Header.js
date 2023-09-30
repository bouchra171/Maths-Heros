import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../Style/Header.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    };

    const closeMenu = (e) => {
       
        e.stopPropagation();
        setMenuOpen(false);
    };

    
    return (
        <header className="header">
            <h1>Super Maths Héros</h1>
            <button className="menu-button" onClick={toggleMenu}>☰</button>
            <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
                <Link to="/" onClick={closeMenu}>Accueil</Link>
                <Link to="/choice" onClick={closeMenu}>Choix de jeu</Link>
                <Link to="/scoreboard" onClick={closeMenu}>Tableau des scores</Link>
            </nav>
        </header>
    );
}

export default Header;
