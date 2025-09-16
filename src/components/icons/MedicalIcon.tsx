import React from 'react';

const MedicalIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M13 2H11V11H2V13H11V22H13V13H22V11H13V2Z" />
  </svg>
);

export default MedicalIcon;
