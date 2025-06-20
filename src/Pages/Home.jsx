import React, { useRef } from 'react';
import Navbar from '../Components/landing/NavBar';
import HeroSection from '../Components/landing/HeroSection';
import ServicesSection from '../Components/landing/ServicesSection';
import AboutSection from '../Components/landing/AboutSection';
import ContactSection from '../Components/landing/ContactSection';
import FooterSection from '../Components/landing/FooterSection';

export default function Home() {
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSection = (section) => {
    switch(section) {
      case 'services':
        servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'about':
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar onGetQuote={scrollToContact} onScrollToSection={scrollToSection} />
      <HeroSection onGetQuote={scrollToContact} />
      <div ref={servicesRef}>
        <ServicesSection onGetQuote={scrollToContact} />
      </div>
      <div ref={aboutRef}>
        <AboutSection />
      </div>
      <div ref={contactRef}>
        <ContactSection />
      </div>
      <FooterSection />
    </div>
  );
}