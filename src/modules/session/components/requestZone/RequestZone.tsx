import { FC, ReactElement } from "react";
import classes from "./style.module.scss";
import ExpandableZone from "../expandableZone/ExpandableZone";
import CodeArea from "../codeArea/CodeArea";
import ToolsBar from "../toolsBar/ToolsBar";

const RequestZone: FC = (): ReactElement => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.main}>
        <CodeArea />
        <ToolsBar />
      </div>
      <ExpandableZone />
    </div>
  );
};

export default RequestZone;
