import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { 
  Sun, 
  Shield, 
  Battery, 
  Camera, 
  Zap, 
  Eye, 
  Settings, 
  Clock,
  CheckCircle,
  Lightbulb,
  Droplets,
  Plug,
  CircuitBoard
} from 'lucide-react';

const services = [
  {
    id: "residential-solar",
    icon: Sun,
    title: "Residential Solar",
    description: "Complete home solar solutions with battery backup for reliable power",
    features: ["5-25kW Systems", "Battery Storage", "Grid-Tie Option", "25-Year Warranty"],
    gradient: "from-orange-500 to-yellow-500",
    bgGradient: "from-orange-50 to-yellow-50"
  },
  {
    id: "commercial-solar",
    icon: Zap,
    title: "Commercial Solar",
    description: "Large-scale solar installations for businesses and industrial facilities",
    features: ["50kW+ Systems", "Load Analysis", "ROI Optimization", "Maintenance Plans"],
    gradient: "from-orange-600 to-red-500",
    bgGradient: "from-orange-50 to-red-50"
  },
  {
    id: "solar-panels-inverters",
    icon: CircuitBoard,
    title: "Solar Panels & Inverters",
    description: "Quality solar panels and inverter systems for reliable power generation",
    features: ["Premium Panels", "Inverter Systems", "System Design", "Expert Installation"],
    gradient: "from-amber-500 to-orange-500",
    bgGradient: "from-amber-50 to-orange-50"
  },
  {
    id: "solar-boreholes",
    icon: Droplets,
    title: "Solar Boreholes",
    description: "Energy-efficient solar-powered borehole systems for reliable water supply",
    features: ["Water Pumping", "Off-Grid Systems", "Low Maintenance", "Rural Solutions"],
    gradient: "from-blue-400 to-teal-500",
    bgGradient: "from-blue-50 to-teal-50"
  },
  {
    id: "solar-streetlights",
    icon: Lightbulb,
    title: "Solar Street Lights",
    description: "Standalone solar street lighting solutions for roads, compounds and public spaces",
    features: ["LED Lighting", "Motion Sensors", "Auto On/Off", "Weather Resistant"],
    gradient: "from-yellow-500 to-amber-600",
    bgGradient: "from-yellow-50 to-amber-50"
  },
  {
    id: "electrical-installation",
    icon: Plug,
    title: "Electrical Installation",
    description: "Professional electrical wiring and installation services for homes and businesses",
    features: ["Wiring Systems", "Load Distribution", "Safety Compliance", "System Testing"],
    gradient: "from-green-500 to-emerald-600",
    bgGradient: "from-green-50 to-emerald-50"
  },
  {
    id: "cctv-installation",
    icon: Camera,
    title: "CCTV Installation",
    description: "Professional security camera systems with remote monitoring capabilities",
    features: ["HD/4K Cameras", "Night Vision", "Mobile App", "Cloud Storage"],
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50"
  },
  {
    id: "security-systems",
    icon: Shield,
    title: "Security Systems",
    description: "Comprehensive security solutions including alarms and access control",
    features: ["Motion Sensors", "Smart Locks", "Alarm Systems", "24/7 Monitoring"],
    gradient: "from-blue-600 to-purple-600",
    bgGradient: "from-blue-50 to-purple-50"
  }
];

export default function ServicesSection({ onGetQuote, fullPage = false }) {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          {!fullPage && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-500">Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                From residential solar panels to commercial security systems, we provide 
                comprehensive solutions tailored to Nigeria's unique energy and security needs.
              </p>
            </motion.div>
          )}

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden h-full">
                  <CardContent className="p-8 h-full">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {React.createElement(service.icon, { className: "w-8 h-8 text-white" })}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-blue-500 transition-all duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button
                      onClick={onGetQuote}
                      className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform group-hover:scale-105`}
                    >
                      Get Quote
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Why Choose Us */}
          <motion.div
            id="why-choose-us"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-center"
          >
            <h3 className="text-3xl font-bold text-white mb-8">
              Why Choose Our Solutions?
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center mb-4">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Expert Installation</h4>
                <p className="text-gray-300 text-center">Certified technicians with 10+ years experience</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Fast Response</h4>
                <p className="text-gray-300 text-center">24-48 hour installation scheduling</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Quality Guarantee</h4>
                <p className="text-gray-300 text-center">Premium components with extended warranties</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}