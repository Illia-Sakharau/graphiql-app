import { FC, ReactElement } from "react";
import classes from "./style.module.scss";
import CodeArea from "../codeArea/CodeArea";

const ResponseZone: FC = (): ReactElement => {
  return (
    <div className={classes.wrapper}>
      <CodeArea isEdidable={false} />
    </div>
  );
};

export default ResponseZone;
