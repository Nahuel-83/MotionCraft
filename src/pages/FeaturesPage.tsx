import React from 'react';
import Features from '../components/Features/Features';
import './Page.css';

const FeaturesPage: React.FC = () => {
  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Características</h1>
        <p className="page-subtitle">
          Descubre todas las capacidades de Anime.js v4
        </p>
      </div>
      <Features />
    </div>
  );
};

export default FeaturesPage;
