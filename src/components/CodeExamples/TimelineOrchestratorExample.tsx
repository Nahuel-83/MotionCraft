import React, { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import ExampleCard from './ExampleCard';
import './TimelineOrchestratorExample.css';

const TimelineOrchestratorExample: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const baseSel = ref.current ? `#${ref.current.id} ` : '';

    animate(`${baseSel}.tl-bar`, {
      scaleX: [0, 1],
      transformOrigin: 'left center',
      duration: 1000,
      easing: 'outQuart',
      complete: () => {
        animate(`${baseSel}.tl-dot`, {
          translateY: [-40, 0],
          opacity: [0, 1],
          scale: [0.5, 1.2, 1],
          delay: stagger(140),
          duration: 800,
          easing: 'outElastic(1, 0.6)'
        });
        animate(`${baseSel}.tl-card`, {
          translateX: [40, 0],
          opacity: [0, 1],
          delay: stagger(160),
          duration: 800,
          easing: 'outCubic'
        });
      }
    });
  }, []);

  const code = `// Orchestrated timeline sequence
animate('.tl-bar', {
  scaleX: [0,1],
  complete: () => {
    animate('.tl-dot', { translateY: [-40,0], scale: [0.5,1.2,1], delay: stagger(140) });
    animate('.tl-card', { translateX: [40,0], opacity: [0,1], delay: stagger(160) });
  }
});`;

  const uid = 'tl-' + Math.random().toString(36).slice(2);

  return (
    <ExampleCard title="Timeline Orchestrator" titleColor="title-cyan" code={code}>
      <div id={uid} ref={ref} className="tl-stage">
        <div className="tl-bar" />
        <div className="tl-row">
          <div className="tl-dot" />
          <div className="tl-card">Step 1</div>
        </div>
        <div className="tl-row">
          <div className="tl-dot" />
          <div className="tl-card">Step 2</div>
        </div>
        <div className="tl-row">
          <div className="tl-dot" />
          <div className="tl-card">Step 3</div>
        </div>
      </div>
    </ExampleCard>
  );
};

export default TimelineOrchestratorExample;
