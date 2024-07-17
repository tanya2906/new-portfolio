import React, { createContext,useContext,useState, useEffect } from 'react';

const ThemeContext = createContext(//{
  //theme: 'light',
  //toggleTheme: () => {},
//}
);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
   ()=>localStorage.getItem('theme') || 'light'
  ); // Load from storage if available

  useEffect(() => {
    
    document.body.setAttribute('data-theme', theme); // Apply theme to body (optional)
    localStorage.setItem('theme', theme); // Update storage on theme change
  }, [theme]);

  const toggleTheme = () => {
    console.log('theme switched');
    setTheme((prevTheme)=>(prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
