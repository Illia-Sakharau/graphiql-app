import Button from "../../../../UI/button/Button";
import classes from "./style.module.scss";
import { FC, ReactElement } from "react";

import PlayIcon from "../../../../assets/icons/play.svg?react";
import PrettifyIcon from "../../../../assets/icons/prettify.svg?react";

const ToolsBar: FC = (): ReactElement => {
  const runRequest = () => {
    console.log("RUN");
  };
  const prettify = () => {
    console.log("Prettify");
  };

  return (
    <div className={classes.bar}>
      <Button btnStyle={"primary"} btnType={"round"} onClick={runRequest}>
        <PlayIcon />
      </Button>
      <Button btnStyle={"onBlack"} btnType={"round"} onClick={prettify}>
        <PrettifyIcon />
      </Button>
    </div>
  );
};

export default ToolsBar;
