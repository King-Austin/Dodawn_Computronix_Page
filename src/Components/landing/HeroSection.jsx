import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/button';
import { Sun, Shield, ArrowRight, Phone } from 'lucide-react';

export default function HeroSection({ onGetQuote }) {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-20 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-2">
                  <Sun className="w-8 h-8 text-orange-500" />
                  <Shield className="w-8 h-8 text-blue-500" />
                </div>
                <span className="text-orange-500 font-medium tracking-wide uppercase text-sm">
                  Power & Security Solutions
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Reliable
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
                  {" "}Power
                </span>
                <br />
                Complete
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
                  {" "}Security
                </span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Anambra's premier solar installation and CCTV security systems provider from Dodawn Computronix.
                Powering homes and businesses while keeping them secure across Lagos, Abuja, and beyond.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  onClick={onGetQuote}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                
                <Button
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 px-8 py-6 text-lg font-semibold rounded-full backdrop-blur-sm transition-all duration-300"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">500+</div>
                  <div className="text-gray-400 text-sm">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">15+</div>
                  <div className="text-gray-400 text-sm">States Covered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">24/7</div>
                  <div className="text-gray-400 text-sm">Support</div>
                </div>
              </div>
            </motion.div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-3xl blur-3xl" />
                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
                  <div className="grid grid-cols-2 gap-6">
                    
                    <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl p-6 backdrop-blur-sm">
                      <Sun className="w-12 h-12 text-orange-500 mb-4" />
                      <h3 className="text-white font-semibold text-lg mb-2">Solar Power</h3>
                      <p className="text-gray-300 text-sm">Clean, renewable energy solutions for your home or business</p>
                    </div>

                    <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl p-6 backdrop-blur-sm">
                      <Shield className="w-12 h-12 text-blue-500 mb-4" />
                      <h3 className="text-white font-semibold text-lg mb-2">CCTV Security</h3>
                      <p className="text-gray-300 text-sm">Advanced surveillance systems to protect what matters most</p>
                    </div>

                    <div className="col-span-2 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-white font-medium">System Status: All Online</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div>
                          <div className="text-2xl font-bold text-orange-500">12.5 kW</div>
                          <div className="text-gray-400 text-xs">Power Generated</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-blue-500">8 Cams</div>
                          <div className="text-gray-400 text-xs">Active Monitoring</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}