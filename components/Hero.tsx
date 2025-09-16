import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen text-center bg-gradient-to-b from-background to-teal-50/50 py-20 px-4">
       <div className="max-w-5xl mx-auto animate-fade-in-up">
        <p className="mb-4 text-lg font-semibold tracking-widest text-primary uppercase">
          Sidharth Sajeev, MBBS
        </p>
        <h1 className="text-5xl md:text-7xl font-serif font-extrabold text-text-primary mb-6">
          A dedicated physician committed to clinical excellence.
        </h1>
        <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-10">
         {PERSONAL_INFO.bio}
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#experience"
            className="px-8 py-4 font-bold text-surface bg-primary rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary/30"
          >
            Explore My Journey
          </a>
          <a
            href="#contact"
            className="px-8 py-4 font-bold text-primary bg-surface rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;