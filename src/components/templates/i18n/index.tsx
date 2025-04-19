import '../../../i18n'; // i18n 초기화 불러오기
import { useTranslation } from 'react-i18next';

const I18nTemplateComponent = () => {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    const newLang = i18n.language === 'ko' ? 'en' : 'ko';
    i18n.changeLanguage(newLang);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{t('welcome')}</h1>
      <button onClick={toggleLang}>{t('change_lang')}</button>
    </div>
  );
};

export default I18nTemplateComponent;