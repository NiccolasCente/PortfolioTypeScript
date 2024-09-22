import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from './LanguageContext'; 
import '../../assets/LanguageToggle.css'; 

const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false); 

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="language-toggle">
      <div onClick={handleToggle} style={{ cursor: 'pointer', position: 'relative' }}>
        <FontAwesomeIcon icon={faLanguage} size="lg" />
      </div>

      {isOpen && (
        <div className="language-options">
          <div
            className={`language-option ${language === 'pt-BR' ? 'active' : ''}`}
            onClick={() => toggleLanguage('pt-BR')}
          >
            PT-BR
          </div>
          <div
            className={`language-option ${language === 'en' ? 'active' : ''}`}
            onClick={() => toggleLanguage('en')}
          >
            English
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageToggle;
