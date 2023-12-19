import { FC, ReactElement } from "react";
import classes from "./style.module.scss";
import ArrowIcon from "../../../../assets/icons/arrow-up.svg?react";
import Button from "../../../../UI/button/Button";

type Props = {
  isVariablesActive: boolean;
  isHeadersActive: boolean;
  expendVariables: () => void;
  expendHeaders: () => void;
  switchIsExpande: () => void;
  isExpande: boolean;
};

const ExZoneHeader: FC<Props> = ({
  isVariablesActive,
  isHeadersActive,
  expendVariables,
  expendHeaders,
  switchIsExpande,
  isExpande,
}): ReactElement => {
  return (
    <div className={classes.header}>
      <div className={classes["btn-bar"]}>
        <Button
          btnStyle={"onBlack"}
          btnType={"rectangle"}
          active={isExpande && isVariablesActive}
          onClick={expendVariables}
        >
          Variables
        </Button>
        <Button
          btnStyle={"onBlack"}
          btnType={"rectangle"}
          active={isExpande && isHeadersActive}
          onClick={expendHeaders}
        >
          Headers
        </Button>
      </div>
      <Button
        btnStyle={"onBlack"}
        btnType={"round"}
        onClick={switchIsExpande}
        className={isExpande ? classes.versa : ""}
      >
        <ArrowIcon />
      </Button>
    </div>
  );
};

export default ExZoneHeader;
