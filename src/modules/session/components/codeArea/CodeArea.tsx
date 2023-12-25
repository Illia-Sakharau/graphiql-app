import { graphql } from "cm6-graphql";
import { GraphQLSchema } from "graphql";
import { Dispatch, FC, ReactElement, SetStateAction } from "react";

import { json, jsonParseLinter } from "@codemirror/lang-json";
import { linter } from "@codemirror/lint";
import { aura } from "@uiw/codemirror-theme-aura";
import CodeMirror from "@uiw/react-codemirror";

import classes from "./style.module.scss";

type Props = {
  readOnly?: boolean;
  value: string;
  setValue?: Dispatch<SetStateAction<string>>;
  schema?: GraphQLSchema;
};

const CodeArea: FC<Props> = ({
  readOnly,
  value,
  schema,
  setValue,
}): ReactElement => {
  const extensions = schema
    ? [graphql(schema)]
    : [json(), linter(jsonParseLinter())];

  const onChangeValue = (value: string) => {
    if (setValue) {
      setValue(value);
    }
  };

  return (
    <div className={classes.wrapper}>
      <CodeMirror
        value={value ?? ""}
        theme={aura}
        readOnly={readOnly ?? false}
        extensions={extensions}
        onChange={(value) => onChangeValue(value)}
      />
    </div>
  );
};

export default CodeArea;
