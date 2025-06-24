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
                      src="/solarwork.png" 
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
          
          {/* Certifications & Partnerships */}
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
                We are proud to be certified by industry-leading organizations and collaborate with respected institutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Nnamdi Azikiwe University",
                  description: "Academic partnership for research and development in renewable energy solutions",
                  logo: "data:image/png;base64,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"
                },
                {
                  name: "IEEE",
                  description: "Collaboration on technical standards and professional development",
                  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/IEEE_logo.svg/1200px-IEEE_logo.svg.png"
                },
                {
                  name: "Girls Secondary School",
                  description: "Educational partnership promoting STEM education for young women",
                  logo: "https://img.freepik.com/premium-vector/education-logo-design-school-academy-university-educational-emblem_153097-668.jpg"
                },

              ].map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="h-24 flex items-center justify-center mb-4">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`} 
                      className="max-h-full max-w-full object-contain"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/150?text=Logo';
                      }}
                    />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2 text-center">{partner.name}</h4>
                  <p className="text-gray-600 text-center text-sm">{partner.description}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-gray-600 italic">
                Interested in partnering with us? <a href="/contact" className="text-orange-500 font-medium hover:underline">Contact us</a> to explore collaboration opportunities.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}