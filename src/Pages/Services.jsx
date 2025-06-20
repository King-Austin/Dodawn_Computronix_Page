import React from 'react';
import Navbar from '../Components/landing/NavBar';
import FooterSection from '../Components/landing/FooterSection';
import ServicesSection from '../Components/landing/ServicesSection';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Services() {
  const navigate = useNavigate();

  const handleGetQuote = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen">
      <Navbar onGetQuote={handleGetQuote} />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="pt-24 py-12 bg-gradient-to-b from-slate-50 to-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-500">Services</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Dodawn Computronix offers comprehensive solar and security solutions designed to meet the unique needs of residential, 
              commercial, and industrial clients throughout Anambra State and beyond.
            </p>
          </div>
        </div>
      </motion.div>
      
      <ServicesSection fullPage={true} onGetQuote={handleGetQuote} />
      
      <FooterSection />
    </div>
  );
}
