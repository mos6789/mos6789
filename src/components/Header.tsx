import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="text-text-secondary hover:text-primary transition-colors duration-300 font-medium">
    {children}
  </a>
);

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-surface/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto flex items-center justify-between p-6">
        <a href="#home" className="text-2xl font-serif font-bold text-primary">
          SS
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Expertise</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
        <a href={`mailto:${PERSONAL_INFO.email}`} className="hidden md:inline-block px-5 py-2 text-sm font-bold text-primary border-2 border-primary rounded-full hover:bg-primary hover:text-surface transition-colors duration-300">
          Get in Touch
        </a>
      </div>
    </header>
  );
};

export default Header;