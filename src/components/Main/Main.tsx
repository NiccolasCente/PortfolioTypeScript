import React from 'react';
import AnimatedSection from "../Hooks/AnimatedSection";
import { useLanguage } from '../Hooks/LanguageContext'; 


import '../../assets/Main.css'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithubAlt, faWhatsapp, } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import ImageMain from "../../assets/MainIcons/ImageMain.jpeg";
import HTML5Icon from "../../assets/MainIcons/HTML5Icon.png";
import CSS3Icon from "../../assets/MainIcons/CSS3Icon.webp";
import JSIcon from "../../assets/MainIcons/JSIcon.png";
import TypeScriptIcon from "../../assets/MainIcons/TypeScriptIcon.png";
import ReactIcon from "../../assets/MainIcons/ReactIcon.webp";
import BootstrapIcon from "../../assets/MainIcons/BootstrapIcon.png";
import FigmaIcon from "../../assets/MainIcons/FigmaIcon.webp";

const Main: React.FC = () => {
  const { language } = useLanguage(); 

  const translations = {
    'pt-BR': {
      title: "Desenvolvedor Front-End",
      greeting: "Olá, sou o",
      name: "Niccolas Cente.",
      description: "Um Desenvolvedor Front-End apaixonado por Design que reside em São Paulo, Brasil.",
      techStack: "Tech Stack |"
    },
    'en': {
      title: "Front-End Developer",
      greeting: "Hello, I'm",
      name: "Niccolas Cente.",
      description: "A Front-End Developer passionate about Design living in São Paulo, Brazil.",
      techStack: "Tech Stack |"
    }
  };

  return (
    <main>
      <div className="content-container">
        <div id="text-container">
          <h1>
            {translations[language].title}<br /> React <span>👋</span>
          </h1>
          <p id="main-p-text">
            {translations[language].greeting} <strong>{translations[language].name}</strong>. {translations[language].description}
          </p>
          
          <div id="icon-container">
            <a href="https://www.linkedin.com/in/niccolas-cente-ba989b23b/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
            </a>
            <a href="https://github.com/NiccolasCente" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithubAlt} size="2x" />
            </a>
            <a href="https://wa.me/11934747011" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
            <a href="mailto:niccolas.dev@hotmail.com">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
          </div>
          
          <div id="skills-container">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <p style={{ marginRight: '1em' }}>{translations[language].techStack}</p>
              <div className="skill-pair">
                <img src={HTML5Icon} alt="HTML5Icon" />
                <img src={CSS3Icon} alt="CSS3Icon" />
              </div>
              <div className="skill-pair" style={{ marginLeft: '20px' }}>
                <img src={JSIcon} alt="JSIcon" />
                <img src={TypeScriptIcon} alt="TypeIcon" />
                <img src={ReactIcon} alt="ReactIcon" />
              </div>
              <div className="skill-pair" style={{ marginLeft: '20px' }}>
                <img src={FigmaIcon} alt="FigmaIcon" />
                <img src={BootstrapIcon} alt="BootstrapIcon" />
              </div>
            </div>
          </div>
        </div>
  
        <div id="img-main" style={{ marginLeft: '20px' }}>
          <img src={ImageMain} alt="Foto principal" />
        </div>
      </div>
    </main>
  );
}

export default Main;
