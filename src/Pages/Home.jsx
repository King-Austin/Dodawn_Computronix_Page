import React from 'react';
import Navbar from '../Components/landing/NavBar';
import HeroSection from '../Components/landing/HeroSection';
import ServicesSection from '../Components/landing/ServicesSection';
import AboutSection from '../Components/landing/AboutSection';
import ContactSection from '../Components/landing/ContactSection';
import FooterSection from '../Components/landing/FooterSection';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const handleGetQuote = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen">
      <Navbar onGetQuote={handleGetQuote} />
      <HeroSection onGetQuote={handleGetQuote} />
      <ServicesSection onGetQuote={handleGetQuote} />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}