import { useEffect, useState } from "react";
import { IntrospectionSchema } from "graphql";
import { getSchema } from "../getSchema";
import style from "./documentation.module.scss";
import { useLocalization } from "../../../../../utils/hooks/useLocalization";
import TypesSection from "./TypesSection";
import { QueriesSection } from "./QueriesSection";

const Documentation = () => {
  // const API_URL2 = 'https://rickandmortyapi.com/graphql';
  // const API_URL3 = 'https://countries.trevorblades.com';
  const url = "https://rickandmortyapi.com/graphql"; // тут вызвать АРI сохраненное

  const dictionary = useLocalization();
  const [schema, setSchema] = useState<IntrospectionSchema | null>(null);
  const queryType = schema?.types.find(({ name }) => name === "Query");
  const mainTypes = schema?.types.filter(
    ({ name }) => name !== "Query" && !name.startsWith("__"),
  );

  useEffect(() => {
    (async () => {
      setSchema(await getSchema(url, dictionary.auth_messages));
    })();
  }, []);

  return (
    schema && (
      <div className={style.docs}>
        <TypesSection mainTypes={mainTypes} />
        <QueriesSection queryType={queryType} />
      </div>
    )
  );
};

export default Documentation;
