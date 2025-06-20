import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { 
  Award, 
  Users, 
  Zap, 
  Shield, 
  CheckCircle, 
  TrendingUp,
  Clock,
  Star
} from 'lucide-react';

const achievements = [
  {
    icon: Users,
    number: "500+",
    title: "Happy Customers",
    description: "Satisfied clients across Nigeria"
  },
  {
    icon: Zap,
    number: "50MW+",
    title: "Solar Capacity",
    description: "Total solar power installed"
  },
  {
    icon: Shield,
    number: "1000+",
    title: "Security Systems",
    description: "CCTV installations completed"
  },
  {
    icon: Award,
    number: "15+",
    title: "States Covered",
    description: "Nationwide service delivery"
  }
];

const features = [
  "Nigerian-based company with local expertise",
  "Certified technicians and engineers",
  "Premium quality equipment and components",
  "24/7 customer support and maintenance",
  "Competitive pricing with flexible payment options",
  "Comprehensive warranty on all installations"
];

export default function AboutSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-500">SolarSecurity</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nigeria's leading provider of sustainable energy and security solutions. 
              We're committed to powering your future while protecting what matters most.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">
                  Powering Nigeria's Future
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Founded with a vision to transform Nigeria's energy landscape, SolarSecurity 
                  combines cutting-edge solar technology with comprehensive security solutions. 
                  We understand the unique challenges facing Nigerian homes and businesses, 
                  from unreliable power supply to security concerns.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Our team of certified engineers and technicians brings over a decade of 
                  experience in renewable energy and security systems. We pride ourselves 
                  on delivering solutions that are not just technologically advanced, 
                  but also practical and affordable for the Nigerian market.
                </p>
              </div>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex gap-4 pt-4">
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-xl font-semibold">
                  Learn More
                </Button>
                <Button variant="outline" className="border-2 border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-600 px-8 py-3 rounded-xl font-semibold">
                  View Projects
                </Button>
              </div>
            </motion.div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-blue-500/10" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-white font-medium">System Status: Online</span>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="w-5 h-5 text-orange-500" />
                        <span className="text-white text-sm">Solar Output</span>
                      </div>
                      <div className="text-2xl font-bold text-orange-500">15.2 kW</div>
                      <div className="text-green-400 text-sm flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        +12% today
                      </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="w-5 h-5 text-blue-500" />
                        <span className="text-white text-sm">Security</span>
                      </div>
                      <div className="text-2xl font-bold text-blue-500">8 Cams</div>
                      <div className="text-green-400 text-sm flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        24/7 Active
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-white font-medium">Customer Satisfaction</span>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                        ))}
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">4.9/5.0</div>
                    <div className="text-gray-300 text-sm">Based on 500+ reviews</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-slate-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-blue-500 transition-all duration-300">
                      {achievement.number}
                    </div>
                    <h4 className="text-xl font-semibold text-slate-800 mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-600">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}