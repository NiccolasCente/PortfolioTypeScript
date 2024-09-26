import React from 'react';
import useDownloadResume from '../Hooks/useDownloadResume.ts';
import { useLanguage } from '../Hooks/LanguageContext';
import { FaFileAlt } from 'react-icons/fa'; 
import "../../assets/Main.css";
import "../../assets/GlobalStyle.css";

const CurriculoComponent: React.FC = () => {
  const downloadResume = useDownloadResume();
  const { language } = useLanguage(); 

  const btnStyle = language === 'pt-BR' ? 'button light-mode' : 'button dark-mode';

  return (
    <div className="curriculo-container">
      <h2>Meu Currículo</h2>
      <button className={btnStyle} onClick={downloadResume} style={{ marginTop: '20px', display: 'flex', alignItems: 'center' }}>
        <FaFileAlt style={{ marginRight: '8px' }} /> 
        {language === 'pt-BR' ? 'Baixar Currículo' : 'Download Resume'}
      </button>
    </div>
  );
};

export default CurriculoComponent;
