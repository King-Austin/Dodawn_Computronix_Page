import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Components/landing/NavBar';
import FooterSection from '../Components/landing/FooterSection';
import { Card } from '../components/ui/card';
import { Sun, Shield, LineChart, Settings, Users, Clock } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { title: 'Total Installations', value: '245+', icon: Sun, color: 'bg-orange-500' },
    { title: 'Security Systems', value: '180+', icon: Shield, color: 'bg-blue-500' },
    { title: 'Client Satisfaction', value: '98%', icon: Users, color: 'bg-green-500' },
    { title: 'Response Time', value: '4hrs', icon: Clock, color: 'bg-purple-500' },
  ];

  const recentProjects = [
    { 
      name: 'Residential Solar Installation', 
      location: 'Awka, Anambra', 
      date: 'June 15, 2025',
      type: 'solar_installation'
    },
    { 
      name: 'Commercial CCTV Setup', 
      location: 'Onitsha, Anambra', 
      date: 'June 10, 2025',
      type: 'cctv_installation'
    },
    { 
      name: 'Industrial Security System', 
      location: 'Nnewi, Anambra', 
      date: 'June 5, 2025',
      type: 'both'
    },
    { 
      name: 'Solar Backup Installation', 
      location: 'Ekwulobia, Anambra', 
      date: 'June 1, 2025',
      type: 'solar_installation'
    },
  ];

  return (
    <div className="pt-20 pb-16 bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome to your Dodawn Computronix management dashboard</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
        >
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 border-0 shadow-md">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{stat.title}</p>
                  <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
                </div>
              </div>
            </Card>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="border-0 shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-slate-900">Recent Projects</h2>
                <div className="flex items-center gap-2 text-sm text-blue-600">
                  <Settings className="w-4 h-4" />
                  <span>Manage</span>
                </div>
              </div>

              <div className="space-y-4">
                {recentProjects.map((project, index) => (
                  <div 
                    key={index} 
                    className="border-b border-gray-100 last:border-0 pb-4 last:pb-0"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium text-slate-900">{project.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                          <span>{project.location}</span>
                          <span>•</span>
                          <span>{project.date}</span>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.type === 'solar_installation' 
                            ? 'bg-orange-100 text-orange-800' 
                            : project.type === 'cctv_installation'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-purple-100 text-purple-800'
                        }`}>
                          {project.type === 'solar_installation' 
                            ? 'Solar' 
                            : project.type === 'cctv_installation'
                            ? 'CCTV'
                            : 'Solar & CCTV'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="border-0 shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-slate-900">Performance</h2>
                <div className="flex items-center gap-2 text-sm text-blue-600">
                  <LineChart className="w-4 h-4" />
                  <span>View All</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Solar Installation Efficiency</span>
                    <span className="font-medium text-slate-900">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">CCTV System Uptime</span>
                    <span className="font-medium text-slate-900">99.7%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '99.7%' }}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Customer Satisfaction</span>
                    <span className="font-medium text-slate-900">98%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '98%' }}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Project Completion Rate</span>
                    <span className="font-medium text-slate-900">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
}
