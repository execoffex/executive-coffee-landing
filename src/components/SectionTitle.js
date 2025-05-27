import React from 'react';

const SectionTitle = ({ title, subtitle, isLight = false }) => (
  <div className="text-center mb-12 md:mb-16">
    <h2 className={`text-4xl sm:text-5xl font-bold mb-4 ${isLight ? 'text-white' : 'text-green-800'}`}>
      {title}
    </h2>
    <div className={`w-24 h-1.5 mx-auto mb-6 rounded-full ${isLight ? 'bg-white/70' : 'bg-red-500'}`}></div>
    {subtitle && <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${isLight ? 'text-gray-200' : 'text-gray-700'}`}>{subtitle}</p>}
  </div>
);

export default SectionTitle; 