import React from 'react';
import Footer from '../components/Footer/Footer';
import './Page.css';

const ContactPage: React.FC = () => {
  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Contacto</h1>
        <p className="page-subtitle">
          Conecta con la comunidad de Anime.js
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
