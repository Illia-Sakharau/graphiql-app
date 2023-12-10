import en from "../localization/en.json";

export type LocalizationContextType = {
  setLanguage: () => void;
  translation: translationType;
};

export type translationType = typeof en;
