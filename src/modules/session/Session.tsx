import { FC, ReactElement } from "react";

import { useGraphQuery } from "../../hooks/useGraphQuery";
import RequestZone from "./components/requestZone/RequestZone";
import ResponseZone from "./components/responseZone/ResponseZone";
import classes from "./style.module.scss";

const Session: FC = (): ReactElement => {
  const { request, sendRequest, response } = useGraphQuery();

  return (
    <div className={classes.session}>
      <RequestZone requestValue={request} sendRequest={sendRequest} />
      <ResponseZone {...response} />
    </div>
  );
};

export default Session;
