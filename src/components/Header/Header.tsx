import React, { useState } from "react";
import ThemeToggle from "../Hooks/ThemeToogle"; 
import LanguageToggle from "../Hooks/LanguageToogle"; 
import AnimatedSection from "../Hooks/AnimatedSection";
import { useLanguage } from "../Hooks/LanguageContext"; 

import "../../assets/GlobalStyle.css";
import "../../assets/Header.css";

const Header: React.FC = () => {
  const { language } = useLanguage(); 
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const translations = {
    'pt-BR': {
      title: "Niccolas.Cyber",
      navItems: {
        home: "Início",
        about: "Sobre",
        projects: "Projetos",
        contacts: "Contatos"
      }
    },
    'en': {
      title: "Niccolas.Cyber",
      navItems: {
        home: "Home",
        about: "About",
        projects: "Projects",
        contacts: "Contacts"
      }
    }
  };

  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <header id="home">
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
          <div className="menu-icon" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <AnimatedSection animation="fade-in">
            <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
              <ul>
                <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')}>{translations[language].navItems.home}</a></li> 
                <li><a href="#sobre" onClick={(e) => scrollToSection(e, 'sobre')}>{translations[language].navItems.about}</a></li>
                <li><a href="#projetos" onClick={(e) => scrollToSection(e, 'projetos')}>{translations[language].navItems.projects}</a></li>
                <li><a href="#contatos" onClick={(e) => scrollToSection(e, 'contatos')}>{translations[language].navItems.contacts}</a></li>
              </ul>
            </nav>
          </AnimatedSection>
        </div>
      </div>
    </header>
  );
};

export default Header;
