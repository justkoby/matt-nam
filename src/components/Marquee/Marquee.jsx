import React from 'react';
import './Marquee.css';

const Marquee = () => {
  const logos = [
    '/company-1.webp',
    '/company-2.webp',
    '/company-3.webp',
    '/company-4.webp',
    '/company-6.png',
    '/company-5.png',
  ];

  return (
    <div className="marquee-section">
      <div className="marquee-container">
        <div className="marquee-track">
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="marquee-item">
              <img src={logo} alt="Partner Logo" className="partner-logo" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
