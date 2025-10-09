import React from 'react';
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
  return (
    <section className="code-examples-section">
      <div className="code-examples-container">
        <h2 className="code-examples-title">See It In Action</h2>

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
    </section>
  );
};

export default CodeExamples;