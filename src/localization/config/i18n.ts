import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from '../language/en.json';
import de from '../language/de.json';
import fr from '../language/fr.json';
import es from '../language/es.json';

const getDeviceLanguage = 'en'
function formatLanguageResource(data: object) {
  return Object.fromEntries(
    Object.entries(data).map(([key, value]) => [key, {translation: value}]),
  );
}
i18n.use(initReactI18next).init({
  resources: formatLanguageResource({en, de, fr, es}),
  lng: getDeviceLanguage,
  fallbackLng: 'en',
  compatibilityJSON: 'v3',
  interpolation: {
    escapeValue: false,
    nestingOptionsSeparator: '.',
  },
});
export default i18n;
