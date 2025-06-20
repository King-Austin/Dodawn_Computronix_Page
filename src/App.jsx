import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Home from './Pages/Home';
import Services from './Pages/Services';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Dashboard from './Pages/Dashboard';
import CookieConsent from './Components/CookieConsent';
import { CookiePolicyProvider } from './context/CookiePolicyContext';

function App() {
  return (
    <CookiePolicyProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <CookieConsent />
        <SpeedInsights />
      </Router>
    </CookiePolicyProvider>
  )
}

export default App;
