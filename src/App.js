import React from 'react';
import Router from 'Router';
import ThemeContextProvider from 'contexts/ThemeContext';

const App = () => {
  return (
    <ThemeContextProvider>
      <Router />
    </ThemeContextProvider>
  );
};

export default App;
