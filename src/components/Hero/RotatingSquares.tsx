import React, { useEffect } from 'react';
import { animate } from 'animejs';
import './RotatingSquares.css';

const RotatingSquares: React.FC = () => {
  useEffect(() => {
    animate('.rotating-square', {
      rotate: 360,
      duration: 4000,
      easing: 'linear',
      loop: true
    });
  }, []);

  return (
    <div className="rotating-squares">
      <div className="rotating-square square-1"></div>
      <div className="rotating-square square-2"></div>
      <div className="rotating-square square-3"></div>
    </div>
  );
};

export default RotatingSquares;