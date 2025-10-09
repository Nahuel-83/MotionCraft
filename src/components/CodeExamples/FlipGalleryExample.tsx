import React, { useEffect } from 'react';
import { animate, stagger } from 'animejs';
import ExampleCard from './ExampleCard';
import './FlipGalleryExample.css';

const FlipGalleryExample: React.FC = () => {
  useEffect(() => {
    animate('.flip-card', {
      rotateY: [180, 0],
      translateZ: [60, 0],
      opacity: [0, 1],
      scale: [0.8, 1],
      delay: stagger(100),
      duration: 1100,
      easing: 'outElastic(1, 0.7)'
    });

    const cards = document.querySelectorAll('.flip-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        animate(card, { 
          rotateY: [-8, 8, 0], 
          scale: [1, 1.05, 1],
          duration: 700,
          easing: 'outQuad'
        });
      });
    });

    return () => {
      cards.forEach(card => {
        card.replaceWith(card.cloneNode(true));
      });
    };
  }, []);

  const code = `// 3D Flip cards on load/hover
animate('.flip-card', {
  rotateY: [180, 0],
  scale: [0.8, 1],
  opacity: [0, 1],
  delay: stagger(100),
  easing: 'outElastic(1, 0.7)'
});`;

  return (
    <ExampleCard title="3D Flip Gallery" titleColor="title-purple" code={code}>
      <div className="flip-grid">
        <div className="flip-card c1" />
        <div className="flip-card c2" />
        <div className="flip-card c3" />
        <div className="flip-card c4" />
      </div>
    </ExampleCard>
  );
};

export default FlipGalleryExample;
