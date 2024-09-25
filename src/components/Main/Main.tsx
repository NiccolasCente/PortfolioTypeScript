import React from 'react';
import AnimatedSection from "../Hooks/AnimatedSection";
import { useLanguage } from '../Hooks/LanguageContext'; 

import '../../assets/Main.css'; 

import { FaLinkedinIn, FaGithubAlt, FaWhatsapp, FaEnvelope } from 'react-icons/fa'; 

import ImageMain from "../../assets/MainIcons/ImageMain.jpeg";
import HTML5Icon from "../../assets/MainIcons/HTML5Icon.png";
import CSS3Icon from "../../assets/MainIcons/CSS3Icon.webp";
import JSIcon from "../../assets/MainIcons/JSIcon.png";
import TypeScriptIcon from "../../assets/MainIcons/TypeScriptIcon.png";
import ReactIcon from "../../assets/MainIcons/ReactIcon.webp";
import ViteIcon from "../../assets/MainIcons/Vite.js.png";
import BootstrapIcon from "../../assets/MainIcons/BootstrapIcon.png";
import FigmaIcon from "../../assets/MainIcons/FigmaIcon.webp";

const Main: React.FC = () => {
  const { language } = useLanguage(); 

  const translations = {
    'pt-BR': {
      title: "Desenvolvedor Front-End",
      greeting: "Olá, sou o",
      name: "Niccolas Cente",
      description: "Um Desenvolvedor Front-End apaixonado por Design que reside em São Paulo, Brasil.",
      techStack: "Tech Stack |"
    },
    'en': {
      title: "Front-End Developer",
      greeting: "Hello, I'm",
      name: "Niccolas Cente",
      description: "A Front-End Developer passionate about Design living in São Paulo, Brazil.",
      techStack: "Tech Stack |"
    }
  };

  return (
    <main>
      <div className="content-container">
        <div id="text-container">
          <AnimatedSection animation="fade-in">
            <h1>
              {translations[language].title}<br /> React <span>👋</span>
            </h1>
            <p id="main-p-text">
              {translations[language].greeting} <strong>{translations[language].name}</strong>. {translations[language].description}
            </p>
          </AnimatedSection>

          <div id="icon-container">
            <AnimatedSection animation="fade-in">
              <a href="https://www.linkedin.com/in/niccolas-cente-ba989b23b/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn size="2em" style={{ marginRight: '10px', color: '#0A66C2' }} />
              </a>
              <a href="https://github.com/NiccolasCente" target="_blank" rel="noopener noreferrer">
                <FaGithubAlt size="2em" style={{ marginRight: '10px', color: '#171515' }} />
              </a>
              <a href="https://wa.me/11934747011" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size="2em" style={{ marginRight: '10px', color: '#25D366' }} />
              </a>
              <a href="mailto:niccolas.dev@hotmail.com">
                <FaEnvelope size="2em" style={{ marginRight: '10px', color: '#EA4335' }} />
              </a>
            </AnimatedSection>
          </div>
          
          <div id="skills-container">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <AnimatedSection animation="fade-in">
                <p style={{ marginRight: '1em' }}>{translations[language].techStack}</p>
              </AnimatedSection>

              <div className="skill-pair">
                <AnimatedSection animation="fade-in">
                  <img src={HTML5Icon} alt="HTML5Icon" />
                  <img src={CSS3Icon} alt="CSS3Icon" />
                </AnimatedSection>
              </div>
              <div className="skill-pair" style={{ marginLeft: '20px' }}>
                <AnimatedSection animation="fade-in">
                  <img src={JSIcon} alt="JSIcon" style={{ marginRight: '7px' }} />
                  <img src={TypeScriptIcon} alt="TypeIcon" style={{ marginRight: '7px' }}/>
                </AnimatedSection>
              </div>
              <div className="skill-pair" style={{ marginLeft: '20px' }}>
                <AnimatedSection animation="fade-in">
                  <img src={ReactIcon} alt="ReactIcon" style={{ marginRight: '7px' }} />
                  <img src={ViteIcon} alt="ViteIcon" style={{ marginRight: '7px' }} />
                </AnimatedSection>
              </div>
              <div className="skill-pair" style={{ marginLeft: '20px' }}>
                <AnimatedSection animation="fade-in">
                  <img src={FigmaIcon} alt="FigmaIcon" />
                  <img src={BootstrapIcon} alt="BootstrapIcon" />
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>

        <AnimatedSection animation="fade-in">
          <div id="img-main" style={{ marginLeft: '20px' }}>
            <img src={ImageMain} alt="Foto principal" />
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}

export default Main;
