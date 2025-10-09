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
        translateY: [-60, 0],
        opacity: [0, 1],
        rotate: [-45, 0],
        scale: [0.5, 1.1, 1],
        delay: stagger(80),
        duration: 1000,
        easing: 'outElastic(1, 0.6)',
        loop: true,
        loopDelay: 2500
      });
    }
  }, []);

  const code = `animate('.letter', {
  translateY: [-60, 0],
  opacity: [0, 1],
  rotate: [-45, 0],
  scale: [0.5, 1.1, 1],
  delay: stagger(80),
  easing: 'outElastic(1, 0.6)',
  loop: true
});`;

  return (
    <ExampleCard title="Text Animation" titleColor="title-purple" code={code}>
      <div className="text-animation-container"></div>
    </ExampleCard>
  );
};

export default TextAnimationExample;