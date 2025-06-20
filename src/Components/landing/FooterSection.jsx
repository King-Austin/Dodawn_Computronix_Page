import React from 'react';
import { Sun, Shield, Phone, Mail, MapPin } from 'lucide-react';
import { useCookiePolicy } from '../../context/CookiePolicyContext';

export default function FooterSection() {
  const { togglePolicy } = useCookiePolicy();
  
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-2">
                  <Sun className="w-8 h-8 text-orange-500" />
                  <Shield className="w-8 h-8 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Dodawn Computronix</h3>
                  <p className="text-gray-400 text-sm">Awka, Anambra State</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                Leading provider of solar energy and security solutions across Nigeria. 
                Empowering homes and businesses with reliable, sustainable power and comprehensive security systems.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">in</span>
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-green-500 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">@</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <div className="space-y-3">
                <a href="#" className="block text-gray-300 hover:text-orange-500 transition-colors">Residential Solar</a>
                <a href="#" className="block text-gray-300 hover:text-orange-500 transition-colors">Commercial Solar</a>
                <a href="#" className="block text-gray-300 hover:text-blue-500 transition-colors">CCTV Installation</a>
                <a href="#" className="block text-gray-300 hover:text-blue-500 transition-colors">Security Systems</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Maintenance</a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <div className="text-sm">
                    <p>+2348038793533</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <div className="text-sm">
                    <p>dodawnelectronics@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div className="text-sm">
                    <p>94 Arthur Eze Avenue,</p>
                    <p>Awka, Anambra State.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © 2025 Dodawn Computronix. All rights reserved. CEO: Engr Dozie Ekwunife
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                <button 
                  onClick={togglePolicy}
                  className="text-gray-400 hover:text-white transition-colors text-sm bg-transparent border-none cursor-pointer"
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