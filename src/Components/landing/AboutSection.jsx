import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../../components/ui/card';
import { Sun, Shield, Battery, Camera, Clock, CheckCircle, Users, Star, Award, User } from 'lucide-react';

export default function AboutSection({ fullPage = false }) {
  const stats = [
    { value: '7+', label: 'Years Experience', icon: Clock },
    { value: '500+', label: 'Completed Projects', icon: CheckCircle },
    { value: '4.9', label: 'Customer Rating', icon: Star },
    { value: '24/7', label: 'Support Available', icon: Users }
  ];

  // Only keeping the CEO
  const ceo = {
    name: 'Engr Dozie Ekwunife',
    position: 'CEO & Founder',
    bio: 'Over 15 years of experience in the solar and security industry. Leading Dodawn Computronix with a vision to provide reliable and sustainable energy solutions throughout Anambra State and beyond.',
  };

  return (
    <section id="about" className="py-24 bg-white">
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
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-500">Us</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Dodawn Computronix is a leading provider of solar energy and security solutions in Anambra State,
                committed to excellence and customer satisfaction.
              </p>
            </motion.div>
          )}

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="text-center p-6 border-0 shadow-lg rounded-2xl h-full">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Company Story */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6">
                  Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-500">Story</span>
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Founded in 2018, Dodawn Computronix started as a small team with a big vision: to provide 
                    reliable and sustainable energy solutions to Anambra State. As Nigeria faced increasing 
                    power challenges, we stepped in to offer alternatives.
                  </p>
                  <p>
                    Over the years, we expanded our services to include security systems, recognizing the growing 
                    need for integrated home and business protection solutions. Today, we're proud to be one of 
                    the leading providers of solar energy and security solutions in the region.
                  </p>
                  <p>
                    Our commitment to quality, reliability, and customer satisfaction has earned us a reputation 
                    for excellence. We continue to innovate and adapt to the changing landscape of energy and 
                    security needs in Nigeria.
                  </p>
                </div>
              </div>
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-gray-100 rounded-3xl h-[350px] flex items-center justify-center"
                >
                  <div className="absolute inset-0 overflow-hidden rounded-3xl">
                    <img 
                      src="/solarsecurity.jpg" 
                      alt="Solar installation team" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c29sYXIlMjBwYW5lbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60';
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-orange-500/20 rounded-3xl"></div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Team - CEO Only */}
          <div id="team">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-500">Leader</span>
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Under the guidance of our CEO, we deliver exceptional solar and security solutions
              </p>
            </motion.div>
            
            <div className="max-w-lg mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border-0 shadow-xl rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
                    {/* Placeholder for CEO image */}
                    <div className="w-32 h-32 rounded-full bg-gradient-to-r from-orange-500 to-blue-500 flex items-center justify-center">
                      <User className="w-16 h-16 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-2xl font-bold text-slate-900 mb-1">{ceo.name}</h4>
                    <p className="text-orange-600 font-medium mb-4">{ceo.position}</p>
                    <p className="text-gray-600">{ceo.bio}</p>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
          
          {/* Certifications */}
          <motion.div
            id="certifications"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-12"
          >
            <div className="text-center mb-10">
              <Award className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Our Certifications & Partnerships
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We are proud to be certified by industry-leading organizations and partners with top manufacturers
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-white rounded-xl p-6 flex items-center justify-center h-24 shadow-md">
                  <p className="text-gray-400 text-center">Partner Logo</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}