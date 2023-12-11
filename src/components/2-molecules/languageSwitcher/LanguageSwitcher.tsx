import { useChangeLanguage } from "../../../utils/hooks/useChangeLanguage";
import classes from "./style.module.scss";
import { FC, ReactElement, useState } from "react";

const LANGUAGES = [ 'en', 'ru'];

type Props = {
  className?: string;
};

const LanguageSwitcher: FC<Props> = (props): ReactElement => {
  const className = props.className
    ? classes.wrapper + " " + props.className
    : classes.wrapper;

  const setLanguage = useChangeLanguage();
  const [currentLang, setCurrentLang] = useState<'en' | 'ru'>('en')

  const handleSwitch = () => {
    setCurrentLang(setLanguage());
  }
  

  return (
    <div className={className} onClick={handleSwitch}>
      {LANGUAGES.map((lang, i) => <>
        <div key={lang} className={`${classes.lang} ${lang===currentLang ? classes.active : ''}`}>{lang}</div>
        {i!==LANGUAGES.length-1 && <div key={lang} className={classes.devider}>/</div>}
      </>)}
    </div>
  );
};

export default LanguageSwitcher;
