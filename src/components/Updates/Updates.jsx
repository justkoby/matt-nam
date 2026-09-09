import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Linkedin } from 'lucide-react';
import './Updates.css';

const Updates = () => {
  useEffect(() => {
    // Ensure Elfsight script is present and initialized
    const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      document.body.appendChild(script);
    } else if (window.eapps && typeof window.eapps.init === 'function') {
      window.eapps.init();
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
          <p className="updates-subtitle">Keep up to date with conversations, insights, and media with Matt.</p>
        </motion.div>

        {/* Featured Post Card */}
        <motion.article
          className="featured-post-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="featured-post-image-container">
            <img 
              src="/ep-7.png" 
              alt="HealthLink Signals Episode 7 with Scott Phillips and host Matt Nam" 
              className="featured-post-img"
            />
            <div className="featured-post-tag">Featured Post</div>
          </div>
          <div className="featured-post-content">
            <div className="featured-post-meta">
              <span className="featured-post-source">
                <Linkedin size={16} className="linkedin-icon" /> solli
              </span>
              <span className="featured-post-dot">•</span>
              <span className="featured-post-date">Recent</span>
            </div>
            <h3 className="featured-post-title">HealthLink Signals — Episode 7: Multimodal Data & HCP Engagement</h3>
            <p className="featured-post-description">
              In Episode 7 of HealthLink Signals, Scott Phillips, Vice President of Real World Data at Diaceutics PLC, and host Matt Nam explore why recency, context, and multimodal data are critical to identifying and engaging the right healthcare professionals at the right moment.
            </p>
            <a 
              href="https://www.linkedin.com/posts/solli-global_healthlinksignals-healthcaredata-pharmamedia-activity-7500160622563631104-EE72?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB-TRwwBIC9IwJtZnW0VcG1mkXnGOUtgUfI" 
              target="_blank" 
              rel="noopener noreferrer"
              className="featured-post-link"
            >
              Watch Episode on LinkedIn <ExternalLink size={16} />
            </a>
          </div>
        </motion.article>

        {/* View All Profile Activity Link */}
        <motion.div 
          className="updates-profile-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <a 
            href="https://www.linkedin.com/in/mattnam/recent-activity/all/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="updates-profile-btn"
          >
            <Linkedin size={18} className="profile-btn-icon" />
            <span>Follow & View All Recent Activity on LinkedIn</span>
            <ExternalLink size={16} />
          </a>
        </motion.div>

        <div className="updates-divider">
          <span>More Updates</span>
        </div>

        {/* Elfsight LinkedIn Feed Widget */}
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
