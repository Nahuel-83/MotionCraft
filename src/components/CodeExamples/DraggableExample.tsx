import React, { useEffect, useState } from 'react';
import { animate, createSpring } from 'animejs';
import ExampleCard from './ExampleCard';
import './DraggableExample.css';

const DraggableExample: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - startPos.x,
          y: e.clientY - startPos.y
        });
      }
    };

    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        const element = document.querySelector('.draggable-item');
        if (element) {
          animate(element, {
            translateX: 0,
            translateY: 0,
            duration: 1000,
            easing: createSpring({
              stiffness: 100,
              damping: 12
            })
          });
        }
        setPosition({ x: 0, y: 0 });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, startPos]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartPos({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const code = `// Drag me and release!
animate('.item', {
  translateX: 0,
  translateY: 0,
  duration: 1000,
  easing: createSpring({
    stiffness: 100,
    damping: 12
  })
});`;

  return (
    <ExampleCard title="Interactive Drag" titleColor="title-pink" code={code}>
      <div
        className="draggable-item"
        onMouseDown={handleMouseDown}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          cursor: isDragging ? 'grabbing' : 'grab'
        }}
      >
        🎯
      </div>
    </ExampleCard>
  );
};

export default DraggableExample;