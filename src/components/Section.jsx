import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Section = ({ children, id, className = '' }) => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id={id}
      className={`py-20 md:py-32 transition-opacity duration-1000 ${isIntersecting ? 'animate-fade-in-up' : 'opacity-0'} ${className}`}
    >
      <div className="w-full px-6 sm:px-16 lg:px-20">
        {children}
      </div>
    </section>
  );
};

export default Section;
