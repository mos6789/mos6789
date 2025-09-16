import React from 'react';
import type { Experience } from '../types';
import StarIcon from './icons/StarIcon';

interface ProjectCardProps {
  experience: Experience;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ experience, index }) => {
  const isOdd = index % 2 !== 0;
  
  return (
    <div className="relative flex items-center w-full">
      <div className={`w-1/2 ${isOdd ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
        {/* Empty div for spacing on one side */}
      </div>

      {/* Timeline Dot */}
      <div className="absolute left-1/2 top-1/2 w-5 h-5 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 border-4 border-surface"></div>

      <div className={`w-1/2 ${isOdd ? 'pl-8 text-left' : 'pr-8 text-right'}`}>
        <div className={`p-6 bg-surface rounded-xl shadow-lg border border-gray-200/50 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl`}>
          <h3 className="text-xl font-bold text-primary mb-2">{experience.title}</h3>
          <p className="text-text-secondary mb-4">{experience.description}</p>
          
          {experience.highlight && (
            <div className="mt-4 pt-4 border-t border-primary/10">
              <div className="flex items-start space-x-3">
                <StarIcon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"/>
                <p className="text-sm font-medium text-text-secondary">{experience.highlight}</p>
              </div>
            </div>
          )}
          
          <div className={`flex flex-wrap gap-2 mt-4 ${isOdd ? 'justify-start' : 'justify-end'}`}>
            {experience.tags.map((tag) => (
              <span key={tag} className="bg-primary/10 text-primary text-xs font-semibold px-2.5 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
