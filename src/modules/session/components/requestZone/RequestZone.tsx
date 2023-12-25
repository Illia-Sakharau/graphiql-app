import { buildClientSchema, buildSchema } from "graphql";
import { FC, ReactElement, useEffect, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { useLocalization } from "../../../../hooks/useLocalization";
import { apiSlice } from "../../../../store/reducers/ApiSlice";
import { RequestValue } from "../../../../types/graphQuery";
import { getSchema } from "../../../asideWidget/components/docsContent/getSchema";
import CodeArea from "../codeArea/CodeArea";
import ExpandableZone from "../expandableZone/ExpandableZone";
import ToolsBar from "../toolsBar/ToolsBar";
import classes from "./style.module.scss";

type Props = {
  sendRequest: () => Promise<void>;
  requestValue: RequestValue;
};

const RequestZone: FC<Props> = ({
  requestValue,
  sendRequest,
}): ReactElement => {
  const dispatch = useAppDispatch();
  const dictionary = useLocalization();
  const { setSchema } = apiSlice.actions;

  const url = useAppSelector((state) => state.apiReducer.currentApi);
  const schema = useAppSelector((state) => state.apiReducer.schema);

  const { query, setQuery, ...paramsValue } = requestValue;
  const [graphQLSchema, setGraphQLSchema] = useState(buildSchema("type Query"));

  useEffect(() => {
    (async () => {
      const schema = await getSchema(url, dictionary.auth_messages);
      dispatch(setSchema(schema ?? null));
    })();
  }, [url]);

  useEffect(() => {
    if (schema) {
      setGraphQLSchema(buildClientSchema(schema));
    } else {
      setGraphQLSchema(buildSchema("type Query"));
    }
  }, [schema]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.main}>
        <CodeArea schema={graphQLSchema} value={query} setValue={setQuery} />
        <ToolsBar sendRequest={sendRequest} />
      </div>
      <ExpandableZone {...paramsValue} />
    </div>
  );
};

export default RequestZone;
