import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Left Column: Logo & Status */}
          <motion.div 
            className="footer-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="footer-logo-wrapper">
              <img src="/logo-main.svg" alt="Matt Nam Logo" className="footer-logo" />
            </div>
            <div className="footer-status">
              <p>Currently based in Philadelphia, USA.</p>
              <p>Available for strategic consultations and advisory roles.</p>
            </div>
          </motion.div>

          {/* Right Column: Contact Info */}
          <motion.div 
            className="footer-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="footer-info-list">
              <a href="mailto:mnam8906@gmail.com" className="footer-info-item">
                <div className="info-icon-wrapper">
                  <Mail className="info-icon" />
                </div>
                <span>mnam8906@gmail.com</span>
              </a>
              
              <div className="footer-info-item non-interactive">
                <div className="info-icon-wrapper">
                  <MapPin className="info-icon" />
                </div>
                <span>Philadelphia, USA</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom copyright */}
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p>&copy; {currentYear} Matt Nam. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="/#about" className="footer-link">About</a>
            <a href="/#expertise" className="footer-link">Expertise</a>
            <a href="/#updates" className="footer-link">Updates</a>
            <a href="/impact" className="footer-link">Impact</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
