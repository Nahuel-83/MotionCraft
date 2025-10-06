import React from 'react';
import './FeatureCard.css';

interface FeatureCardProps {
  title: string;
  description: string;
  gradient: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, gradient }) => {
  return (
    <div className="feature-card">
      <div className={`feature-card-content ${gradient}`}>
        <h3 className="feature-card-title">{title}</h3>
        <p className="feature-card-description">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
