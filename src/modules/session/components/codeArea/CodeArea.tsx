import { graphql, updateSchema } from "cm6-graphql";
import { GraphQLSchema } from "graphql";
import {
  Dispatch,
  FC,
  ReactElement,
  SetStateAction,
  useEffect,
  useRef,
} from "react";

import { json, jsonParseLinter } from "@codemirror/lang-json";
import { linter } from "@codemirror/lint";
import { aura } from "@uiw/codemirror-theme-aura";
import { useCodeMirror } from "@uiw/react-codemirror";

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
  const codeArea = useRef<HTMLDivElement>(null);

  const extensions = schema
    ? [graphql(schema)]
    : [json(), linter(jsonParseLinter())];

  const onChangeValue = (value: string) => {
    if (setValue) {
      setValue(value);
    }
  };

  const { setContainer, view } = useCodeMirror({
    extensions,
    theme: aura,
    value: value ?? "",
    container: codeArea.current,
    readOnly: readOnly ?? false,
    onChange(value) {
      onChangeValue(value);
    },
  });

  useEffect(() => {
    if (view && schema) {
      updateSchema(view, schema);
    }
  }, [schema, view]);

  useEffect(() => {
    if (codeArea.current) {
      setContainer(codeArea.current);
    }
  }, [codeArea, setContainer]);

  return <section className={classes.wrapper} ref={codeArea} />;
};

export default CodeArea;
