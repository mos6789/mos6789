import React from 'react';
import { PERSONAL_INFO } from '../constants';
import EmailIcon from './icons/EmailIcon';
import AnimatedSection from './AnimatedSection';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 md:py-32 text-center bg-primary/5">
      <AnimatedSection>
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-text-primary">
            Get In Touch
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-12">
            I'm actively seeking opportunities for a surgical residency program and am open to collaborations. Please feel free to connect or reach out via email.
          </p>
          <div className="flex justify-center items-center flex-col sm:flex-row gap-8">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="inline-flex items-center justify-center px-8 py-4 font-bold text-surface bg-primary rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary/30">
              <EmailIcon className="w-6 h-6 mr-3" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Contact;