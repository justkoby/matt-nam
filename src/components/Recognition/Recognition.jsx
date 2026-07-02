import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import './Recognition.css';

const Recognition = () => {
  const awards = [
    {
      year: '2025',
      title: 'Top 10 Startup to Watch',
      issuer: 'PHILADELPHIA BUSINESS JOURNAL',
    },
    {
      year: '2024',
      title: 'Product of the Year',
      issuer: 'TECHNICAL.LY',
    },
    {
      year: '2018',
      title: 'Trailblazer Award',
      issuer: 'COMMERCIAL INNOVATION',
    },
  ];

  return (
    <section id="recognition" className="recognition section bg-light">
      <div className="container recognition-container">
        {/* Left Side: Forbes Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="recognition-card"
        >
          <div className="recognition-badge-icon">
            <Award size={40} />
          </div>
          <h3 className="recognition-card-title">Forbes Next 1000 Honoree</h3>
          <p className="recognition-card-desc">
            Recognized by Forbes for entrepreneurial leadership and the successful commercialization 
            of disruptive healthcare technology.
          </p>
        </motion.div>

        {/* Right Side: Timeline and Titles */}
        <div className="recognition-content">
          <div className="recognition-header-side">
            <span className="section-label text-blue">RECOGNITION</span>
            <h2 className="recognition-title">Recognition & Expertise</h2>
            <p className="recognition-desc">
              Consistently recognized for product innovation and sales excellence within the 
              Philadelphia and National Tech ecosystems.
            </p>
          </div>

          <div className="recognition-list">
            {awards.map((award, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="recognition-item"
              >
                <div className="recognition-year">{award.year}</div>
                <div className="recognition-detail">
                  <h4 className="recognition-item-title">{award.title}</h4>
                  <span className="recognition-item-issuer">{award.issuer}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recognition;
