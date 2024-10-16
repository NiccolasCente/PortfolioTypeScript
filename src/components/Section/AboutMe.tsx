import React from 'react';
import AnimatedSection from '../Hooks/AnimatedSection';
import { useLanguage } from '../Hooks/LanguageContext';

import '../../assets/AboutMe.css';
import '../../assets/GlobalStyle.css';

import AboutMeImage from "../../assets/SectionIcons/AboutImage.webp";
import AboutMeImage2 from "../../assets/SectionIcons/AboutImage2.jpg";

const AboutMe: React.FC = () => {
  const { language } = useLanguage(); 

  const translations = {
    'pt-BR': {
      aboutMe: "Sobre Mim",
      title: "Desenvolvedor Web em São Paulo, Brasil",
      introduction: (
        <>
          Olá, me chamo Niccolas, e sou um Desenvolvedor Web. <br />
          Minha paixão é criar e desenvolver uma UI/UX limpa <br />
          para meus usuários.
        </>
      ),
      tools: (
        <>
          Minhas ferramentas principais de desenvolvimento são: <strong style={{color:"#00BFFF"}}>React/Vite.js</strong> em combinação com 
          <strong style={{color:"#00BFFF"}}> TypeScript</strong>, <br />
          <strong style={{color:"#BA55D3 "}}> Bootstrap</strong>, além
          de utilizar <strong>WordPress</strong> e <strong>Elementor</strong> em alguns projetos.
        </>
      ),
      skills: "Minhas Habilidades e Serviços",
      whatICanDo: "O que eu posso fazer",
      learning: (
        <>
          Estou sempre aprendendo e aprimorando minhas habilidades. <br />
          Algumas das áreas em que tenho experiência incluem: Desenvolvimento Front-end, 
          UX/UI, <br /> Design Responsivo, <br />
          Consumção de APIs e Acessibilidade.
        </>
      ),
      approach: (
        <>
          Com uma abordagem de desenvolvimento moderna centrada <br />
          no usuário, com interfaces intuitivas, atraentes e acessíveis buscando sempre a melhor experiência para
          <br /> o usuário!
        </>
      )
    },
    'en': {
      aboutMe: "About Me",
      title: "Web Developer in São Paulo, Brazil",
      introduction: (
        <>
          Hello, my name is Niccolas, and I am a Web Developer. <br />
          My passion is to create and develop a clean UI/UX for <br />
           my users.
        </>
      ),
      tools: (
        <>
          My main development tools are: <strong style={{color:"#00BFFF"}}>React/Vite.js</strong> combined
          <br /> with 
          <strong style={{color:"#00BFFF"}}> TypeScript</strong> and
          <strong style={{color:"#BA55D3 "}}> Bootstrap</strong>, as well as <br />
          <strong>WordPress</strong> and <strong>Elementor</strong> in some projects.
        </>
      ),
      skills: "My Skills and Services",
      whatICanDo: "What I Can Do",
      learning: (
        <>
          I am always learning and improving my skills. <br />
          Some of the areas I have experience in include: Front-end Development, 
          UX/UI, Responsive Design, <br />
          API Consumption, and Accessibility.
        </>
      ),
      approach: (
        <>
          With a modern user-centered development approach, <br />
          I strive for intuitive, attractive, and accessible interfaces that provide the best user experience!
        </>
      )
    }
  };
  

  const langContent = translations[language] || translations['pt-BR']; 
  
  return (
    <section id="sobre"className="about-me-section">
      <div className="about-me">
        <AnimatedSection animation='fade-in'>
          <img src={AboutMeImage} alt={langContent.aboutMe} className="about-image" />
        </AnimatedSection>  
        <div className="about-content">
          <AnimatedSection animation='fade-in'>
            <h3>{langContent.aboutMe}</h3>
            <h2>{langContent.title}</h2>
            <p>{langContent.introduction}</p>
            <p>{langContent.tools}</p>  
          </AnimatedSection>  
        </div>
      </div>

      <div className="about-me-new">
        <AnimatedSection animation='fade-in'>
          <img src={AboutMeImage2} alt={langContent.skills} className="about-image" />
        </AnimatedSection>  
        <div className="about-content-new">
          <AnimatedSection animation='fade-in'>
            <h3>{langContent.skills}</h3>
            <h2>{langContent.whatICanDo}</h2>
            <p>{langContent.learning}</p>
            <p>{langContent.approach}</p>  
          </AnimatedSection>  
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
