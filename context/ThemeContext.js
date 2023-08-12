import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

 const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const theme = {
    colors: {
      primary: isDarkTheme ? '#7041FF' : '#1E00AD',
      background: isDarkTheme ? '#161E29' : '#fff',
      text: isDarkTheme ? '#ffffff' : '#292D32',
      // ... other theme properties
    },
    // ... other theme properties
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider