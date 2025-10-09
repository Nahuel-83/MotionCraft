import React, { useEffect, useRef, useState } from 'react';
import { animate, stagger } from 'animejs';
import './CameraExplode.css';

const CameraExplode: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isExploded, setIsExploded] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isExploded) {
            setIsExploded(true);
            triggerAnimation();
          } else if (!entry.isIntersecting && isExploded) {
            // Reset cuando sale del viewport
            setTimeout(() => {
              setIsExploded(false);
              resetAnimation();
            }, 300);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [isExploded]);

  const triggerAnimation = () => {
    // Animación inicial: la cámara completa aparece
    animate('.camera-complete', {
      opacity: [0, 1],
      scale: [0.8, 1],
      duration: 1000,
      easing: 'outCubic',
      complete: () => {
        // Después de 800ms, explotar las partes
        setTimeout(() => {
          explodeParts();
        }, 800);
      }
    });
  };

  const resetAnimation = () => {
    // Reset todas las animaciones
    animate('.camera-complete', {
      opacity: 0,
      scale: 0.8,
      duration: 0
    });

    animate('.camera-part', {
      opacity: 0,
      translateX: 0,
      translateY: 0,
      rotate: 0,
      scale: 0.8,
      duration: 0
    });

    animate('.part-label', {
      opacity: 0,
      duration: 0
    });

    animate('.connector-line', {
      opacity: 0,
      scaleX: 0,
      duration: 0
    });
  };

  const explodeParts = () => {
    // Ocultar cámara completa
    animate('.camera-complete', {
      opacity: 0,
      scale: 0.9,
      duration: 400,
      easing: 'inCubic'
    });

    // Mostrar y animar las partes individuales
    setTimeout(() => {
      // Lente - se mueve hacia arriba izquierda
      animate('.camera-part.lens', {
        opacity: [0, 1],
        translateX: [-50, -180],
        translateY: [0, -120],
        rotate: [-15, -8],
        scale: [0.8, 1],
        duration: 1200,
        easing: 'outElastic(1, 0.6)'
      });

      // Cuerpo - se queda en el centro pero se separa ligeramente
      animate('.camera-part.body', {
        opacity: [0, 1],
        translateY: [0, 20],
        scale: [0.8, 1],
        duration: 1000,
        delay: 150,
        easing: 'outCubic'
      });

      // Visor - se mueve hacia arriba derecha
      animate('.camera-part.viewfinder', {
        opacity: [0, 1],
        translateX: [50, 200],
        translateY: [0, -100],
        rotate: [10, 5],
        scale: [0.8, 1],
        duration: 1200,
        delay: 100,
        easing: 'outElastic(1, 0.6)'
      });

      // Animar las etiquetas con delay
      animate('.part-label', {
        opacity: [0, 1],
        translateY: [20, 0],
        scale: [0.9, 1],
        delay: stagger(200, { start: 800 }),
        duration: 600,
        easing: 'outQuad'
      });

      // Animar las líneas conectoras
      animate('.connector-line', {
        scaleX: [0, 1],
        opacity: [0, 1],
        delay: stagger(150, { start: 1000 }),
        duration: 500,
        easing: 'outCubic'
      });
    }, 400);
  };

  return (
    <div ref={sectionRef} className="camera-explode-section">
      <div className="camera-explode-container">
        <h2 className="camera-explode-title">Anatomía de una Cámara</h2>
        <p className="camera-explode-subtitle">Animación de descomposición 3D con scroll reveal</p>

        <div className="camera-stage">
          {/* Cámara completa inicial */}
          <div className="camera-complete">
            <svg viewBox="0 0 200 140" className="camera-svg">
              <defs>
                <linearGradient id="cameraGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
              {/* Cuerpo de la cámara */}
              <rect x="40" y="50" width="120" height="70" rx="8" fill="url(#cameraGrad)" />
              {/* Lente */}
              <circle cx="90" cy="85" r="25" fill="#1e293b" />
              <circle cx="90" cy="85" r="18" fill="#475569" />
              <circle cx="90" cy="85" r="12" fill="#0ea5e9" opacity="0.6" />
              {/* Visor */}
              <rect x="130" y="55" width="20" height="15" rx="2" fill="#1e293b" />
              {/* Flash */}
              <circle cx="150" cy="60" r="5" fill="#fbbf24" />
              {/* Botón */}
              <rect x="145" y="48" width="12" height="6" rx="2" fill="#ef4444" />
            </svg>
          </div>

          {/* Partes individuales */}
          <div className="camera-parts">
            {/* Lente */}
            <div className="camera-part lens">
              <svg viewBox="0 0 80 80" className="part-svg">
                <defs>
                  <radialGradient id="lensGrad">
                    <stop offset="0%" stopColor="#0ea5e9" />
                    <stop offset="100%" stopColor="#1e293b" />
                  </radialGradient>
                </defs>
                <circle cx="40" cy="40" r="35" fill="#1e293b" />
                <circle cx="40" cy="40" r="28" fill="#475569" />
                <circle cx="40" cy="40" r="20" fill="url(#lensGrad)" opacity="0.8" />
                <circle cx="40" cy="40" r="12" fill="#0ea5e9" opacity="0.4" />
              </svg>
              <div className="connector-line lens-line"></div>
              <div className="part-label">
                <h3>Lente</h3>
                <p>Captura la luz y enfoca la imagen</p>
              </div>
            </div>

            {/* Cuerpo */}
            <div className="camera-part body">
              <svg viewBox="0 0 140 90" className="part-svg">
                <defs>
                  <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
                <rect x="10" y="10" width="120" height="70" rx="8" fill="url(#bodyGrad)" />
                <rect x="30" y="25" width="80" height="40" rx="4" fill="#1e293b" opacity="0.3" />
                <circle cx="100" cy="20" r="6" fill="#fbbf24" />
              </svg>
              <div className="connector-line body-line"></div>
              <div className="part-label">
                <h3>Cuerpo</h3>
                <p>Contiene el sensor y la electrónica</p>
              </div>
            </div>

            {/* Visor */}
            <div className="camera-part viewfinder">
              <svg viewBox="0 0 60 50" className="part-svg">
                <defs>
                  <linearGradient id="viewGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1e293b" />
                    <stop offset="100%" stopColor="#0f172a" />
                  </linearGradient>
                </defs>
                <rect x="10" y="10" width="40" height="30" rx="3" fill="url(#viewGrad)" />
                <rect x="15" y="15" width="30" height="20" rx="2" fill="#0ea5e9" opacity="0.2" />
                <rect x="22" y="8" width="16" height="5" rx="2" fill="#ef4444" />
              </svg>
              <div className="connector-line viewfinder-line"></div>
              <div className="part-label">
                <h3>Visor</h3>
                <p>Permite encuadrar la fotografía</p>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-hint">
          <p>Haz scroll para ver la animación</p>
          <div className="scroll-arrow">↓</div>
        </div>
      </div>
    </div>
  );
};

export default CameraExplode;
