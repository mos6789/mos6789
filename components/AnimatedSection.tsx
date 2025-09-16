import React, { useRef, useEffect, useState } from 'react';

const AnimatedSection: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`${className || ''} transition-opacity duration-1000 ease-out ${
        isVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ willChange: 'opacity, transform' }} // Performance optimization for animations
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
