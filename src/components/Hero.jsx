import React from 'react';
import img from '/assets/image.png';

const Hero = () => {
  const handleViewWorkClick = (e) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };
    
  return (
    <section id="home" className="min-h-screen flex items-center py-20">
      <div className="w-full px-6 sm:px-16 lg:px-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Text content container. Centered on mobile, left-aligned on desktop. */}
        <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Design that
              <br />
              <span className="text-primary">Inspires.</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-light text-text-secondary mb-10 max-w-2xl mx-auto md:mx-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              I'm Jane Doe, a UI/UX designer dedicated to building intuitive, beautiful, and human-centered digital experiences.
            </p>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <a 
                href="#projects" 
                onClick={handleViewWorkClick} 
                className="bg-primary hover:bg-primary-focus text-white font-bold py-4 px-10 rounded-full transition duration-300 transform hover:scale-105 text-lg inline-block shadow-lg shadow-primary/30 hover:shadow-primary/50"
              >
                Explore My Work
              </a>
            </div>
        </div>
        {/* Image container */}
        <div className="flex justify-center items-center mt-12 md:mt-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="relative w-full max-w-sm aspect-square md:max-w-md">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl animate-pulse duration-2000"></div>
            <img 
              src={img} 
              alt="Portrait of Jane Doe"
              className="relative w-full h-full object-cover rounded-3xl border-4 border-white/10 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
