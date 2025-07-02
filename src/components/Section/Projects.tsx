import React from 'react';
import { useLanguage } from '../Hooks/LanguageContext';
import { FaGithub } from 'react-icons/fa';
import '../../assets/Projects.css';

import TypeScriptIcon from '../../assets/MainIcons/TypeScriptIcon.png';
import ReactIcon from '../../assets/MainIcons/ReactIcon.webp';
import ViteIcon from '../../assets/MainIcons/Vite.js.png';
import BootstrapIcon from '../../assets/MainIcons/BootstrapIcon.png';

import CarsVideo from '../../assets/SectionIcons/Cars/CarVideo.mp4';
import RecipesVideo from "../../assets/SectionIcons/Recipes/RecipesVideo.mp4";
import Bordado from "../../assets/SectionIcons/Bordado/Bordado.mp4";

import WordPress from "../../assets/SectionIcons/WordPress/WordPress.mp4";
import WordPressIcon from "../../assets/SectionIcons/word.png";
import ElementorIcon from "../../assets/SectionIcons/elementor-icon.webp";
import HTML5Icon from "../../assets/MainIcons/HTML5Icon.png";
import CSS3Icon from "../../assets/MainIcons/CSS3Icon.webp";

const projects = [
  {
    id: 1,
    title: {
      'pt-BR': 'Alugue Seu Carro  🚗',
      'en': 'Rent Your Car  🚗',
    },
    description: {
      'pt-BR': 'Um site de aluguel de carros é uma plataforma online que permite aos usuários alugar carros para uso pessoal ou comercial. O site fornece uma interface para pesquisar, comparar e reservar carros.',
      'en': 'A car rental website is an online platform that allows users to rent cars for personal or commercial use. The site provides an interface to search, compare, and book cars.',
    },
    videoUrl: CarsVideo,
    icons: [ReactIcon, ViteIcon, TypeScriptIcon, BootstrapIcon],
    codeUrl: 'https://github.com/NiccolasCente/CarRental',
    demoUrl: 'https://alugueseucarro.netlify.app/',
    buttons: {
      code: {
        'pt-BR': 'Repositório',
        'en': 'Repository',
      },
      demo: {
        'pt-BR': 'Acessar Site',
        'en': 'Access Site',
      },
    },
  },
  {
    id: 2,
    title: {
      'pt-BR': 'Receitas Iniciantes  🍲',
      'en': 'Beginner Recipes  🍲',
    },
    description: {
      'pt-BR': 'Receitas para iniciantes é uma plataforma online criada para ajudar pessoas com neurodivergências, oferecendo um espaço acessível para quem está começando a aprender a cozinhar.',
      'en': 'Beginner Recipes is an online platform created to help people with neurodivergences, providing an accessible space for those starting to learn how to cook.',
    },
    videoUrl: RecipesVideo,
    icons: [ReactIcon, ViteIcon, BootstrapIcon],
    codeUrl: 'https://github.com/NiccolasCente/ReceitasIniciantes',
    demoUrl: 'https://receitasiniciantes.netlify.app/',
    buttons: {
      code: {
        'pt-BR': 'Repositório',
        'en': 'Repository',
      },
      demo: {
        'pt-BR': 'Acessar Site',
        'en': 'Access Site',
      },
    },
  },
  {
    id: 3,
    title: {
      'pt-BR': 'Miriam Bordados ✂️',
      'en': 'Santos History ✂️',
    },
    description: {
      'pt-BR': 'Site desenvolvido para uma profissional autônoma especializada em bordados personalizados. A plataforma permite exibir seus produtos feitos à mão, com foco em uma experiência visual agradável, responsiva e voltada à divulgação de serviços artesanais.',
      'en': 'Website developed for a self-employed professional specialized in personalized embroidery. The platform showcases her handmade products, focusing on a pleasant and responsive user experience designed to promote artisanal services.',
    },
    videoUrl: Bordado,
    icons: [ReactIcon, ViteIcon, TypeScriptIcon, BootstrapIcon],
    codeUrl: 'https://github.com/NiccolasCente/BordadosType',
    demoUrl: 'https://miriamrosabordados.netlify.app/',
    buttons: {
      code: {
        'pt-BR': 'Repositório',
        'en': 'Repository',
      },
      demo: {
        'pt-BR': 'Acessar Site',
        'en': 'Access Site',
      },
    },
  },
  {
    id: 4,
    title: {
      'pt-BR': 'Ip Dermatologia',
      'en': 'Ip Dermatology',
    },
    description: {
      'pt-BR': 'O site da Clínica de Dermatologia foi desenvolvido para apresentar os serviços e tratamentos oferecidos pela clínica. Meu amigo, que trabalha lá, solicitou minha ajuda para construir o site. Utilizamos o WordPress para gerenciar os plugins necessários e o Elementor para a estilização, junto com HTML5 e CSS3 para garantir um design funcional e moderno.',
      'en': 'The Dermatology Clinic website was created to showcase the services and treatments offered by the clinic. My friend, who works there, asked for my help in building the site. We used WordPress to manage the necessary plugins and Elementor for styling, along with HTML5 and CSS3 to ensure a functional and modern design.',
    },
    videoUrl: WordPress,
    icons: [ WordPressIcon, ElementorIcon, HTML5Icon, CSS3Icon],
    demoUrl: 'https://ipdermatologia.com.br/',
    buttons: {
      code: {
        'pt-BR': 'Repositório',
        'en': 'Repository',
      },
      demo: {
        'pt-BR': 'Acessar Site',
        'en': 'Access Site',
      },
    },
  },
];

const sectionTexts = {
  'pt-BR': {
    title: 'Meus Projetos',
    description: 'Abaixo estão alguns dos projetos que desenvolvi.',
  },
  'en': {
    title: 'My Projects',
    description: 'Below are some of the projects I have developed.',
  },
};

const Projects: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section id='projetos' className="projects">
      <h2>{sectionTexts[language].title}</h2>
      <p>{sectionTexts[language].description}</p>
      {projects.map(project => (
        <div key={project.id} className="project-box">
          <VideoComponent videoUrl={project.videoUrl} />
          <div className="project-info">
            <h3>{project.title[language]}</h3>
            <p>{project.description[language]}</p>
            <div className="project-languages">
              {project.icons.map((icon, idx) => (
                <img key={idx} src={icon} alt={`Ícone ${idx + 1}`} className="language-icon" />
              ))}
            </div>
            <div className="project-buttons">
              <a href={project.codeUrl} target='_blank' rel="noopener noreferrer" className="button">
                {project.buttons.code[language]} <FaGithub />
              </a>
              <a href={project.demoUrl} target='_blank' rel="noopener noreferrer" className="button">
                {project.buttons.demo[language]}
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

const VideoComponent: React.FC<{ videoUrl: string }> = ({ videoUrl }) => {
  return (
    <video
      src={videoUrl}
      className="project-video"
      muted
      loop
      autoPlay
      playsInline
    />
  );
};

export default Projects;
