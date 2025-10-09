import React, { useEffect } from 'react';
import { animate, stagger } from 'animejs';
import ExampleCard from './ExampleCard';
import './FlipGalleryExample.css';

const FlipGalleryExample: React.FC = () => {
  useEffect(() => {
    // Animación inicial de entrada
    animate('.flip-card', {
      rotateY: [180, 0],
      translateZ: [100, 0],
      opacity: [0, 1],
      scale: [0.7, 1],
      delay: stagger(150),
      duration: 1200,
      easing: 'outElastic(1, 0.6)'
    });

    // Animación continua de flip
    const flipLoop = () => {
      animate('.flip-card', {
        rotateY: [0, 360],
        delay: stagger(200, { start: 2000 }),
        duration: 1500,
        easing: 'inOutQuart',
        complete: () => {
          setTimeout(flipLoop, 3000);
        }
      });
    };
    
    setTimeout(flipLoop, 2000);

    // Hover effect
    const cards = document.querySelectorAll('.flip-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        animate(card, { 
          rotateY: '+=180',
          scale: [1, 1.15, 1],
          duration: 800,
          easing: 'outBack(1.5)'
        });
      });
    });

    return () => {
      cards.forEach(card => {
        card.replaceWith(card.cloneNode(true));
      });
    };
  }, []);

  const code = `// 3D Flip cards with loop
animate('.flip-card', {
  rotateY: [180, 0],
  scale: [0.7, 1],
  delay: stagger(150),
  easing: 'outElastic(1, 0.6)'
});`;

  return (
    <ExampleCard title="3D Flip Gallery" titleColor="title-purple" code={code}>
      <div className="flip-grid">
        <div className="flip-card c1">
          <div className="flip-card-front">
            <span className="flip-icon">🎨</span>
          </div>
          <div className="flip-card-back">
            <span className="flip-icon">✨</span>
          </div>
        </div>
        <div className="flip-card c2">
          <div className="flip-card-front">
            <span className="flip-icon">🚀</span>
          </div>
          <div className="flip-card-back">
            <span className="flip-icon">💫</span>
          </div>
        </div>
        <div className="flip-card c3">
          <div className="flip-card-front">
            <span className="flip-icon">⚡</span>
          </div>
          <div className="flip-card-back">
            <span className="flip-icon">🔥</span>
          </div>
        </div>
        <div className="flip-card c4">
          <div className="flip-card-front">
            <span className="flip-icon">💎</span>
          </div>
          <div className="flip-card-back">
            <span className="flip-icon">🌟</span>
          </div>
        </div>
      </div>
    </ExampleCard>
  );
};

export default FlipGalleryExample;
