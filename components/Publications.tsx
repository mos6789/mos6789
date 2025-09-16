import React from 'react';
import { PUBLICATIONS } from '../constants';
import ExternalLinkIcon from './icons/ExternalLinkIcon';

const Publications: React.FC = () => {
  return (
    <section id="publications" className="py-20 md:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Publications & <span className="text-primary">Presentations</span>
      </h2>
      <p className="text-text-secondary text-center max-w-2xl mx-auto mb-12">
        My contributions to medical literature and academic conferences.
      </p>
      <div className="max-w-4xl mx-auto space-y-8">
        {PUBLICATIONS.map((pub, index) => (
          <div
            key={index}
            className="bg-surface p-6 rounded-lg border border-gray-200 hover:shadow-lg hover:border-primary/50 transition-all duration-300"
          >
            <h3 className="text-lg font-bold text-primary mb-2">{pub.title}</h3>
            <p className="text-text-secondary italic mb-3">
              {pub.journal} - {pub.year}
            </p>
            {pub.url && pub.url !== '#' && (
               <a 
                href={pub.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-sm font-semibold text-primary hover:underline"
              >
                Read More <ExternalLinkIcon className="w-4 h-4 ml-1" />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;
