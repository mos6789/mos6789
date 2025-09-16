import React from 'react';
import { PUBLICATIONS, CERTIFICATIONS } from '../constants';
import ExternalLinkIcon from './icons/ExternalLinkIcon';
import MedicalIcon from './icons/MedicalIcon';

const Credentials: React.FC = () => {
  return (
    <section id="credentials" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4 text-text-primary">
          Credentials
        </h2>
        <p className="text-text-secondary text-lg text-center max-w-3xl mx-auto mb-20">
          A summary of my professional licenses, certifications, and academic contributions.
        </p>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-text-primary mb-8">Licenses & Certifications</h3>
            <div className="space-y-6">
              {CERTIFICATIONS.map((cert, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full mt-1">
                    <MedicalIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary text-lg">{cert.name}</h4>
                    <p className="text-text-secondary">{cert.issuingBody} - {cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-text-primary mb-8">Publications & Presentations</h3>
            <div className="space-y-6">
              {PUBLICATIONS.map((pub, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full mt-1">
                    <ExternalLinkIcon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary text-lg">{pub.title}</h4>
                    <p className="text-text-secondary italic">{pub.journal} - {pub.year}</p>
                    {pub.url && pub.url !== '#' && (
                        <a 
                        href={pub.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center text-sm font-semibold text-primary hover:underline mt-1"
                        >
                        Read More <ExternalLinkIcon className="w-4 h-4 ml-1" />
                        </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;