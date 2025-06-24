import { initializeApp } from 'emailjs-com';

const initEmailService = () => {
  // Initialize EmailJS with your public key
  if (process.env.REACT_APP_EMAILJS_PUBLIC_KEY) {
    initializeApp(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
    console.log('EmailJS initialized');
  } else {
    console.warn('EmailJS public key not found in environment variables');
  }
};

export default initEmailService;
