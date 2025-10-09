import React, { useEffect } from 'react';
import { animate, stagger } from 'animejs';
import ExampleCard from './ExampleCard';
import './RotationExample.css';

const RotationExample: React.FC = () => {
  useEffect(() => {
    animate('.rotation-square', {
      x: [
        { value: -100, duration: 1200, easing: 'inOutCubic' },
        { value: 100, duration: 1200, easing: 'inOutCubic' },
        { value: 0, duration: 1200, easing: 'inOutCubic' }
      ],
      rotate: [0, 360],
      scale: [1, 1.25, 1],
      delay: stagger(180),
      duration: 3600,
      easing: 'inOutQuart',
      loop: true
    });
  }, []);

  const code = `animate('.square', {
  x: [-100, 100, 0],
  rotate: [0, 360],
  scale: [1, 1.25, 1],
  delay: stagger(180),
  duration: 3600,
  easing: 'inOutQuart',
  loop: true
});`;

  return (
    <ExampleCard title="Continuous Loop" titleColor="title-yellow" code={code}>
      <div className="rotation-container">
        <div className="rotation-square rotation-1"></div>
        <div className="rotation-square rotation-2"></div>
        <div className="rotation-square rotation-3"></div>
      </div>
    </ExampleCard>
  );
};

export default RotationExample;