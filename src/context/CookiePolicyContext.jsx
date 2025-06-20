import React, { useState, createContext, useContext } from 'react';

// Create a context to manage the cookie policy state
const CookiePolicyContext = createContext();

export const CookiePolicyProvider = ({ children }) => {
  const [showPolicy, setShowPolicy] = useState(false);

  const togglePolicy = () => {
    setShowPolicy(!showPolicy);
  };

  return (
    <CookiePolicyContext.Provider value={{ showPolicy, togglePolicy, setShowPolicy }}>
      {children}
    </CookiePolicyContext.Provider>
  );
};

// Custom hook to use the cookie policy context
export const useCookiePolicy = () => {
  const context = useContext(CookiePolicyContext);
  if (!context) {
    throw new Error('useCookiePolicy must be used within a CookiePolicyProvider');
  }
  return context;
};
