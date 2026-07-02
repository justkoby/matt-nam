import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './About.css';

const About = () => {
  const images = [
    '/about-1.jpg',
    '/about-2.jpg',
    '/about-3.jpg',
    '/about-me-4.png'
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Autoplay functionality: cycle every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="about" className="about section">
      <div className="container about-container">
        <div className="about-slider-wrapper">
          <div className="about-slider-card">
            <AnimatePresence mode="wait">
              <motion.img 
                key={activeIndex}
                src={images[activeIndex]} 
                alt={`Matt Nam Gallery ${activeIndex + 1}`} 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6 }}
                className="about-slider-img"
              />
            </AnimatePresence>
          </div>
          <div className="about-slider-dots">
            {images.map((_, index) => (
              <button 
                key={index} 
                onClick={() => setActiveIndex(index)}
                className={`about-dot ${activeIndex === index ? 'active' : ''}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="about-content">
          <span className="section-label text-blue">ABOUT ME</span>
          <h2 className="about-title">The Journey.</h2>
          <h3 className="about-subtitle">From Science to Commercial Leadership</h3>
          <div className="about-text">
            <p>
              My journey hasn't followed a straight line, and I'm glad it didn't. I began in spaces
              rooted in science, health, and human outcomes, where precision mattered and
              impact was tangible.
            </p>
            <p>
              Over time, I found myself drawn to larger systems: platforms, products, and
              commercial models that shape how value moves. What ties everything together is a
              fascination with connection; people to platforms, strategy to execution, vision to
              reality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
