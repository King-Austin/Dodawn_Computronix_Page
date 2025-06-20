import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie, Info } from 'lucide-react';
import { useCookiePolicy } from '../context/CookiePolicyContext';

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const { showPolicy, setShowPolicy } = useCookiePolicy();

  useEffect(() => {
    // Check if user has already made a choice
    const consentStatus = localStorage.getItem('cookieConsent');
    
    // If no choice has been made yet, show the banner after a short delay
    if (!consentStatus) {
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowConsent(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowConsent(false);
  };

  const togglePolicy = () => {
    setShowPolicy(!showPolicy);
  };

  return (
    <>
      <AnimatePresence>
        {showConsent && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-gray-200 shadow-lg"
          >
            <div className="container mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <Cookie className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900">We use cookies</h3>
                    <p className="text-sm text-gray-600 max-w-2xl">
                      We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. 
                      By clicking "Accept All", you consent to our use of cookies.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <Button 
                    onClick={togglePolicy} 
                    variant="ghost" 
                    className="text-blue-600 hover:text-blue-800 hover:bg-blue-50"
                  >
                    <Info className="w-4 h-4 mr-1" />
                    Cookie Policy
                  </Button>
                  <Button 
                    onClick={handleDecline} 
                    variant="outline" 
                    className="border-gray-300 hover:bg-gray-100"
                  >
                    Decline
                  </Button>
                  <Button 
                    onClick={handleAccept} 
                    className="bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    Accept All
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showPolicy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowPolicy(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-6 md:p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Cookie className="w-6 h-6 text-orange-500" />
                  <h2 className="text-2xl font-bold text-slate-900">Cookie Policy</h2>
                </div>
                <button
                  onClick={() => setShowPolicy(false)}
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <div className="prose prose-slate prose-headings:font-semibold prose-headings:text-slate-900">
                <p>
                  This Cookie Policy explains how Dodawn Computronix ("we", "us", or "our") uses cookies and similar technologies 
                  when you visit our website.
                </p>

                <h3>What are Cookies?</h3>
                <p>
                  Cookies are small text files that are stored on your device when you visit a website. They are widely used to make 
                  websites work more efficiently and provide information to the website owners.
                </p>

                <h3>Types of Cookies We Use</h3>
                <p>We use the following types of cookies:</p>
                <ul>
                  <li>
                    <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly and cannot be 
                    turned off in our systems.
                  </li>
                  <li>
                    <strong>Performance Cookies:</strong> These cookies allow us to count visits and traffic sources so we can measure 
                    and improve the performance of our site.
                  </li>
                  <li>
                    <strong>Functional Cookies:</strong> These cookies enable the website to provide enhanced functionality and personalization.
                  </li>
                  <li>
                    <strong>Targeting Cookies:</strong> These cookies may be set through our site by our advertising partners to build a 
                    profile of your interests.
                  </li>
                </ul>

                <h3>How to Manage Cookies</h3>
                <p>
                  You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. 
                  If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
                </p>

                <h3>Changes to This Cookie Policy</h3>
                <p>
                  We may update this Cookie Policy from time to time. The updated version will be indicated by an updated "Last updated" date.
                </p>

                <h3>Contact Us</h3>
                <p>
                  If you have any questions about this Cookie Policy, please contact us at:
                  <br />
                  Email: dodawnelectronics@gmail.com
                  <br />
                  Phone: +2348038793533
                  <br />
                  Address: 94 Arthur Eze Avenue, Awka, Anambra State.
                </p>
              </div>

              <div className="mt-8 flex justify-end gap-3">
                <Button
                  onClick={() => setShowPolicy(false)}
                  variant="outline"
                  className="border-gray-300 hover:bg-gray-100"
                >
                  Close
                </Button>
                <Button
                  onClick={handleAccept}
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                >
                  Accept All Cookies
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
