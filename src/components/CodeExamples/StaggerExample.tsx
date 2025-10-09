import React, { useEffect } from 'react';
import { animate, stagger } from 'animejs';
import ExampleCard from './ExampleCard';
import './StaggerExample.css';

const StaggerExample: React.FC = () => {
  useEffect(() => {
    animate('.stagger-dot', {
      scale: [0.8, 1.3, 1],
      rotate: [0, 180, 360],
      opacity: [0.5, 1, 0.5],
      delay: stagger(35, { grid: [10, 10], from: 'center' }),
      duration: 1800,
      easing: 'inOutQuart',
      loop: true,
      direction: 'alternate'
    });
  }, []);

  const code = `animate('.dot', {
  scale: [0.8, 1.3, 1],
  rotate: [0, 180, 360],
  opacity: [0.5, 1, 0.5],
  delay: stagger(35, {
    grid: [10, 10],
    from: 'center'
  }),
  duration: 1800,
  easing: 'inOutQuart',
  loop: true
});`;

  return (
    <ExampleCard title="Stagger Grid" titleColor="title-purple" code={code}>
      <div className="stagger-grid">
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i} className="stagger-dot"></div>
        ))}
      </div>
    </ExampleCard>
  );
};

export default StaggerExample;