import React, { useEffect } from 'react';
import { animate, stagger } from 'animejs';
import ExampleCard from './ExampleCard';
import './StaggerExample.css';

const StaggerExample: React.FC = () => {
  useEffect(() => {
    animate('.stagger-dot', {
      scale: [0.5, 1.5, 1],
      rotate: [0, 180, 360],
      opacity: [0.3, 1],
      delay: stagger(40, { grid: [10, 10], from: 'center' }),
      duration: 1200,
      easing: 'out(3)',
      loop: true,
      alternate: true
    });
  }, []);

  const code = `animate('.dot', {
  scale: [0.5, 1.5, 1],
  rotate: [0, 180, 360],
  delay: stagger(40, {
    grid: [10, 10],
    from: 'center'
  }),
  loop: true,
  alternate: true
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