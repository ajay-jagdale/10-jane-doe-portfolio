import React, { useState, useEffect, useRef } from 'react';
import { NAV_LINKS } from '../constants'; // Removed `.tsx` extension

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const [pillStyle, setPillStyle] = useState({ opacity: 0 });

  const navRef = useRef(null);
  const linkRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const headerHeight = 80;
      let currentSection = '#home';
      let minDistance = Infinity;

      NAV_LINKS.forEach(link => {
        const section = document.querySelector(link.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom >= headerHeight) {
            const distance = Math.abs(rect.top - headerHeight);
            if (distance < minDistance) {
              minDistance = distance;
              currentSection = link.href;
            }
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updatePillPosition = () => {
      const activeLinkEl = linkRefs.current[activeSection];
      if (activeLinkEl) {
        setPillStyle({
          width: `${activeLinkEl.offsetWidth}px`,
          transform: `translateX(${activeLinkEl.offsetLeft}px)`,
          opacity: 1,
        });
      }
    };

    const timeoutId = setTimeout(updatePillPosition, 50);
    window.addEventListener('resize', updatePillPosition);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', updatePillPosition);
    };
  }, [activeSection]);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(href);
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/20 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'}`}>
      <div className="w-full px-6 sm:px-16 lg:px-20">
        <div className="flex justify-between items-center h-20">
          <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="text-2xl font-bold transition-colors hover:text-primary">
            <span className="text-primary">J</span>D.
          </a>
          <nav ref={navRef} className="hidden md:flex items-center relative p-1 bg-white/5 rounded-full">
            <div
              className="absolute bg-primary rounded-full transition-all duration-500 ease-out"
              style={{ ...pillStyle, height: 'calc(100% - 8px)', top: '4px' }}
            />
            <div className="flex items-center space-x-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  ref={(el) => { linkRefs.current[link.href] = el; }}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative transition-colors duration-300 font-medium z-10 py-2 px-4 rounded-full ${activeSection === link.href ? 'text-white' : 'text-text-secondary hover:text-white'}`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-text-primary focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden pb-4 bg-black/20 backdrop-blur-lg -mx-6 px-6 border-b border-white/10">
            <nav className="flex flex-col space-y-2 items-center pt-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-text-secondary hover:text-primary transition-colors font-medium py-2 w-full text-center rounded-md hover:bg-white/10"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
