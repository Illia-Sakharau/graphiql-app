import { FC, ReactElement } from "react";

import PlayIcon from "../../../../assets/icons/play.svg?react";
import PrettifyIcon from "../../../../assets/icons/prettify.svg?react";
import { useGraphQuery } from "../../../../hooks/useGraphQuery";
import Button from "../../../../UI/button/Button";
import classes from "./style.module.scss";

const ToolsBar: FC = (): ReactElement => {
  const sendRequest = useGraphQuery();

  const runRequest = () => {
    sendRequest();
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
