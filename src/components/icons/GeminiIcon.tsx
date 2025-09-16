import React from 'react';

const GeminiIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 2.5C12 2.5 10 4.5 7.5 7C5 9.5 2.5 10 2.5 12C2.5 14 5 14.5 7.5 17C10 19.5 12 21.5 12 21.5C12 21.5 14 19.5 16.5 17C19 14.5 21.5 14 21.5 12C21.5 10 19 9.5 16.5 7C14 4.5 12 2.5 12 2.5ZM12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7Z" />
  </svg>
);

export default GeminiIcon;
