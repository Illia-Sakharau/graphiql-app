import { FC, ReactElement } from "react";
import SectionWrapper from "../../UI/sectionWrapper/SectionWrapper";
import classes from "./style.module.scss";
import { useLocalization } from "../../utils/hooks/useLocalization";
import IMG_DESK from "../../assets/demo-desk.png";
import IMG_MOB from "../../assets/demo-mob.png";

const DemoSection: FC = (): ReactElement => {
  const dictionary = useLocalization().demo_section;

  return (
    <section className={classes.demo}>
      <SectionWrapper className={classes[`demo__wrapper`]}>
        <div className={classes.text}>
          <p>{dictionary.text_1_white}</p>
          <p className={classes.colored}>{dictionary.text_1_colored}</p>
        </div>
        <div className={classes["img-desk"]}>
          <img src={IMG_DESK} alt={dictionary.img_desk_alt} />
        </div>
      </SectionWrapper>
      <SectionWrapper className={classes[`demo__wrapper`]}>
        <div className={classes["img-mob"]}>
          <img src={IMG_MOB} alt={dictionary.img_mobile_alt} />
        </div>
        <div className={classes.text}>
          <p>{dictionary.text_2_white}</p>
          <p className={classes.colored}>{dictionary.text_2_colored}</p>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default DemoSection;
