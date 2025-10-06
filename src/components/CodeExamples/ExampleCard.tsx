import React from 'react';
import './ExampleCard.css';

interface ExampleCardProps {
  title: string;
  titleColor: string;
  children: React.ReactNode;
  code: string;
}

const ExampleCard: React.FC<ExampleCardProps> = ({ title, titleColor, children, code }) => {
  return (
    <div className="example-card feature-card">
      <div className="example-card-content">
        <h3 className={`example-card-title ${titleColor}`}>{title}</h3>
        <div className="example-card-demo">
          {children}
        </div>
        <pre className="example-card-code">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default ExampleCard;