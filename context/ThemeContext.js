import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

 const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const theme = {
    colors: {
      primary: isDarkTheme ? '#7041FF' : '#1E00AD',
      background: isDarkTheme ? '#161E29' : '#fff',
      tabBackground: isDarkTheme ? '#111822' : '#F8F9FB',
      cardBackground: isDarkTheme ? '#212D3D' : '#F8F9FB',
      text: isDarkTheme ? '#ffffff' : '#292D32',
      black: isDarkTheme ? '#ffffff' : '#292D32',
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