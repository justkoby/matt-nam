import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Linkedin } from 'lucide-react';
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

        {/* Featured Post Card */}
        <motion.div
          className="featured-post-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="featured-post-image-container">
            <img 
              src="/shtikkfd.png" 
              alt="Pharma Media in Cannes 2026" 
              className="featured-post-img"
            />
            <div className="featured-post-tag">Featured Post</div>
          </div>
          <div className="featured-post-content">
            <div className="featured-post-meta">
              <span className="featured-post-source">
                <Linkedin size={16} className="linkedin-icon" /> LinkedIn
              </span>
              <span className="featured-post-dot">•</span>
              <span className="featured-post-date">June 30, 2026</span>
            </div>
            <h3 className="featured-post-title">Pharma Media in Cannes 2026</h3>
            <p className="featured-post-description">
              As part of the Pharma Media in Cannes 2026 feature, Matt Nam, Sr. Director of Omnichannel Strategy at HealthLink Dimensions, shares why healthcare marketing succeeds when it focuses on context, continuity and trust rather than scale alone. 
              From rethinking omnichannel as a connected experience instead of simply a distribution strategy to recognising that the richest insights come from healthcare's unique niches, Matt explores why the future of engagement is built around understanding the moments that matter.
            </p>
            <a 
              href="https://www.linkedin.com/posts/solli-global_pharmamedia-canneslions2026-healthcaremarketing-activity-7480969022776426496-8IgS" 
              target="_blank" 
              rel="noopener noreferrer"
              className="featured-post-link"
            >
              View on LinkedIn <ExternalLink size={16} />
            </a>
          </div>
        </motion.div>

        <div className="updates-divider">
          <span>More Updates</span>
        </div>

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

