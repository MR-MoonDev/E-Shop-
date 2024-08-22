import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const themes = {
  light: {
    name: 'light',
    backgroundColor: '#ffffff',
    textColor: '#000000',
    accentColor: '#ff0000',
    secondaryBackgroundColor: '#f0f0f0',
    borderColor: '#cccccc',
    hoverColor: '#e60000', 
  },
  dark: {
    name: 'dark',
    backgroundColor: '#333333',
    textColor: '#ffffff',
    accentColor: '#ff0000',
    secondaryBackgroundColor: '#444444',
    borderColor: '#666666',
    hoverColor: '#cc0000', 
  },
};

export const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  const toggleTheme = () => {
    setThemeName((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
   
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ theme: themes[themeName], toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
