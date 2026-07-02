import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Marquee from '../components/Marquee/Marquee';
import About from '../components/About/About';
import Expertise from '../components/Expertise/Expertise';
import Recognition from '../components/Recognition/Recognition';
import Projects from '../components/Projects/Projects';
import Updates from '../components/Updates/Updates';
import LatestVideos from '../components/LatestVideos/LatestVideos';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Expertise />
        <Recognition />
        <Projects />
        <Updates />
        <LatestVideos />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
