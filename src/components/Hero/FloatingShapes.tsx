import React, { useEffect } from 'react';
import { animate, stagger } from 'animejs';
import './FloatingShapes.css';

const FloatingShapes: React.FC = () => {
  useEffect(() => {
    animate('.floating-shape', {
      translateY: stagger(['-20px', '20px']),
      translateX: stagger(['-15px', '15px']),
      rotate: stagger(['15deg', '-15deg']),
      easing: 'inOut(2)',
      duration: 3000,
      direction: 'alternate',
      loop: true
    });
  }, []);

  return (
    <div className="floating-shapes">
      <div className="floating-shape shape-1"></div>
      <div className="floating-shape shape-2"></div>
      <div className="floating-shape shape-3"></div>
      <div className="floating-shape shape-4"></div>
    </div>
  );
};

export default FloatingShapes;