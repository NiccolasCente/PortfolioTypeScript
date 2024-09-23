import React, { useRef } from 'react';
import { useLanguage } from '../Hooks/LanguageContext';

import { FaGithub } from 'react-icons/fa';

import '../../assets/Projects.css';
import TypeScriptIcon from '../../assets/MainIcons/TypeScriptIcon.png';
import ReactIcon from '../../assets/MainIcons/ReactIcon.webp';
import BootstrapIcon from '../../assets/MainIcons/BootstrapIcon.png';
import CarsVideo from '../../assets/SectionIcons/Cars/CarVideo.mp4';
import RecipesVideo from "../../assets/SectionIcons/Recipes/RecipesVideo.mp4";
import SantosHistorico from "../../assets/SectionIcons/Santos/SantosHistorico.mp4";

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
    icons: [ReactIcon, TypeScriptIcon, BootstrapIcon],
    codeUrl: 'https://github.com/NiccolasCente/CarRental',
    demoUrl: 'https://alugueseucarro.netlify.app/',
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
    icons: [ReactIcon, BootstrapIcon],
    codeUrl: 'https://github.com/NiccolasCente/ReceitasIniciantes',
    demoUrl: 'https://receitasiniciantes.netlify.app/',
  },
  {
    id: 3,
    title: {
      'pt-BR': 'Santos Histórico ⚽',
      'en': 'Santos History ⚽',
    },
    description: {
      'pt-BR': 'O site Santos Histórico é uma fanpage dedicada a contar a rica história do time, apresentando informações sobre os principais momentos, ídolos e conquistas.',
      'en': 'The Santos History site is a fan page dedicated to telling the rich history of the team, presenting information about key moments, idols, and achievements.',
    },
    videoUrl: SantosHistorico,
    icons: [ReactIcon, BootstrapIcon],
    codeUrl: 'https://github.com/NiccolasCente/Santos',
    demoUrl: 'https://santoshistorico.netlify.app/',
  },
];

const Projects: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="projects">
      <h2>Meus Projetos</h2>
      <p>Abaixo estão alguns dos projetos que desenvolvi.</p>
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
                Repositório <FaGithub />
              </a>
              <a href={project.demoUrl} target='_blank' rel="noopener noreferrer" className="button">Acessar Site</a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

const VideoComponent: React.FC<{ videoUrl: string }> = ({ videoUrl }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    videoRef.current?.pause();
    videoRef.current!.currentTime = 0;
  };

  return (
    <video
      src={videoUrl}
      className="project-video"
      muted
      loop
      ref={videoRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};

export default Projects;
