import React, { useEffect } from 'react';
import { animate } from 'animejs';
import ExampleCard from './ExampleCard';
import './PathAnimationExample.css';

const PathAnimationExample: React.FC = () => {
  useEffect(() => {
    animate('.path-circle', {
      translateX: [
        { value: 150, duration: 1200, easing: 'inOutCubic' },
        { value: 0, duration: 1200, easing: 'inOutCubic' }
      ],
      translateY: [
        { value: -80, duration: 600, easing: 'outQuad' },
        { value: 0, duration: 600, easing: 'inQuad' },
        { value: -80, duration: 600, easing: 'outQuad' },
        { value: 0, duration: 600, easing: 'inQuad' }
      ],
      scale: [1, 1.4, 1, 1.4, 1],
      rotate: [0, 180, 360],
      duration: 2400,
      loop: true
    });
  }, []);

  const code = `animate('.circle', {
  translateX: [150, 0],
  translateY: [-80, 0, -80, 0],
  scale: [1, 1.4, 1, 1.4, 1],
  rotate: [0, 180, 360],
  duration: 2400,
  loop: true
});`;

  return (
    <ExampleCard title="Path Animation" titleColor="title-cyan" code={code}>
      <div className="path-circle"></div>
    </ExampleCard>
  );
};

export default PathAnimationExample;