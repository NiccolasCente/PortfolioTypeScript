import { useLanguage } from './LanguageContext';
import CurriculumPTBR from '../../assets/MainIcons/Niccolas Vinicius Cente Currículo.pdf';
import CurriculumEnglish from '../../assets/MainIcons/Curriculo Ingles.pdf'; 

const useDownloadResume = () => {
  const { language } = useLanguage(); 

  const downloadResume = () => {
    const url =
      language === 'pt-BR'
        ? CurriculumPTBR 
        : CurriculumEnglish;   
    
    const link = document.createElement('a');
    link.href = url;
    link.download = language === 'pt-BR' 
      ? 'Niccolas Cente Currículo PT-BR.pdf' 
      : 'Niccolas Cente Curriculum English.pdf'; 

    link.click();
  };

  return downloadResume;
};

export default useDownloadResume;
