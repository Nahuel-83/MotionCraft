import React, { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import FloatingShapes from './FloatingShapes';
import RotatingSquares from './RotatingSquares';
import './Hero.css';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    animate('.hero-title span', {
      opacity: [0, 1],
      translateY: [40, 0],
      delay: stagger(100),
      easing: 'out(3)',
      duration: 1200
    });

    animate('.hero-subtitle', {
      opacity: [0, 1],
      translateY: [20, 0],
      delay: 600,
      easing: 'out(3)',
      duration: 1000
    });
  }, []);

  return (
    <section ref={heroRef} className="hero">
      <FloatingShapes />
      
      <div className="hero-content">
        <h1 className="hero-title">
          <span>A</span>
          <span>n</span>
          <span>i</span>
          <span>m</span>
          <span>e</span>
          <span>.</span>
          <span>j</span>
          <span>s</span>
        </h1>
        <p className="hero-subtitle">
          JavaScript animation engine made with React & TypeScript
        </p>
        
        <RotatingSquares />
      </div>
    </section>
  );
};

export default Hero;