import en from "../localization/en.json";

export type LocalizationContextType = {
  setLanguage: () => 'en' | 'ru';
  translation: translationType;
};

export type translationType = typeof en;
