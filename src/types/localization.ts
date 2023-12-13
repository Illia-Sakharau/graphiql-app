import en from "../localization/en.json";

export type LocalizationContextType = {
  setLanguage: () => void;
  translation: translationType;
  language: "en" | "ru";
};

export type translationType = typeof en;
