import React from 'react';

const MapSection = () => {
  return (
    <div className="h-96 md:h-[550px] w-full bg-gray-200">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.718890459896!2d38.7636117147864!3d9.00000009353926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8a482f3253171591!2sBole%2C%20Addis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
        width="100%" 
        height="100%" 
        style={{border:0}} 
        allowFullScreen="" 
        loading="lazy"
        title="Executive Export Office Location in Addis Ababa"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapSection; 