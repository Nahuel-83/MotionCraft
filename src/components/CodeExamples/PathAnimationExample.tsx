import React, { useEffect } from 'react';
import { animate } from 'animejs';
import ExampleCard from './ExampleCard';
import './PathAnimationExample.css';

const PathAnimationExample: React.FC = () => {
  useEffect(() => {
    animate('.path-circle', {
      translateX: [
        { value: 150, duration: 1000 },
        { value: 0, duration: 1000 }
      ],
      translateY: [
        { value: -80, duration: 500 },
        { value: 0, duration: 500 },
        { value: -80, duration: 500 },
        { value: 0, duration: 500 }
      ],
      scale: [1, 1.5, 1, 1.5, 1],
      rotate: [0, 180, 360],
      easing: 'inOutQuad',
      duration: 2000,
      loop: true
    });
  }, []);

  const code = `animate('.circle', {
  translateX: [150, 0],
  translateY: [-80, 0, -80, 0],
  scale: [1, 1.5, 1, 1.5, 1],
  rotate: [0, 180, 360],
  duration: 2000,
  loop: true
});`;

  return (
    <ExampleCard title="Path Animation" titleColor="title-cyan" code={code}>
      <div className="path-circle"></div>
    </ExampleCard>
  );
};

export default PathAnimationExample;