import { buildClientSchema, buildSchema, IntrospectionQuery } from "graphql";
import { FC, ReactElement, useEffect, useState } from "react";

import { RequestValue } from "../../../../types/graphQuery";
import CodeArea from "../codeArea/CodeArea";
import ExpandableZone from "../expandableZone/ExpandableZone";
import ToolsBar from "../toolsBar/ToolsBar";
import classes from "./style.module.scss";

type Props = {
  doc?: IntrospectionQuery | null;
  sendRequest: () => Promise<void>;
  requestValue: RequestValue;
};

const RequestZone: FC<Props> = ({
  doc,
  requestValue,
  sendRequest,
}): ReactElement => {
  const { query, setQuery, ...paramsValue } = requestValue;
  const [schema, setSchema] = useState(buildSchema("type Query"));

  useEffect(() => {
    if (doc) {
      setSchema(buildClientSchema(doc));
    }
    setSchema(buildSchema("type Query"));
  }, [doc]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.main}>
        <CodeArea schema={schema} value={query} setValue={setQuery} />
        <ToolsBar sendRequest={sendRequest} />
      </div>
      <ExpandableZone {...paramsValue} />
    </div>
  );
};

export default RequestZone;
