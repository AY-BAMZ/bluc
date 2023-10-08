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
      tabBackground: isDarkTheme ? '#0A111B' : '#F8F9FB',
      cardBackground: isDarkTheme ? '#212D3D' : '#EEF1FF',
      lightCardBackground: isDarkTheme ? '#2D4264' : '#dde0ee',
      hyperText: isDarkTheme ? '#8E73D5' : '#1E00AD',
      text: isDarkTheme ? '#ffffff' : '#292D32',
      textLight: isDarkTheme ? '#ddd' : '#555',
      textExtraLight: isDarkTheme ? '#ccc' : '#777',
      placeholder: isDarkTheme ? '#aaa' : '#aaa',
      black: isDarkTheme ? '#ffffff' : '#292D32',
      buttonBackground: isDarkTheme ? '#7041FF' : '#5338A8',
      inputBackground: isDarkTheme ? '#212D3D' : '#F5F7F7',
      yellow: isDarkTheme ? '#FFFF00' : '#D3BE00',
      orange: isDarkTheme ? '#FE7902' : '#E36D00',
      green: isDarkTheme ? '#32C71A' : '#2D9A1C',
      red: isDarkTheme ? '#32C71A' : '#ff0000',
      shadowColor: isDarkTheme ? '#000' : '#99',
      // ... other theme properties
    },
    // ... other theme properties
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider