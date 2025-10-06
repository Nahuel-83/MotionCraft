import React, { useEffect } from 'react';
import { animate, stagger } from 'animejs';
import ExampleCard from './ExampleCard';
import './TextAnimationExample.css';

const TextAnimationExample: React.FC = () => {
  useEffect(() => {
    const letters = 'ANIME.JS'.split('');
    const container = document.querySelector('.text-animation-container');
    
    if (container) {
      container.innerHTML = letters
        .map(letter => `<span class="text-letter">${letter}</span>`)
        .join('');

      animate('.text-letter', {
        translateY: [-50, 0],
        opacity: [0, 1],
        rotate: [-45, 0],
        scale: [0.3, 1],
        delay: stagger(100),
        duration: 800,
        easing: 'out(3)',
        loop: true,
        loopDelay: 2000
      });
    }
  }, []);

  const code = `animate('.letter', {
  translateY: [-50, 0],
  opacity: [0, 1],
  rotate: [-45, 0],
  scale: [0.3, 1],
  delay: stagger(100),
  loop: true
});`;

  return (
    <ExampleCard title="Text Animation" titleColor="title-purple" code={code}>
      <div className="text-animation-container"></div>
    </ExampleCard>
  );
};

export default TextAnimationExample;