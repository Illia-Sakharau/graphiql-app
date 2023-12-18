import { FC, ReactElement } from "react";
import SectionWrapper from "../../UI/sectionWrapper/SectionWrapper";
import classes from "./style.module.scss";
import SectionHeader from "./components/header/SectionHeader";
import { DEVELOPERS_INFO } from "./constants";
import { useLocalization } from "../../utils/hooks/useLocalization";
import { motion } from "framer-motion";
import { MDeveloperCard } from "./components/developerCard/DeveloperCard";

const topAnimation = {
  hiden: {
    y: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const TeamSection: FC = (): ReactElement => {
  const dictionary = useLocalization().team_section;

  return (
    <motion.section
      initial="hiden"
      whileInView="visible"
      viewport={{ amount: 0.3, once: true }}
      className={classes.team}
    >
      <SectionWrapper className={classes[`team__wrapper`]}>
        <SectionHeader
          title={dictionary.title}
          subtitle={dictionary.subtitle}
        />
        <div className={classes.developers}>
          {DEVELOPERS_INFO.map((developer, i) => (
            <MDeveloperCard
              custom={i}
              variants={topAnimation}
              key={developer.name}
              {...developer}
            />
          ))}
        </div>
      </SectionWrapper>
    </motion.section>
  );
};

export default TeamSection;
