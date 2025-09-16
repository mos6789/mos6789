import React from 'react';
import { CERTIFICATIONS } from '../constants';
import CertificateIcon from './icons/CertificateIcon';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 md:py-32 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Licenses & <span className="text-primary">Certifications</span>
      </h2>
      <p className="text-text-secondary max-w-2xl mx-auto mb-12">
        A collection of my professional credentials and specialized training.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {CERTIFICATIONS.map((cert) => (
          <div
            key={cert.name}
            className="bg-surface p-6 rounded-lg flex flex-col items-center justify-center space-y-4 border border-gray-200 hover:shadow-xl hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2"
          >
            <CertificateIcon className="w-12 h-12 text-primary" />
            <h3 className="font-semibold text-text-primary text-center">{cert.name}</h3>
            <p className="text-sm text-text-secondary">{cert.issuingBody} - {cert.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
