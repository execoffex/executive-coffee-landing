import React from 'react';
import { scrollToSection } from '../utils/helpers';

const CtaButton = ({ href, children, variant = 'primary', className = '', icon: Icon, type }) => {
  const baseStyle = "px-8 py-3.5 rounded-lg text-base font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 inline-flex items-center justify-center space-x-2";
  const variants = {
    primary: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-300",
    secondary: "bg-transparent border-2 border-white hover:bg-white hover:text-green-800 text-white focus:ring-gray-300",
    outline: "border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white focus:ring-green-200"
  };

  if (type === 'submit') {
    return (
      <button type="submit" className={`${baseStyle} ${variants[variant]} ${className}`}>
        {Icon && <Icon size={20} className="mr-2" />}
        <span>{children}</span>
      </button>
    );
  }

  return (
    <a href={href} onClick={(e) => { e.preventDefault(); scrollToSection(href.substring(1)); }} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {Icon && <Icon size={20} className="mr-2" />}
      <span>{children}</span>
    </a>
  );
};

export default CtaButton; 