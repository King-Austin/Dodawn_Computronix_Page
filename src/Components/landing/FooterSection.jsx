import React from 'react';
import { Sun, Shield, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { useCookiePolicy } from '../../context/CookiePolicyContext';

export default function FooterSection() {
  const { togglePolicy } = useCookiePolicy();
  
  return (
    <footer className="bg-slate-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Brand - Always Visible */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center gap-2">
                <Sun className="w-6 h-6 text-orange-500" />
                <Shield className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Dodawn Computronix</h3>
                <p className="text-gray-400 text-xs">Awka, Anambra State</p>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-3 mt-3">
              <a 
                href="https://www.facebook.com/dodawncomputronix/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors"
              >
                <span className="text-sm font-bold">f</span>
              </a>
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
                <span className="text-sm font-bold">in</span>
              </div>
              <a 
                href="mailto:dodawnelectronics@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-green-500 transition-colors"
              >
                <span className="text-sm font-bold">@</span>
              </a>
            </div>
          </div>
          
          {/* Mobile Sections - Without Dropdowns */}
          <div className="md:hidden space-y-4 mb-6">
            {/* About Section */}
            <div className="border-t border-white/10 pt-3">
              <h4 className="text-base font-semibold text-white mb-2">About Us</h4>
              <div className="text-sm text-gray-300 leading-relaxed">
                <p className="mb-2">
                  Leading provider of solar energy and security solutions across Nigeria. 
                  Empowering homes and businesses with reliable, sustainable power and comprehensive security systems.
                </p>
              </div>
            </div>
            
            {/* Services Section */}
            <div className="border-t border-white/10 pt-3">
              <h4 className="text-base font-semibold text-white mb-2">Services</h4>
              <div className="grid grid-cols-2 gap-x-2 gap-y-2">
                <a href="#" className="text-xs text-gray-300 hover:text-orange-500 transition-colors">Residential Solar</a>
                <a href="#" className="text-xs text-gray-300 hover:text-orange-500 transition-colors">Commercial Solar</a>
                <a href="#" className="text-xs text-gray-300 hover:text-blue-500 transition-colors">CCTV Installation</a>
                <a href="#" className="text-xs text-gray-300 hover:text-blue-500 transition-colors">Solar Boreholes</a>
                <a href="#" className="text-xs text-gray-300 hover:text-white transition-colors">Maintenance</a>
              </div>
            </div>
            
            {/* Contact Section */}
            <div className="border-t border-white/10 pt-3">
              <h4 className="text-base font-semibold text-white mb-2">Contact</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-3 h-3 text-orange-500 flex-shrink-0" />
                  <a 
                    href="tel:+2348038793533"
                    className="text-xs text-gray-300 hover:text-orange-300 transition-colors"
                  >
                    +2348038793533
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3 h-3 text-blue-500 flex-shrink-0" />
                  <a 
                    href="mailto:dodawnelectronics@gmail.com"
                    className="text-xs text-gray-300 hover:text-blue-300 transition-colors"
                  >
                    dodawnelectronics@gmail.com
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-3 h-3 text-green-500 flex-shrink-0 mt-1" />
                  <div className="text-xs">
                    <p>94 Arthur Eze Avenue, Awka, Anambra State.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Desktop Layout - Hidden on Mobile */}
          <div className="hidden md:grid md:grid-cols-4 gap-6 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <p className="text-gray-300 text-sm leading-relaxed mb-4 max-w-md">
                Leading provider of solar energy and security solutions across Nigeria. 
                Empowering homes and businesses with reliable, sustainable power and comprehensive security systems.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
              <div className="grid grid-cols-1 gap-y-2">
                <a href="#" className="text-sm text-gray-300 hover:text-orange-500 transition-colors">Residential Solar</a>
                <a href="#" className="text-sm text-gray-300 hover:text-orange-500 transition-colors">Commercial Solar</a>
                <a href="#" className="text-sm text-gray-300 hover:text-blue-500 transition-colors">CCTV Installation</a>
                <a href="#" className="text-sm text-gray-300 hover:text-blue-500 transition-colors">Security Systems</a>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Maintenance</a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  <div className="text-sm">
                    <a 
                      href="tel:+2348038793533"
                      className="text-gray-300 hover:text-orange-300 transition-colors"
                    >
                      +2348038793533
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <div className="text-sm">
                    <a 
                      href="mailto:dodawnelectronics@gmail.com"
                      className="text-gray-300 hover:text-blue-300 transition-colors"
                    >
                      dodawnelectronics@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                  <div className="text-sm">
                    <p>94 Arthur Eze Avenue,</p>
                    <p>Awka, Anambra State.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/20 pt-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 mb-3">
              <div className="flex flex-col items-center md:items-start">
                <p className="text-gray-400 text-xs text-center md:text-left mb-2">
                  © 2025 Dodawn Computronix. All rights reserved.
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-xs">Powered by:</span>
                  <a 
                    href="https://nworahsoft.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 text-xs"
                  >
                    NworahSoft Technologies
                    <ExternalLink className="w-2 h-2" />
                  </a>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 text-xs">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                <button 
                  onClick={togglePolicy}
                  className="text-gray-400 hover:text-white transition-colors text-xs bg-transparent border-none cursor-pointer"
                >
                  Cookie Policy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}