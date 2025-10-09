import React, { useEffect, useRef } from 'react';
import { animate, createSpring } from 'animejs';
import ExampleCard from './ExampleCard';
import './ParallaxCardsExample.css';

const ParallaxCardsExample: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width; // -0.5 .. 0.5
      const dy = (e.clientY - cy) / rect.height; // -0.5 .. 0.5

      const layers = container.querySelectorAll<HTMLElement>('.parallax-layer');
      layers.forEach((layer) => {
        const depth = Number(layer.dataset.depth || 1);
        animate(layer, {
          translateX: dx * depth * 30,
          translateY: dy * depth * 22,
          rotateZ: dx * depth * 3,
          duration: 400,
          easing: createSpring({ stiffness: 140, damping: 20 })
        });
      });
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const code = `// Parallax layers follow your cursor
animate('.parallax-layer', {
  translateX: (el) => dx * depth * 30,
  translateY: (el) => dy * depth * 22,
  rotateZ: (el) => dx * depth * 3,
  duration: 400,
  easing: createSpring({ stiffness: 140, damping: 20 })
});`;

  return (
    <ExampleCard title="Parallax Layers" titleColor="title-cyan" code={code}>
      <div ref={containerRef} className="parallax-card">
        <div className="parallax-layer layer-1" data-depth="1"/>
        <div className="parallax-layer layer-2" data-depth="2"/>
        <div className="parallax-layer layer-3" data-depth="3"/>
        <div className="parallax-layer layer-4" data-depth="4"/>
      </div>
    </ExampleCard>
  );
};

export default ParallaxCardsExample;
