import React from "react";
import ThemeToggle from "../Hooks/ThemeToogle"; 
import LanguageToggle from "../Hooks/LanguageToogle"; 
import "../../assets/GlobalStyle.css";
import "../../assets/Header.css";

const Header: React.FC = () => {
  return (
    <header>
      <div id="header-container">
        <div className="header-title">
          <h1>Niccolas.dev</h1>
        </div>

        <div className="nav-container">
          <div className="nav-icons">
            <ThemeToggle /> 
            <LanguageToggle /> 
          </div>
          <nav>
            <ul>
              <li><a href="#home">Início</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#projetos">Projetos</a></li>
              <li><a href="#contatos">Contatos</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
