import { FC, ReactElement } from "react";
import classes from "./style.module.scss";
import RequestZone from "./components/requestZone/RequestZone";
import ResponseZone from "./components/responseZone/ResponseZone";

const Session: FC = (): ReactElement => {
  return (
    <div className={classes.session}>
      <RequestZone />
      <ResponseZone />
    </div>
  );
};

export default Session;
