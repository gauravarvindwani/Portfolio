'use client';

import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold = 0.3) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Once visible, stop observing to keep it permanently visible
          observer.disconnect();
        }
      },
      {
        threshold: threshold, // Trigger when specified % of the element is visible
        rootMargin: '0px 0px -100px 0px', // Start animation when element is about to come into view
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [threshold, isVisible]);

  return { ref, isVisible };
};
