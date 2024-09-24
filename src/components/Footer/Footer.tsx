import React from 'react';
import '../../assets/Footer.css';
import { FaMapMarkerAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useLanguage } from '../Hooks/LanguageContext';
import AnimatedSection from '../Hooks/AnimatedSection';

const Footer: React.FC = () => {
  const { language } = useLanguage();

  const translations = {
    'pt-BR': {
      contact: 'CONTATO',
      subtitle: 'Me chame para conversarmos:',
      location: 'Localização',
      email: 'Email',
      emailAddress: 'niccolas.dev@hotmail.com',
      copyright: '© 2024. Todos os direitos reservados.',
    },
    'en': {
      contact: 'CONTACT',
      subtitle: 'Feel free to reach out:',
      location: 'Location',
      email: 'Email',
      emailAddress: 'niccolas.dev@hotmail.com',
      copyright: '© 2024. All rights reserved.',
    }
  };

  

  return (
    <footer id='contatos' className="footer">
      <div className="footer-container">
        <div className="footer-contact-section">
          <AnimatedSection animation="fade-in">
            <h3 className="footer-heading">{translations[language].contact}</h3>
          </AnimatedSection>
          <AnimatedSection animation="fade-in">
            <h2 className="footer-subheading">{translations[language].subtitle}</h2>
          </AnimatedSection>

          <div className="footer-contact-info">
            <AnimatedSection animation="fade-in">
              <div className="footer-contact-item">
                <FaMapMarkerAlt className="footer-icon" />
                <div>
                  <h4>{translations[language].location}</h4>
                  <span>São Paulo, Brazil</span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in">
              <div className="footer-contact-item">
                <FaEnvelope className="footer-icon" />
                <div>
                  <h4>{translations[language].email}</h4>
                  <a href="mailto:niccolas.dev@hotmail.com">
                    <span>{translations[language].emailAddress}</span>
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        <div className="footer-bottom">
          <AnimatedSection animation="fade-in">
            <p className="footer-copyright">
              {translations[language].copyright}
            </p>
          </AnimatedSection>
          <div className="footer-iconsWrapper">
            <AnimatedSection animation="fade-in">
              <a href="https://www.linkedin.com/in/niccolas-cente-ba989b23b/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="footer-icon" />
              </a>
            </AnimatedSection>
            <AnimatedSection animation="fade-in">
              <a href="https://github.com/NiccolasCente" target="_blank" rel="noopener noreferrer">
                <FaGithub className="footer-icon" />
              </a>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
