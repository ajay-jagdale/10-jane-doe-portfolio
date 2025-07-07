import React from 'react';

const iconProps = {
  className: "w-8 h-8",
  strokeWidth: "1.5",
};

export const FigmaIcon = () => (
  <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <path d="M6 3h6v6h-6z" />
    <path d="M9 15a3 3 0 0 0 3 3h6v-6h-6a3 3 0 0 0 -3 3z" />
    <path d="M15 9h-3v6h3a3 3 0 0 0 3 -3v-3a3 3 0 0 0 -3 -3z" />
    <path d="M9 6h3v3h-3z" />
  </svg>
);

export const SketchIcon = () => (
  <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3l8 4.5v9l-8 4.5l-8 -4.5v-9l8 -4.5" />
    <path d="M12 3l-8 4.5" />
    <path d="M20 7.5l-8 4.5" />
    <path d="M12 12l8 -4.5" />
    <path d="M4 7.5l8 4.5" />
    <path d="M12 12v9.5" />
  </svg>
);

export const XDIcon = () => (
  <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 3h12v12a6 6 0 0 1 -6 6h-0a6 6 0 0 1 -6 -6v-12z" />
    <path d="M9 9h6v6h-6z" />
  </svg>
);

export const PrototypingIcon = () => (
  <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 3h10a2 2 0 0 1 2 2v10m0 4a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14" />
    <path d="M12 15l3 -3l-3 -3" />
    <path d="M3 3l18 18" />
  </svg>
);

export const ResearchIcon = () => (
  <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 16a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
    <path d="M12 12v-8" />
    <path d="M12 2v2" />
    <path d="M8 6h8" />
    <path d="M6 4h2" />
    <path d="M16 4h2" />
  </svg>
);

export const CodeIcon = () => (
  <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 8l-4 4l4 4" />
    <path d="M17 8l4 4l-4 4" />
    <path d="M14 4l-4 16" />
  </svg>
);