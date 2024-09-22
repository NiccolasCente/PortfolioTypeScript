import React from 'react';
import { ThemeProvider } from './components/Hooks/ThemeContext'; 
import { LanguageProvider } from './components/Hooks/LanguageContext'; 
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div>
          <Header /> 
          <Main />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
