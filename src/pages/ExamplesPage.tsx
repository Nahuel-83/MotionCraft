import React from 'react';
import CodeExamples from '../components/CodeExamples/CodeExamples';
import './Page.css';

const ExamplesPage: React.FC = () => {
  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Ejemplos Interactivos</h1>
        <p className="page-subtitle">
          Explora animaciones avanzadas con Anime.js en tiempo real
        </p>
      </div>
      <CodeExamples />
    </div>
  );
};

export default ExamplesPage;
