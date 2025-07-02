import React from 'react';
import AnimatedSection from '../Hooks/AnimatedSection';
import { useLanguage } from '../Hooks/LanguageContext';

import '../../assets/AboutMe.css';
import '../../assets/GlobalStyle.css';

import AboutMeImage from "../../assets/SectionIcons/AboutImage.webp";
import AboutMeImage2 from "../../assets/SectionIcons/AboutImage2.jpg";
import AboutMeImage3 from "../../assets/SectionIcons/AboutImage3.png";
import AboutMeImage4 from "../../assets/SectionIcons/AboutImage4.jpg";

const AboutMe: React.FC = () => {
  const { language } = useLanguage();

  const translations = {
    'pt-BR': {
      aboutMe: "Sobre Mim",
      title: "Profissional em Transição para Cyber Security | São Paulo, Brasil",
      introduction: (
        <>
          Olá, me chamo <strong>Niccolas Cente</strong>, tenho <strong>22 anos</strong>, sou formado em <strong>Sistemas de Informação</strong> e atualmente estou cursando <strong>Segurança da Informação</strong>. <br />
          Estou em transição de carreira para a área de <strong>Cyber Security</strong>, buscando aliar minha base em desenvolvimento com práticas modernas de segurança da informação.
        </>
      ),
      tools: (
        <>
          Tenho experiência com <strong>Desenvolvimento Front-end</strong>, utilizando <strong style={{ color: "#00BFFF" }}>React/Vite.js</strong>, <strong style={{ color: "#00BFFF" }}>TypeScript</strong>, e <strong style={{ color: "#BA55D3" }}>Bootstrap</strong>. <br />
          Também já trabalhei com <strong>WordPress</strong> e <strong>Elementor</strong>, entregando soluções responsivas e bem estruturadas. <br />
          Atualmente, foco meus estudos e minha evolução profissional em <strong>Cyber Security</strong> e <strong>Infraestrutura de Redes</strong>.
        </>
      ),
      skills: "Minhas Habilidades e Serviços",
      whatICanDo: "O que eu posso fazer",
      learning: (
        <>
          Tenho estudado e aplicado na prática os princípios de <strong>Zero Trust</strong>, com foco em <strong>identidade como perímetro</strong> e <strong>segmentação de acesso</strong>. <br />
          Utilizo soluções como <strong>Okta</strong> para <strong>gerenciamento de identidade (IdP)</strong> e <strong>Microsoft Authenticator</strong> para <strong>autenticação multifator (MFA)</strong>. <br />
          Tenho familiaridade com tecnologias como <strong>Zscaler</strong> para <strong>ZTNA (Zero Trust Network Access)</strong>, substituindo VPNs tradicionais e permitindo acessos mais seguros e controlados. <br />
          Realizo a <strong>concessão e revogação de acessos</strong> baseada em <strong>nível de cargo</strong> e necessidades específicas, com registros e prints para fins de <strong>auditoria</strong> e <strong>compliance</strong>. <br />
          Também atuo com suporte em <strong>criptografia</strong>, auxiliando usuários com problemas no <strong>BitLocker</strong>, garantindo a <strong>confidencialidade</strong> e <strong>integridade</strong> das informações.
        </>
      ),
      approach: (
        <>
          Com uma base sólida em <strong>desenvolvimento front-end</strong> e experiência prática em <strong>infraestrutura, suporte e segurança</strong>, estou construindo um perfil completo voltado para <strong>Cyber Security</strong>. <br />
          Tenho uma abordagem moderna e prática, baseada nos pilares de <strong>confidencialidade</strong>, <strong>integridade</strong> e <strong>disponibilidade</strong> da informação, alinhada com modelos como <strong>Zero Trust</strong>.
        </>
      )
    },
    'en': {
      aboutMe: "About Me",
      title: "Career-Changing Cyber Security Professional | São Paulo, Brazil",
      introduction: (
        <>
          Hi, I'm <strong>Niccolas Cente</strong>, 22 years old, graduated in <strong>Information Systems</strong> and currently studying <strong>Information Security</strong>. <br />
          I am currently transitioning into the <strong>Cyber Security</strong> field, combining my development background with my passion for protecting digital assets.
        </>
      ),
      tools: (
        <>
          I have experience in <strong>Front-End Development</strong> using <strong style={{ color: "#00BFFF" }}>React/Vite.js</strong>, <strong style={{ color: "#00BFFF" }}>TypeScript</strong>, and <strong style={{ color: "#BA55D3" }}>Bootstrap</strong>. <br />
          I also worked with <strong>WordPress</strong> and <strong>Elementor</strong>, delivering responsive and visually engaging solutions. <br />
          Nowadays, I’m focused on improving my skills in <strong>Cyber Security</strong> and <strong>Network Infrastructure</strong>.
        </>
      ),
      skills: "My Skills and Services",
      whatICanDo: "What I Can Do",
      learning: (
        <>
          I have been learning and applying <strong>Zero Trust</strong> principles, focusing on <strong>identity as the new perimeter</strong> and <strong>access segmentation</strong>. <br />
          I work with tools like <strong>Okta</strong> for <strong>Identity Provider (IdP)</strong> services and <strong>Microsoft Authenticator</strong> for <strong>Multi-Factor Authentication (MFA)</strong>. <br />
          I also have experience with technologies such as <strong>Zscaler</strong> for <strong>ZTNA (Zero Trust Network Access)</strong>, enabling secure access without relying on traditional VPNs. <br />
          I handle <strong>access provisioning and revocation</strong> based on <strong>employee job levels</strong>, maintaining records (including screenshots) for <strong>auditing</strong> and <strong>compliance</strong>. <br />
          Additionally, I provide support in <strong>encryption management</strong>, helping users solve issues related to <strong>BitLocker</strong>, ensuring <strong>data confidentiality</strong> and <strong>integrity</strong>.
        </>
      ),
      approach: (
        <>
          With a solid background in <strong>front-end development</strong> and practical experience in <strong>infrastructure, support, and security</strong>, I'm building a well-rounded profile focused on <strong>Cyber Security</strong>. <br />
          I bring a modern and hands-on approach, aligned with the principles of <strong>confidentiality</strong>, <strong>integrity</strong>, and <strong>availability</strong>, following <strong>Zero Trust</strong> models.
        </>
      )
    }
  };

  const langContent = translations[language] || translations['pt-BR'];

  return (
    <section id="sobre" className="about-me-section">

      {/* Seção 1 - Introdução */}
      <div className="about-me">
        <AnimatedSection animation='fade-in'>
          <img src={AboutMeImage} alt={langContent.aboutMe} className="about-image" />
        </AnimatedSection>
        <div className="about-content">
          <AnimatedSection animation='fade-in'>
            <h3>{langContent.aboutMe}</h3>
            <h2>{langContent.title}</h2>
            <p>{langContent.introduction}</p>
          </AnimatedSection>
        </div>
      </div>

      {/* Seção 2 - Ferramentas */}
      <div className="about-me-new">
        <AnimatedSection animation='fade-in'>
          <img src={AboutMeImage2} alt="Ferramentas" className="about-image" />
        </AnimatedSection>
        <div className="about-content-new">
          <AnimatedSection animation='fade-in'>
            <h3>Tech Stack</h3>
            <h2>Ferramentas que utilizo</h2>
            <p>{langContent.tools}</p>
          </AnimatedSection>
        </div>
      </div>

      {/* Seção 3 - Zero Trust */}
      <div className="about-me">
        <AnimatedSection animation='fade-in'>
          <img src={AboutMeImage3} alt="Zero Trust" className="about-image" />
        </AnimatedSection>
        <div className="about-content">
          <AnimatedSection animation='fade-in'>
            <h3>{langContent.skills}</h3>
            <h2>{langContent.whatICanDo}</h2>
            <p>{langContent.learning}</p>
          </AnimatedSection>
        </div>
      </div>

      {/* Seção 4 - Abordagem Profissional */}
      <div className="about-me-new">
        <AnimatedSection animation='fade-in'>
          <img src={AboutMeImage4} alt="Abordagem" className="about-image" />
        </AnimatedSection>
        <div className="about-content-new">
          <AnimatedSection animation='fade-in'>
            <h3>Perfil Profissional</h3>
            <h2>Minha Abordagem</h2>
            <p>{langContent.approach}</p>
          </AnimatedSection>
        </div>
      </div>

    </section>
  );
};

export default AboutMe;
