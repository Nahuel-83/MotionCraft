import React, { useEffect } from 'react';
import { animate } from 'animejs';
import ExampleCard from './ExampleCard';
import './GooeyBlobsExample.css';

const GooeyBlobsExample: React.FC = () => {
  useEffect(() => {
    animate('.blob', {
      translateX: [
        { value: 120, duration: 2000, easing: 'inOutQuart' },
        { value: -120, duration: 2400, easing: 'inOutQuart' },
        { value: 0, duration: 1800, easing: 'inOutQuart' }
      ],
      translateY: [
        { value: -50, duration: 1600, easing: 'inOutCubic' },
        { value: 60, duration: 2200, easing: 'inOutCubic' },
        { value: 0, duration: 1800, easing: 'inOutCubic' }
      ],
      scale: [1, 1.3, 0.95, 1],
      loop: true,
      delay: (_el, i) => i * 250
    });

    animate('.blob', {
      borderRadius: ['30% 70% 70% 30% / 30% 30% 70% 70%',
                     '50% 50% 30% 70% / 50% 50% 50% 50%',
                     '70% 30% 50% 50% / 40% 60% 40% 60%',
                     '40% 60% 60% 40% / 60% 40% 40% 60%'],
      duration: 6000,
      direction: 'alternate',
      easing: 'inOutSine',
      loop: true
    });
  }, []);

  const code = `// Organic gooey blobs
animate('.blob', {
  translateX: [120, -120, 0],
  translateY: [-50, 60, 0],
  scale: [1, 1.35, 0.9, 1],
  loop: true
});`;

  return (
    <ExampleCard title="Gooey Blobs" titleColor="title-pink" code={code}>
      <div className="gooey-stage">
        <svg width="0" height="0">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -8"/>
            </filter>
          </defs>
        </svg>
        <div className="blobs" style={{ filter: 'url(#goo)' }}>
          <div className="blob b1" />
          <div className="blob b2" />
          <div className="blob b3" />
          <div className="blob b4" />
        </div>
      </div>
    </ExampleCard>
  );
};

export default GooeyBlobsExample;
