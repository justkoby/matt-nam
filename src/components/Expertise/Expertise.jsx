import React from 'react';
import { motion } from 'framer-motion';
import { FileStack } from 'lucide-react';
import './Expertise.css';

const Expertise = () => {
  const skills = [
    {
      title: 'Programmatic Infrastructure',
      desc: 'Expertise in Header Bidding (Client/Server), OpenRTB setups and Waterfall Yield Models. Proven ability to integrate DSPs and SSPs within complex healthcare environments like EHR and Point-of-Care (POC).',
    },
    {
      title: 'Revenue Operations',
      desc: 'Full P&L ownership and commercial operating cadence. From CRM optimization to high-performing sales team development.',
    },
    {
      title: 'Ai & Media Innovation',
      desc: 'Deploying Ai-driven engagement strategies to boost provider/patient engagement and campaign ROI for top pharma brands.',
    },
    {
      title: 'Global Market Expansion',
      desc: 'Successfully entered and scaled operations in US, UK and EMEA markets, securing multimillion-dollar contracts with life sciences operations.',
    },
  ];

  return (
    <section id="expertise" className="expertise section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">WHAT I DO</span>
          <h2 className="section-title">Core Expertise</h2>
        </div>
        
        <div className="expertise-grid-3col">
          {/* Card 1: Programmatic Infrastructure (Row 1, Col 1) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="expertise-card card-programmatic"
          >
            <div className="expertise-icon"><FileStack size={24} /></div>
            <h3 className="expertise-card-title">{skills[0].title}</h3>
            <p className="expertise-card-desc">{skills[0].desc}</p>
          </motion.div>

          {/* Center Column: Portrait Image (Row 1-2, Col 2) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="expertise-center-column"
          >
            <img src="/about.webp" alt="Matthew Nam" className="expertise-center-img" />
          </motion.div>

          {/* Card 3: Revenue Operations (Row 1, Col 3) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="expertise-card card-revops"
          >
            <div className="expertise-icon"><FileStack size={24} /></div>
            <h3 className="expertise-card-title">{skills[1].title}</h3>
            <p className="expertise-card-desc">{skills[1].desc}</p>
          </motion.div>
          
          {/* Card 2: AI & Media Innovation (Row 2, Col 1) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="expertise-card card-ai"
          >
            <div className="expertise-icon"><FileStack size={24} /></div>
            <h3 className="expertise-card-title">{skills[2].title}</h3>
            <p className="expertise-card-desc">{skills[2].desc}</p>
          </motion.div>

          {/* Card 4: Global Market Expansion (Row 2, Col 3) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="expertise-card card-expansion"
          >
            <div className="expertise-icon"><FileStack size={24} /></div>
            <h3 className="expertise-card-title">{skills[3].title}</h3>
            <p className="expertise-card-desc">{skills[3].desc}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
