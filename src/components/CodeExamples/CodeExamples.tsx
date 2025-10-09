import React, { useEffect } from 'react';
import { animate } from 'animejs';
import MorphingExample from './MorphingExample';
import StaggerExample from './StaggerExample';
import DraggableExample from './DraggableExample';
import RotationExample from './RotationExample';
import PathAnimationExample from './PathAnimationExample';
import TextAnimationExample from './TextAnimationExample';
import ParallaxCardsExample from './ParallaxCardsExample';
import GooeyBlobsExample from './GooeyBlobsExample';
import OrbitParticlesExample from './OrbitParticlesExample';
import FlipGalleryExample from './FlipGalleryExample';
import TimelineOrchestratorExample from './TimelineOrchestratorExample';
import ScrollRevealExample from './ScrollRevealExample';
import './CodeExamples.css';

const CodeExamples: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animate(entry.target, {
            opacity: [0, 1],
            translateY: [50, 0],
            scale: [0.95, 1],
            duration: 800,
            easing: 'outCubic'
          });
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observar todas las tarjetas de ejemplo
    const cards = document.querySelectorAll('.example-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="code-examples-container">
      <div className="code-examples-grid">
        <MorphingExample />
        <StaggerExample />
        <PathAnimationExample />
        <TextAnimationExample />
        <DraggableExample />
        <RotationExample />
        <ParallaxCardsExample />
        <GooeyBlobsExample />
        <OrbitParticlesExample />
        <FlipGalleryExample />
        <TimelineOrchestratorExample />
        <ScrollRevealExample />
      </div>
    </div>
  );
};

export default CodeExamples;