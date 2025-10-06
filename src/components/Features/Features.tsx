import React, { useEffect } from 'react';
import { animate } from 'animejs';
import FeatureCard from './FeatureCard';
import { featuresData } from './featuresData';
import './Features.css';

const Features: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animate(entry.target, {
            opacity: [0, 1],
            translateY: [50, 0],
            scale: [0.9, 1],
            duration: 800,
            easing: 'out(3)'
          });
        }
      });
    }, observerOptions);

    document.querySelectorAll('.feature-card').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="features-section">
      <h2 className="features-title">Powerful Features</h2>
      
      <div className="features-grid">
        {featuresData.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;