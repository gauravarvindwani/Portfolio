'use client';

import { useEffect, useState } from 'react';

const CursorTrail = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Don't initialize cursor trail on mobile
    if (isMobile) return;
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    document.body.appendChild(trail);

    const tailPositions: { x: number; y: number }[] = [];
    let animationId: number;

    const addStar = (x: number, y: number, type: 'main' | 'tail' = 'main') => {
      const star = document.createElement('span');
      star.className = type === 'main' ? 'star main-star' : 'star tail-star';
      star.style.left = `${x}px`;
      star.style.top = `${y}px`;
      trail.appendChild(star);

      const duration = type === 'main' ? 1500 : 800;
      setTimeout(() => {
        if (trail.contains(star)) {
          trail.removeChild(star);
        }
      }, duration);
    };

    const addGlitter = (x: number, y: number) => {
      // Add multiple glitter particles
      for (let i = 0; i < 3; i++) {
        const offsetX = (Math.random() - 0.5) * 20;
        const offsetY = (Math.random() - 0.5) * 20;
        
        const glitter = document.createElement('span');
        glitter.className = 'glitter';
        glitter.style.left = `${x + offsetX}px`;
        glitter.style.top = `${y + offsetY}px`;
        trail.appendChild(glitter);

        setTimeout(() => {
          if (trail.contains(glitter)) {
            trail.removeChild(glitter);
          }
        }, 600);
      }
    };

    const updateTail = () => {
      // Create tail effect by adding particles at previous positions
      for (let i = 0; i < tailPositions.length; i++) {
        const pos = tailPositions[i];
        if (Math.random() < 0.4) {
          addStar(pos.x, pos.y, 'tail');
        }
      }
    };

    const mouseMoveHandler = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      // Update tail positions
      tailPositions.unshift({ x, y });
      if (tailPositions.length > 20) {
        tailPositions.pop();
      }

      // Add main star with higher frequency
      if (Math.random() < 0.8) {
        addStar(x, y, 'main');
      }

      // Add glitter particles more frequently
      if (Math.random() < 0.7) {
        addGlitter(x, y);
      }

      updateTail();
    };

    // Animation loop for continuous tail effect
    const animate = () => {
      updateTail();
      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', mouseMoveHandler);
    animate();

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
      cancelAnimationFrame(animationId);
      if (document.body.contains(trail)) {
        document.body.removeChild(trail);
      }
    };
  }, [isMobile]);

  return null;
};

export default CursorTrail;
