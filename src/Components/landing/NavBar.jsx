import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../../components/ui/button';
import { 
  Sun, 
  Shield, 
  Menu, 
  X, 
  Phone, 
  ArrowRight,
  Home,
  Settings,
  Users,
  MessageCircle
} from 'lucide-react';

export default function Navbar({ onGetQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', icon: Home, path: '/' },
    { name: 'Services', icon: Settings, path: '/services' },
    { name: 'About', icon: Users, path: '/about' },
    { name: 'Contact', icon: MessageCircle, path: '/contact' }
  ];

  const serviceLinks = [
    { name: 'Residential Solar', path: '/services#residential-solar' },
    { name: 'Commercial Solar', path: '/services#commercial-solar' },
    { name: 'Solar Panels & Inverters', path: '/services#solar-panels-inverters' },
    { name: 'Solar Boreholes', path: '/services#solar-boreholes' },
    { name: 'Solar Street Lights', path: '/services#solar-streetlights' },
    { name: 'Electrical Installation', path: '/services#electrical-installation' },
    { name: 'CCTV Installation', path: '/services#cctv-installation' },
    { name: 'Security Systems', path: '/services#security-systems' },
  ];

  // Check if the current path matches the link's path
  const isActive = (path) => {
    if (path.includes('#')) {
      // For hash links, check if the base path matches
      const basePath = path.split('#')[0];
      return location.pathname === basePath;
    }
    return location.pathname === path;
  };

  // Helper to handle scrolling to hash on the same page
  const handleNavClick = (path) => {
    if (path.includes('#')) {
      const [basePath, hash] = path.split('#');
      
      // If we're already on the correct base path, just scroll to the element
      if (location.pathname === basePath || (basePath === '/' && location.pathname === '')) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        return;
      }
    }
    
    // Otherwise, normal navigation will occur via the Link component
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || location.pathname !== '/'
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <Link to="/" className="flex items-center gap-3">
                <div className="relative">
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Sun className={`w-8 h-8 transition-colors duration-300 ${
                        isScrolled || location.pathname !== '/' ? 'text-orange-500' : 'text-orange-400'
                      }`} />
                      <div className="absolute inset-0 animate-pulse">
                        <Sun className="w-8 h-8 text-orange-300 opacity-50" />
                      </div>
                    </div>

                  </div>
                </div>
                <div>
                  <h1 className={`text-xl font-bold transition-colors duration-300 ${
                    isScrolled || location.pathname !== '/' ? 'text-slate-900' : 'text-white'
                  }`}>
                    Dodawn Computronix
                  </h1>

                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <Link 
                    to={link.path}
                    onClick={() => handleNavClick(link.path)}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                        isScrolled || location.pathname !== '/' 
                          ? isActive(link.path)
                            ? 'text-orange-600 bg-orange-50'
                            : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50' 
                          : isActive(link.path)
                            ? 'text-white bg-white/20'
                            : 'text-white/90 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <link.icon className="w-4 h-4" />
                      {link.name}
                    </motion.div>
                  </Link>
                  
                  {/* Service Dropdown */}
                  {link.name === 'Services' && (
                    <div className="absolute left-0 mt-2 w-56 rounded-xl overflow-hidden bg-white shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left z-50">
                      <div className="py-1">
                        {serviceLinks.map((serviceLink) => (
                          <Link
                            key={serviceLink.name}
                            to={serviceLink.path}
                            onClick={() => handleNavClick(serviceLink.path)}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                          >
                            {serviceLink.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
              <Button 
                onClick={onGetQuote || (() => window.location.href = '/contact')}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl shadow-lg shadow-orange-500/20 hover:shadow-orange-600/30 transition-all duration-300"
              >
                <Phone className="w-4 h-4 mr-2" />
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-slate-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed top-20 left-0 right-0 z-40 bg-white shadow-xl border-b border-gray-200"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <Link
                      to={link.path}
                      onClick={() => handleNavClick(link.path)}
                      className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${
                        isActive(link.path)
                          ? 'bg-orange-50 text-orange-600'
                          : 'text-slate-700 hover:bg-gray-50'
                      }`}
                    >
                      <link.icon className="w-5 h-5" />
                      <span className="font-medium">{link.name}</span>
                      <ArrowRight className="w-4 h-4 ml-auto" />
                    </Link>
                    
                    {/* Service Dropdown for Mobile */}
                    {link.name === 'Services' && (
                      <div className="ml-8 mt-2 space-y-2 border-l-2 border-gray-100 pl-4">
                        {serviceLinks.map((serviceLink) => (
                          <Link
                            key={serviceLink.name}
                            to={serviceLink.path}
                            onClick={() => handleNavClick(serviceLink.path)}
                            className="block py-2 text-sm text-gray-700 hover:text-orange-600 transition-colors"
                          >
                            {serviceLink.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-3 border-t border-gray-100">
                  <Button 
                    onClick={onGetQuote || (() => window.location.href = '/contact')}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Get a Free Quote
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}