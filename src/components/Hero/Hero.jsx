import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-logo-wrapper"
          >
            <img src="/logo-main.svg" alt="Matt Nam" className="hero-logo" />
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-subtitle"
          >
            I work at the intersection of strategy, technology, and growth, helping platforms, teams, and ideas evolve into systems that actually work.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-btns"
          >
            <a href="#projects" className="btn btn-primary">View Portfolio</a>
            <Link to="/resume" className="btn btn-outline">View Resume</Link>
          </motion.div>
        </div>
      </div>
      
      <div className="hero-divider">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,20 Q720,110 1440,20 L1440,120 L0,120 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
