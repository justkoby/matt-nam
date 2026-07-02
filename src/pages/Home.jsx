import React from 'react';
import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>Matthew Nam — Commercial Leader in Digital Health, AdTech &amp; Programmatic Media</title>
        <meta name="description" content="Matthew Nam is a versatile commercial leader at the intersection of digital health, programmatic media, and ad operations. Forbes Next 1000 Honoree. Scaled platforms from zero to $50M+ ARR." />
        <link rel="canonical" href="https://matt-nam.vercel.app/" />
      </Helmet>
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
