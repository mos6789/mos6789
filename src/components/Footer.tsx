import React from 'react';
import { PERSONAL_INFO } from '../constants';
import EmailIcon from './icons/EmailIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface border-t border-gray-200/80">
      <div className="container mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-text-secondary text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Dr. {PERSONAL_INFO.name}. All Rights Reserved.
        </p>
        <div className="flex items-center space-x-6">
          <a href={`mailto:${PERSONAL_INFO.email}`} aria-label="Email" className="text-text-secondary hover:text-primary transition-colors">
            <EmailIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;