import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const routes = [
    { path: '/', label: 'Inicio' },
    { path: '/caracteristicas', label: 'Características' },
    { path: '/ejemplos', label: 'Ejemplos' },
    { path: '/camara-3d', label: 'Cámara 3D' },
    { path: '/contacto', label: 'Contacto' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-icon">✨</span>
          <span className="logo-text">Anime.js</span>
        </Link>

        <ul className="nav-links">
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                to={route.path}
                className={`nav-link ${location.pathname === route.path ? 'active' : ''}`}
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-cta">
          <a 
            href="https://animejs.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button"
          >
            Documentación
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
