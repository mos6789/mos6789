import React from 'react';

const TypeScriptIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    className={className}
  >
    <path fill="#007acc" d="M24,4,4,24V44H44V4Z"/>
    <path fill="#fff" d="M27.8,21.1h-4.4V37.2h4.4V34.3h2.3c3.4,0,5.9-2.5,5.9-6.5s-2.5-6.7-6-6.7Zm-.1,10.3h-2.2V24h2.2c2.1,0,3.3,1.2,3.3,3.7S30,31.4,27.7,31.4Z"/>
    <path fill="#fff" d="M19.1 21.1H11v16.1h4.4V24.5h3.7v-3.4z" />
  </svg>
);

export default TypeScriptIcon;
