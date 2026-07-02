import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './Updates.css';

const Updates = () => {
  useEffect(() => {
    // Dynamically load the Elfsight platform script
    const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="updates" className="updates section">
      <div className="container">
        <motion.div 
          className="updates-header"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="updates-title">What's Happening?</h2>
          <p className="updates-subtitle">Keep up to date with what's going on with Matt.</p>
        </motion.div>

        <motion.div 
          className="updates-widget-container"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="elfsight-app-451e1085-1563-422f-b698-65dbce62080d" data-elfsight-app-lazy></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Updates;
