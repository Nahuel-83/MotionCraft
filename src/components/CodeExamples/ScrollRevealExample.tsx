import React, { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import ExampleCard from './ExampleCard';
import './ScrollRevealExample.css';

const ScrollRevealExample: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const items = el.querySelectorAll('.reveal-item');

    const reveal = () => {
      animate(items, {
        translateY: [30, 0],
        translateX: [-20, 0],
        opacity: [0, 1],
        scale: [0.95, 1],
        delay: stagger(120),
        duration: 800,
        easing: 'outQuart'
      });
    };

    // Run once; in a real page we'd hook IntersectionObserver to real scroll
    reveal();
  }, []);

  const code = `// Scroll-like reveal
animate('.reveal-item', {
  translateY: [30,0],
  translateX: [-20,0],
  opacity: [0,1],
  scale: [0.95,1],
  delay: stagger(120),
  easing: 'outQuart'
});`;

  return (
    <ExampleCard title="Scroll Reveal" titleColor="title-yellow" code={code}>
      <div ref={ref} className="reveal-list">
        <div className="reveal-item">Reveal A</div>
        <div className="reveal-item">Reveal B</div>
        <div className="reveal-item">Reveal C</div>
        <div className="reveal-item">Reveal D</div>
      </div>
    </ExampleCard>
  );
};

export default ScrollRevealExample;
