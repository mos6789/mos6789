import React from 'react';
import { EXPERIENCES } from '../constants';
import ProjectCard from './ProjectCard';
import AnimatedSection from './AnimatedSection';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-surface">
      <div className="container mx-auto px-6 md:px-12">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4 text-text-primary">
            Clinical Experience
          </h2>
          <p className="text-text-secondary text-lg text-center max-w-3xl mx-auto mb-20">
            A summary of my hands-on clinical experience, from my internship rotations to my current role as a Casualty Medical Officer.
          </p>
        </AnimatedSection>
        <AnimatedSection>
          <div className="relative max-w-3xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 h-full w-1 bg-primary/10 transform -translate-x-1/2"></div>
            
            <div className="space-y-16">
              {EXPERIENCES.map((experience, index) => (
                <ProjectCard key={index} experience={experience} index={index} />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Experience;
