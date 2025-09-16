import React from 'react';
import { SKILL_CATEGORIES } from '../constants';
import AnimatedSection from './AnimatedSection';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 md:py-32 text-center bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-text-primary">
            Clinical Expertise
          </h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto mb-16">
            I have developed a strong foundation in core medical competencies through rigorous academic training and hands-on clinical experience.
          </p>
        </AnimatedSection>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          {SKILL_CATEGORIES.map((category, index) => (
            <AnimatedSection key={category.categoryTitle}>
              <div className="h-full">
                <h3 className="text-2xl font-serif font-bold text-primary mb-6">{category.categoryTitle}</h3>
                <ul className="space-y-4">
                  {category.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center space-x-4 p-3 transition-all duration-300 rounded-lg hover:bg-primary/5 transform hover:-translate-y-1"
                    >
                      <div className="flex-shrink-0 bg-primary/10 p-2 rounded-full">
                         {skill.icon && <skill.icon className="w-6 h-6 text-primary" />}
                      </div>
                      <span className="font-medium text-text-primary text-lg">{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
