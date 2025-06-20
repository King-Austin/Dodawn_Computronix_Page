import React, { createContext, useContext, useState } from 'react';
import { cn } from '../../lib/utils';

const SelectContext = createContext({});

const Select = ({ children, value, onChange, onValueChange, defaultValue }) => {
  const [selectedValue, setSelectedValue] = useState(value || defaultValue || '');
  
  const handleChange = (newValue) => {
    setSelectedValue(newValue);
    if (onValueChange) onValueChange(newValue);
    if (onChange) onChange(newValue);
  };
  
  return (
    <SelectContext.Provider value={{ value: selectedValue, onChange: handleChange }}>
      {children}
    </SelectContext.Provider>
  );
};

const SelectTrigger = ({ children, className, ...props }) => {
  const { value } = useContext(SelectContext);
  
  return (
    <div
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 opacity-50">
        <path d="m6 9 6 6 6-6"/>
      </svg>
    </div>
  );
};

const SelectValue = ({ placeholder, children, className, ...props }) => {
  const { value } = useContext(SelectContext);
  
  return (
    <span className={cn("text-sm", className)} {...props}>
      {value ? children : placeholder}
    </span>
  );
};

const SelectContent = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md",
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
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className,
        selectedValue === value && "bg-accent text-accent-foreground"
      )}
      onClick={() => onChange(value)}
      {...props}
    >
      {children}
    </div>
  );
};

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem };
