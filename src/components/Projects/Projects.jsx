import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      logo: '/vianexta.png',
      role: 'Founder',
      title: 'ViaNexta',
      desc: 'The AI infrastructure that simplifies complex private label supply chains with an agentic workforce',
      tags: ['Supply Chain', 'AI', 'Startup Scale'],
      link: 'https://www.vianexta.com/',
      btnText: 'Visit Project',
    },
    {
      logo: '/company-4.webp',
      role: 'Head of Platform Sales',
      title: 'Doceree Scale-Up',
      desc: 'Pioneered the development of a comprehensive healthcare media ecosystem and scaled global operations.',
      tags: ['Global Strategy', 'AI', 'Startup Scale'],
      link: 'https://doceree.com/',
      btnText: 'Visit Site',
    },
    {
      logo: '/company-1.webp',
      role: 'VR Commercial Strategy',
      title: 'Publisher Health',
      desc: 'Implemented EHR header bidding technology and onboarded major POC platforms to drive revenue growth.',
      tags: ['ADTECH', 'EHR', 'Header Bidding'],
      link: 'https://www.publisherhealth.com/',
      btnText: 'Visit Site',
    },
  ];

  return (
    <section id="projects" className="projects section bg-light">
      <div className="container">
        <div className="projects-header">
          <h2 className="projects-title">Strategic Impact</h2>
          <p className="projects-subtitle">Deep-dive into the platforms and revenue systems I\'ve built and optimized.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="project-card"
            >
              <div className="project-logo-container">
                <img src={project.logo} alt={`${project.title} Logo`} className="project-logo" />
              </div>
              
              <div className="project-body">
                <div className="project-role">
                  <span className="role-dot"></span>
                  <span className="role-text">{project.role}</span>
                </div>
                
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.desc}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="tag-pill">{tag}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-footer">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn project-btn"
                >
                  {project.btnText}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
