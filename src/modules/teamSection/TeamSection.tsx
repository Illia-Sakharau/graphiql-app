import { FC, ReactElement } from "react";
import SectionWrapper from "../../UI/sectionWrapper/SectionWrapper";
import classes from "./style.module.scss";
import SectionHeader from "./components/header/SectionHeader";
import { DEVELOPERS_INFO } from "./constants";
import DeveloperCard from "./components/developerCard/DeveloperCard";
import { useLocalization } from "../../utils/hooks/useLocalization";

const TeamSection: FC = (): ReactElement => {
  const dictionary = useLocalization().team_section;

  return (
    <section className={classes.team}>
      <SectionWrapper className={classes[`team__wrapper`]}>
        <SectionHeader
          title={dictionary.title}
          subtitle={dictionary.subtitle}
        />
        <div className={classes.developers}>
          {DEVELOPERS_INFO.map((developer) => (
            <DeveloperCard key={developer.name} {...developer} />
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
};

export default TeamSection;
