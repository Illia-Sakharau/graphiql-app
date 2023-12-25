import { IntrospectionQuery } from "graphql";
import { FC, ReactElement, useState } from "react";

import { useGraphQuery } from "../../hooks/useGraphQuery";
import RequestZone from "./components/requestZone/RequestZone";
import ResponseZone from "./components/responseZone/ResponseZone";
import classes from "./style.module.scss";

const Session: FC = (): ReactElement => {
  const { request, sendRequest, response } = useGraphQuery();
  const [doc] = useState<IntrospectionQuery | null>(null);

  return (
    <div className={classes.session}>
      <RequestZone requestValue={request} sendRequest={sendRequest} doc={doc} />
      <ResponseZone value={response} />
    </div>
  );
};

export default Session;
