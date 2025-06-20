m section.
import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { cn } from '../../lib/utils';

const SelectContext = createContext({});

const Select = ({ children, value, onChange, onValueChange, defaultValue }) => {
  const [selectedValue, setSelectedValue] = useState(value || defaultValue || '');
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);
  
  const handleChange = (newValue) => {
    setSelectedValue(newValue);
    setIsOpen(false);
    if (onValueChange) onValueChange(newValue);
    if (onChange) onChange(newValue);
  };

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  return (
    <SelectContext.Provider value={{ 
      value: selectedValue, 
      onChange: handleChange,
      isOpen,
      setIsOpen,
      selectRef
    }}>
      <div ref={selectRef} className="relative">
        {children}
      </div>
    </SelectContext.Provider>
  );
};

const SelectTrigger = ({ children, className, ...props }) => {
  const { setIsOpen, isOpen } = useContext(SelectContext);
  
  return (
    <div
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer",
        className
      )}
      onClick={() => setIsOpen(!isOpen)}
      {...props}
    >
      {children}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={`h-4 w-4 opacity-50 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
      >
        <path d="m6 9 6 6 6-6"/>
      </svg>
    </div>
  );
};

const SelectValue = ({ placeholder, children, className, ...props }) => {
  const { value } = useContext(SelectContext);
  
  return (
    <span className={cn("text-sm", value ? '' : 'text-gray-500', className)} {...props}>
      {value ? children : placeholder}
    </span>
  );
};

const SelectContent = ({ children, className, ...props }) => {
  const { isOpen } = useContext(SelectContext);
  
  if (!isOpen) return null;
  
  return (
    <div
      className={cn(
        "absolute z-50 min-w-[8rem] w-full mt-1 overflow-hidden rounded-md border bg-white shadow-lg",
        className
      )}
      {...props}
    >
      <div className="p-1">{children}</div>
    </div>
  );
};

const SelectItem = ({ children, value, className, ...props }) => {
  const { value: selectedValue, onChange } = useContext(SelectContext);
  
  return (
    <div
      className={cn(
        "relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none hover:bg-gray-100 focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className,
        selectedValue === value ? "bg-orange-50 text-orange-600" : ""
      )}
      onClick={() => onChange(value)}
      {...props}
    >
      {children}
      {selectedValue === value && (
        <span className="absolute right-2 text-orange-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </span>
      )}
    </div>
  );
};

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem };
