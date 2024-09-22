import React, {useState, useEffect} from 'react';
import { ThemeProvider } from './components/Hooks/ThemeContext'; 
import { LanguageProvider } from './components/Hooks/LanguageContext'; 
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Loading from './components/Loading/Loading';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(()=> {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);

  }, []);

  if (loading) {
    return <Loading />
  }

  
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
