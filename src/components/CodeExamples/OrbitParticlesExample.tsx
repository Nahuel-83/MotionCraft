import React, { useEffect } from 'react';
import { animate } from 'animejs';
import ExampleCard from './ExampleCard';
import './OrbitParticlesExample.css';

const OrbitParticlesExample: React.FC = () => {
  useEffect(() => {
    const circles = document.querySelectorAll('.orbit .particle');
    circles.forEach((el, i) => {
      const radius = 35 + i * 12;
      animate(el, {
        translateX: [radius, -radius],
        translateY: [0, 0],
        rotate: 360,
        transformOrigin: 'center center',
        duration: 4500 + i * 700,
        easing: 'linear',
        loop: true,
        direction: 'alternate'
      });

      animate(el, {
        scale: [0.85, 1.3, 0.85],
        opacity: [0.65, 1, 0.65],
        duration: 2000 + i * 250,
        loop: true,
        easing: 'inOutCubic'
      });
    });
  }, []);

  const code = `// Orbiting particles with pulse
animate('.particle', {
  translateX: [r, -r],
  rotate: 360,
  scale: [0.85, 1.3, 0.85],
  opacity: [0.65, 1, 0.65],
  loop: true
});`;

  return (
    <ExampleCard title="Orbit Particles" titleColor="title-yellow" code={code}>
      <div className="orbit">
        <div className="particle p1" />
        <div className="particle p2" />
        <div className="particle p3" />
        <div className="particle p4" />
      </div>
    </ExampleCard>
  );
};

export default OrbitParticlesExample;
