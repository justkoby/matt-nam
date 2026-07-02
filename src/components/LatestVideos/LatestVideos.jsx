import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Eye, Play } from 'lucide-react';
import './LatestVideos.css';

const LatestVideos = () => {
  const videos = [
    {
      id: '95RgcC2rtaE',
      episode: 'Episode 4',
      title: 'Precision, Privacy, and Purpose-Built for Healthcare',
      guest: 'Kris Qiu',
      role: 'CEO & Co-Founder of IQM',
      desc: 'Exploring why general-purpose advertising platforms fail in healthcare, and the critical need for media infrastructure purpose-built for regulated, outcomes-driven industries.',
      views: '1.2K views',
      date: 'May 14, 2026',
      duration: '22:15'
    },
    {
      id: 'F53vQk9Ug4Y',
      episode: 'Episode 2',
      title: 'The Signal at the Point of Care: Workflow, Data, and Relevance',
      guest: 'John Ketcham',
      role: 'VP of Point of Care Solutions',
      desc: 'A deep dive into EHR context and clinical workflow over traditional metrics like CTR, and how to deliver true value to clinicians at the point of care.',
      views: '840 views',
      date: 'March 16, 2026',
      duration: '18:42'
    },
    {
      id: '1eb0FIRCa3k',
      episode: 'Episode 1',
      title: 'Trust, Technology, and the New Era of Healthcare Media',
      guest: 'Matthew Holland',
      role: 'COO of Healio',
      desc: 'How healthcare media can evolve, integrate AI models without sacrificing editorial trust, and navigate the shift toward automated, private networks.',
      views: '1.5K views',
      date: 'Feb 18, 2026',
      duration: '25:10'
    },
    {
      id: 's9OfhKwmE2k',
      episode: 'Episode 3',
      title: 'Context is King: AI, Relevancy, and the Connected Consumer Journey',
      guest: 'Michael Joachim',
      role: 'Healthcare Marketing Partner',
      desc: 'Exploring how AI and content relevancy are transforming patient engagement and data connections across the modern connected consumer journey.',
      views: '920 views',
      date: 'April 10, 2026',
      duration: '20:05'
    }
  ];

  const [activeVideo, setActiveVideo] = useState(videos[0]);
  const otherVideos = videos.filter(v => v.id !== activeVideo.id);

  return (
    <section id="videos" className="videos section bg-dark text-white">
      <div className="container">
        <motion.div 
          className="videos-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="videos-title text-white">Latest Videos</h2>
          <p className="videos-subtitle">Candid, experience-driven conversations with senior leaders in healthcare and technology.</p>
        </motion.div>

        <div className="videos-layout">
          {/* Main Player & Alternative Thumbnails */}
          <div className="main-player-column">
            <motion.div 
              className="player-container"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="iframe-wrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=0&rel=0`}
                  title={activeVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeVideo.id}
                  className="active-video-details"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="active-video-meta">
                    <span className="episode-tag">{activeVideo.episode}</span>
                    <span className="meta-item"><Eye className="meta-icon" /> {activeVideo.views}</span>
                    <span className="meta-item"><Calendar className="meta-icon" /> {activeVideo.date}</span>
                  </div>
                  
                  <h3 className="active-video-title">{activeVideo.title}</h3>
                  <div className="guest-info">
                    <span className="guest-name">Guest: {activeVideo.guest}</span>
                    <span className="guest-role">({activeVideo.role})</span>
                  </div>
                  <p className="active-video-desc">{activeVideo.desc}</p>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Other Videos List */}
            <div className="other-videos-section">
              <h4 className="other-videos-heading">Select video to play</h4>
              <div className="other-videos-grid">
                {otherVideos.map((video) => (
                  <motion.div
                    key={video.id}
                    className="video-thumbnail-card"
                    whileHover={{ y: -5, scale: 1.02 }}
                    onClick={() => setActiveVideo(video)}
                    layoutId={`card-${video.id}`}
                  >
                    <div className="thumbnail-wrapper">
                      <img 
                        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} 
                        alt={video.title} 
                        className="thumbnail-img" 
                      />
                      <span className="duration-tag">{video.duration}</span>
                      <div className="thumbnail-overlay">
                        <Play className="play-overlay-icon" />
                      </div>
                    </div>
                    
                    <div className="thumbnail-info">
                      <span className="thumbnail-episode">{video.episode}</span>
                      <h5 className="thumbnail-title">{video.title}</h5>
                      <span className="thumbnail-guest">Guest: {video.guest}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestVideos;
