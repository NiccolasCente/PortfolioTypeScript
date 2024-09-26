import { useLanguage } from './LanguageContext';
import CurriculumPTBR from '../../assets/MainIcons/Niccolas Vinicius Cente Currículo.pdf';
import CurriculumEnglish from '../../assets/MainIcons/Curriculo Ingles.pdf'; 

const useDownloadResume = () => {
  const { language } = useLanguage(); 

  const downloadResume = async () => {
    const url = 
      language === 'pt-BR'
        ? CurriculumPTBR
        : CurriculumEnglish;

    const response = await fetch(url);
    const blob = await response.blob();

    const link = document.createElement('a');
    const objectUrl = URL.createObjectURL(blob);
    link.href = objectUrl;

    link.download = language === 'pt-BR' 
      ? 'Niccolas Cente Currículo PT-BR.pdf'
      : 'Niccolas Cente Curriculum English.pdf'; 

    link.click();

    URL.revokeObjectURL(objectUrl);
  };

  return downloadResume;
};

export default useDownloadResume;
