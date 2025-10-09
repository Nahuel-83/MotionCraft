import React, { useEffect } from 'react';
import { animate } from 'animejs';
import ExampleCard from './ExampleCard';

const MorphingExample: React.FC = () => {
  useEffect(() => {
    animate('.morph-shape', {
      d: [
        'M50,10 L90,90 L10,90 Z',
        'M50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 C10,30 30,10 50,10 Z',
        'M10,50 L50,10 L90,50 L50,90 Z',
        'M30,30 L70,30 L70,70 L30,70 Z',
        'M50,10 L90,90 L10,90 Z'
      ],
      easing: 'inOutElastic(1, 0.6)',
      duration: 5000,
      loop: true
    });
  }, []);

  const code = `animate('.shape', {
  d: [
    'M50,10 L90,90 L10,90 Z',
    'M50,10 C70,10 90,30...',
    'M10,50 L50,10 L90,50...'
  ],
  easing: 'inOutElastic(1, 0.6)',
  duration: 5000,
  loop: true
});`;

  return (
    <ExampleCard title="SVG Morphing" titleColor="title-cyan" code={code}>
      <svg width="100" height="100" viewBox="0 0 100 100">
        <path 
          className="morph-shape" 
          d="M50,10 L90,90 L10,90 Z"
          fill="url(#morphGradient)"
          stroke="none"
        />
        <defs>
          <linearGradient id="morphGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>
    </ExampleCard>
  );
};

export default MorphingExample;