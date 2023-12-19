import { FC, ReactElement } from "react";
import classes from "./style.module.scss";

type Props = {
  isEdidable?: boolean;
};

const CodeArea: FC<Props> = ({ isEdidable = true }): ReactElement => {
  return (
    <div className={classes.wrapper}>
      <p>
        {`//CodeArea. Change to real component
          //This CodeArea is ${isEdidable ? "edidable" : "not edidable"}`}
      </p>
    </div>
  );
};

export default CodeArea;
