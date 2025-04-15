import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import { LandingHero } from './components/ui/landing-hero';
import VideoSection from './components/VideoSection';
import Benefits from './components/Benefits';
import Overview from './components/Overview';
import AsconManagement from './components/AsconManagement';
import Calendly from './components/Calendly';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Impressum from './components/Impressum';
import ContactPage from './components/ContactPage';
import Datenschutz from './components/Datenschutz';
import AboutPage from './components/AboutPage';
import DownloadsPage from './components/DownloadsPage';
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change, unless we're specifically scrolling to contact
    if (!location.state?.scrollToContact) {
      window.scrollTo(0, 0);
    }

    if (location.state?.scrollToContact) {
      setTimeout(() => {
        const contactSection = document.getElementById('contact-section');
        if (contactSection) {
          contactSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <Routes>
        <Route path="/" element={
          <>
            <LandingHero />
            <VideoSection />
            <Benefits />
            <Overview />
            <AsconManagement />
            <Calendly />
            <Contact />
          </>
        } />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/uber-uns" element={<AboutPage />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/kontakt" element={<ContactPage />} />
        <Route path="/downloads" element={<DownloadsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;