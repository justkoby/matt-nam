import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './Impact.css';

const Impact = () => {
  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="impact-page">
      <Helmet>
        <title>Humanitarian Impact — Matthew Nam | Growing Coffee, Empowering Communities</title>
        <meta name="description" content="Discover Matthew Nam's humanitarian impact — working directly with coffee farmers in Colombia, supporting women farmers, and celebrating farmer excellence through Win Win Coffee." />
        <link rel="canonical" href="https://matt-nam.vercel.app/impact" />
      </Helmet>
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="impact-hero">
          <div className="container impact-hero-container">
            <div className="impact-hero-content">
              <motion.span 
                className="impact-hero-tag"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Humanitarian Impact:
              </motion.span>
              
              <motion.h1 
                className="impact-hero-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                Growing Coffee.<br />Empowering Communities.
              </motion.h1>
            </div>
          </div>
          
          <div className="hero-divider">
            <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,20 Q720,110 1440,20 L1440,120 L0,120 Z" fill="#ffffff" />
            </svg>
          </div>
        </section>

        {/* 1. Why Farmers? (Text Left, Image Right) */}
        <section className="impact-section bg-white">
          <div className="container">
            <div className="impact-grid">
              <motion.div 
                className="impact-text-wrapper"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="impact-section-title">Why Farmers?</h2>
                <div className="impact-desc-list">
                  <p className="impact-desc">
                    The people who produce coffee are often the furthest from the systems that control how it moves through the world.
                  </p>
                  <p className="impact-desc">
                    Spending time with farmers revealed how complex and fragmented the supply chain behind coffee really is. That realization shaped my focus on building more connected systems that make sourcing, production, and distribution easier for everyone involved.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="impact-image-wrapper"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img src="/farm-6.webp" alt="Matt Nam checking coffee leaves on a farm" className="impact-img" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. Working Directly With Farmers (Image Left, Text Right) */}
        <section className="impact-section bg-light-grey">
          <div className="container">
            <div className="impact-grid grid-img-left">
              <motion.div 
                className="impact-image-wrapper"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img src="/farm-1.webp" alt="Matt Nam talking directly with coffee farmers" className="impact-img" />
              </motion.div>

              <motion.div 
                className="impact-text-wrapper"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="impact-section-title">Working Directly With Farmers</h2>
                <div className="impact-desc-list">
                  <p className="impact-desc">
                    I founded Win Win Coffee to stay closely connected to the people who grow the beans behind every cup. Spending time on farms has given me a firsthand understanding of the work, risk, and knowledge involved in producing great coffee.
                  </p>
                  <p className="impact-desc">
                    When I visit farms, the goal isn't simply to source coffee. It's to listen, learn, and build relationships with the producers whose work defines the quality of what we drink.
                  </p>
                  <p className="impact-desc">
                    Those relationships continue to shape how I think about sourcing, transparency, and the broader systems that connect producers to the global coffee market.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. Supporting Women Farmers (Text Left, Image Right) */}
        <section className="impact-section bg-white">
          <div className="container">
            <div className="impact-grid">
              <motion.div 
                className="impact-text-wrapper"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="impact-section-title">Supporting Women Farmers</h2>
                <div className="impact-desc-list">
                  <p className="impact-desc">
                    In farming communities around the world, women often carry much of the responsibility for agricultural work while remaining the least visible in the broader system.
                  </p>
                  <p className="impact-desc">
                    Meeting and working alongside these producers changed how I think about opportunity in agriculture. When women have access to resources, markets, and recognition, the effects reach far beyond the farm.
                  </p>
                  <p className="impact-desc">
                    Supporting and highlighting their work continues to shape how I approach the projects and partnerships I build.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="impact-image-wrapper"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img src="/farm-5.webp" alt="Matt Nam standing with a group of female coffee farmers" className="impact-img" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* 4. From Farm to Cup (Centered Text, No Image) */}
        <section className="impact-section bg-light-grey">
          <div className="container">
            <motion.div 
              className="impact-center-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="impact-section-title">From Farm to Cup</h2>
              <p className="impact-desc">
                Coffee offers a clear window into how supply chains work. A single cup depends on farmers, processors, exporters, roasters, and distributors working in coordination.
              </p>
              <p className="impact-desc">
                Evaluating coffee through cupping is one small step in that journey. It's a reminder that every finished product reflects a network of people and decisions long before it reaches the consumer.
              </p>
              <p className="impact-desc">
                That perspective continues to shape how I approach supply chains and the systems that connect them.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 5. Celebrating Farmer Excellence (Full-bleed Split-screen) */}
        <section className="excellence-section bg-dark-navy">
          <div className="excellence-grid">
            <div className="excellence-image-col">
              <img 
                src="/farmer.webp" 
                alt="Matt Nam judging at the National Coffee Competition with farmers holding checks" 
                className="excellence-img" 
              />
            </div>
            <div className="excellence-text-col">
              <motion.div 
                className="excellence-text-inner"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="excellence-title">Celebrating Farmer Excellence</h2>
                <div className="excellence-desc-list">
                  <p className="excellence-desc">
                    Judging Colombia's National Coffee Competition was one of the most meaningful moments of my time working in coffee. Watching producers receive national recognition for the quality of their beans was a powerful reminder that behind every great coffee is a family, years of experience, and a deep commitment to craft.
                  </p>
                  <p className="excellence-desc">
                    Experiences like this continue to shape my mission with Win Win Coffee: to ensure the people behind exceptional coffee are recognized and valued globally.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Impact;
