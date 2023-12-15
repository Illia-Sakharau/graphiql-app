import { FC, ReactElement } from "react";
import SectionWrapper from "../../UI/sectionWrapper/SectionWrapper";
import classes from "./style.module.scss";
import Button from "../../UI/button/Button";
import { useLocalization } from "../../utils/hooks/useLocalization";
import { useNavigate } from "react-router-dom";
import { NavRoutes } from "../../utils/router/routes";

const HeroBanner: FC = (): ReactElement => {
  const dictionary = useLocalization().herro_banner;
  const navigate = useNavigate();
  const handleBtnClick = () => {
    navigate(NavRoutes.graphiQL);
  };

  return (
    <section className={classes.banner}>
      <SectionWrapper className={classes[`banner__wrapper`]}>
        <div className={classes.header}>
          <h2>G...QL</h2>
          <span>{dictionary.description}</span>
        </div>
        <Button
          btnStyle={"primary"}
          btnType={"rectangle"}
          onClick={handleBtnClick}
        >
          {dictionary["btn-text"]}
        </Button>
      </SectionWrapper>
    </section>
  );
};

export default HeroBanner;
