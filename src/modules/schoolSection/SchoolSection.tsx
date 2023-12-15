import { FC, ReactElement } from "react";
import SectionWrapper from "../../UI/sectionWrapper/SectionWrapper";
import classes from "./style.module.scss";
import { useLocalization } from "../../utils/hooks/useLocalization";
import RSS_LOGO from "../../assets/rss-logo-2.svg";

const SchoolSection: FC = (): ReactElement => {
  const dictionary = useLocalization();

  return (
    <section className={classes.school}>
      <SectionWrapper className={classes[`school__wrapper`]}>
        <a
          href="https://rs.school/"
          target="_blank"
          rel="noreferrer"
          className={classes["rss-logo"]}
        >
          <img src={RSS_LOGO} alt={dictionary.img_school_alt} />
        </a>
      </SectionWrapper>
    </section>
  );
};

export default SchoolSection;
