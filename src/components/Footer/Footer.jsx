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
              <p className="footer-lead-text">Let's build something meaningful together.</p>
              <p>Available for strategic consultations, advisory roles, and speaking engagements.</p>
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
            {/* Contact Form */}
            <form 
              className="footer-contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const name = formData.get('name');
                const email = formData.get('email');
                const message = formData.get('message');
                const mailtoUrl = `mailto:matt@vianexta.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`)}`;
                window.location.href = mailtoUrl;
              }}
            >
              <h4 className="contact-form-title">Send a Message</h4>
              <div className="form-fields-row">
                <div className="form-group">
                  <input type="text" name="name" placeholder="Your Name" required className="form-input" />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Your Email" required className="form-input" />
                </div>
                <div className="form-group form-group-message">
                  <input type="text" name="message" placeholder="Message" required className="form-input" />
                </div>
                <button type="submit" className="btn btn-primary contact-submit-btn">Send</button>
              </div>
            </form>
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
