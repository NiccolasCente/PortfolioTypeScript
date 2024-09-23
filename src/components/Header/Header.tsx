import React from "react";
import ThemeToggle from "../Hooks/ThemeToogle"; 
import LanguageToggle from "../Hooks/LanguageToogle"; 
import AnimatedSection from "../Hooks/AnimatedSection";
import { useLanguage } from "../Hooks/LanguageContext"; 

import "../../assets/GlobalStyle.css";
import "../../assets/Header.css";

const Header: React.FC = () => {
  const { language } = useLanguage(); 

  const translations = {
    'pt-BR': {
      title: "Niccolas.dev",
      navItems: {
        home: "Início",
        about: "Sobre",
        projects: "Projetos",
        contacts: "Contatos"
      }
    },
    'en': {
      title: "Niccolas.dev",
      navItems: {
        home: "Home",
        about: "About",
        projects: "Projects",
        contacts: "Contacts"
      }
    }
  };

  return (
    <header>
      <div id="header-container">
        <AnimatedSection animation="fade-in">
          <div className="header-title">
            <h1>{translations[language].title}</h1> 
          </div>
        </AnimatedSection>

        <div className="nav-container">
          <div className="nav-icons">
            <AnimatedSection animation="fade-in">
              <ThemeToggle /> 
            </AnimatedSection>
            <AnimatedSection animation="fade-in">
              <LanguageToggle /> 
            </AnimatedSection>
          </div>
          <AnimatedSection animation="fade-in">
            <nav>
              <ul>
                <li><a href="#home">{translations[language].navItems.home}</a></li> 
                <li><a href="#sobre">{translations[language].navItems.about}</a></li>
                <li><a href="#projetos">{translations[language].navItems.projects}</a></li>
                <li><a href="#contatos">{translations[language].navItems.contacts}</a></li>
              </ul>
            </nav>
          </AnimatedSection>
        </div>
      </div>
    </header>
  );
};

export default Header;
