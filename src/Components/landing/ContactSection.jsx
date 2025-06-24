import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select';
import ContactInquiryData from '../../Entities/ContactInquiry.json';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Clock,
  MessageCircle
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState(ContactInquiryData.initialData || {
    name: '',
    email: '',
    phone: '',
    service_type: '',
    property_type: '',
    location: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear any error for this field
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.service_type) newErrors.service_type = 'Service type is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service_type: '',
        property_type: '',
        location: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    
    setIsSubmitting(false);
  };

  if (submitSuccess) {
    return (
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 border border-green-200 rounded-3xl p-12"
            >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-green-900 mb-4">Message Sent Successfully!</h3>
              <p className="text-green-700 text-lg mb-8">
                Thank you for your inquiry. Our team will contact you within 24 hours to discuss your project.
              </p>
              <Button
                onClick={() => setSubmitSuccess(false)}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl"
              >
                Send Another Message
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Get Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-500">Free Quote</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to power your property with solar energy or secure it with professional CCTV systems? 
              Contact us today for a personalized consultation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8">
                  <CardTitle className="text-2xl font-bold">Request a Quote</CardTitle>
                  <p className="text-gray-300">Fill out the form below and we'll get back to you within 24 hours</p>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className={`rounded-xl border-gray-200 focus:border-orange-500 focus:ring-orange-500 ${errors.name ? 'border-red-500' : ''}`}
                          placeholder="Enter your full name"
                        />
                        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                        <Input
                          required
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className={`rounded-xl border-gray-200 focus:border-orange-500 focus:ring-orange-500 ${errors.phone ? 'border-red-500' : ''}`}
                          placeholder="+234 xxx xxx xxxx"
                        />
                        {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`rounded-xl border-gray-200 focus:border-orange-500 focus:ring-orange-500 ${errors.email ? 'border-red-500' : ''}`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Service Required *</label>
                        <Select 
                          value={formData.service_type} 
                          onValueChange={(value) => handleInputChange('service_type', value)}
                          required
                        >
                          <SelectTrigger className={`rounded-xl border-gray-200 focus:border-orange-500 focus:ring-orange-500 ${errors.service_type ? 'border-red-500' : ''}`}>
                            <SelectValue placeholder="Select service">
                              {formData.service_type === 'solar_installation' && 'Solar Installation'}
                              {formData.service_type === 'cctv_installation' && 'CCTV Installation'}
                              {formData.service_type === 'both' && 'Both Services'}
                              {formData.service_type === 'consultation' && 'Consultation Only'}
                            </SelectValue>
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="solar_installation">Solar Installation</SelectItem>
                            <SelectItem value="cctv_installation">CCTV Installation</SelectItem>
                            <SelectItem value="both">Both Services</SelectItem>
                            <SelectItem value="consultation">Consultation Only</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.service_type && <p className="mt-1 text-sm text-red-500">{errors.service_type}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                        <Select 
                          value={formData.property_type} 
                          onValueChange={(value) => handleInputChange('property_type', value)}
                        >
                          <SelectTrigger className="rounded-xl border-gray-200 focus:border-orange-500 focus:ring-orange-500">
                            <SelectValue placeholder="Select property type">
                              {formData.property_type === 'residential' && 'Residential'}
                              {formData.property_type === 'commercial' && 'Commercial'}
                              {formData.property_type === 'industrial' && 'Industrial'}
                            </SelectValue>
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="residential">Residential</SelectItem>
                            <SelectItem value="commercial">Commercial</SelectItem>
                            <SelectItem value="industrial">Industrial</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                      <Input
                        value={formData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        className="rounded-xl border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                        placeholder="City, State (e.g., Lagos, Lagos State)"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="rounded-xl border-gray-200 focus:border-orange-500 focus:ring-orange-500"
                        placeholder="Tell us about your project and requirements..."
                        rows={4}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl py-3"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Processing...
                        </div>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col justify-center"
            >
              <div className="space-y-10">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-orange-100 rounded-xl p-3">
                        <Phone className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900">Phone</h4>
                        <p className="text-gray-600">+2348038793533</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 rounded-xl p-3">
                        <Mail className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900">Email</h4>
                        <p className="text-gray-600">dodawnelectronics@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 rounded-xl p-3">
                        <MapPin className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900">Office Address</h4>
                        <p className="text-gray-600">94 Arthur Eze Avenue.</p>
                        <p className="text-gray-600">Anambra State, Nigeria</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-purple-100 rounded-xl p-3">
                        <Clock className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900">Business Hours</h4>
                        <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p className="text-gray-600">Saturday: 9:00 AM - 3:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Location</h3>
                  <div className="rounded-3xl overflow-hidden h-[250px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521487393376!2d7.069535015511567!3d6.1975784955143415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104382c82c497115%3A0x89d89bf85a98c70c!2s94%20Arthur%20Eze%20Ave%2C%20Awka%2C%20Anambra!5e0!3m2!1sen!2sng!4v1624303512668!5m2!1sen!2sng"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
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