import React from 'react';

const CertificateIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
    <polyline points="13 2 13 9 20 9"></polyline>
    <circle cx="10.5" cy="15.5" r="2.5"></circle>
    <path d="M10.5 13v-2.5a2.5 2.5 0 0 0-5 0v5a2.5 2.5 0 0 0 5 0V18"></path>
  </svg>
);

export default CertificateIcon;
