import React from "react";
import ThemeToggle from "../Hooks/ThemeToogle"; 
import LanguageToggle from "../Hooks/LanguageToogle"; 
import AnimatedSection from "../Hooks/AnimatedSection";

import "../../assets/GlobalStyle.css";
import "../../assets/Header.css";

const Header: React.FC = () => {
  return (
    <header>
      <div id="header-container">
        <AnimatedSection animation="fade-in">
          <div className="header-title">
            <h1>Niccolas.dev</h1>
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
                <li><a href="#home">Início</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#projetos">Projetos</a></li>
                <li><a href="#contatos">Contatos</a></li>
              </ul>
            </nav>
          </AnimatedSection>
        </div>
      </div>
    </header>
  );
};

export default Header;
