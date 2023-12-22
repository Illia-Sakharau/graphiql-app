import { useEffect, useState } from "react";
import {
  IntrospectionObjectType,
  IntrospectionSchema,
  IntrospectionType,
} from "graphql";
import Types from "./Types";
import Queries from "./Queries";
import { getSchema } from "../getSchema";
import style from "./documentation.module.scss";
import { useLocalization } from "../../../../../utils/hooks/useLocalization";

const Documentation = () => {
  // const API_URL2 = 'https://rickandmortyapi.com/graphql';
  // const API_URL3 = 'https://countries.trevorblades.com';
  const url = "https://countries.trevorblades.com"; // тут вызвать АРI сохраненное

  const dictionary = useLocalization();
  const [openTypes, setOpenTypes] = useState<boolean>(false);
  const [openQueries, setOpenQueries] = useState<boolean>(false);
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
        <span>
          <button
            className={`${style.docs_link} ${style.docs_base}`}
            onClick={() => {
              setOpenTypes(!openTypes);
            }}
          >
            {dictionary.docs.types}
          </button>
          {!openTypes && <span className={style.docs_symbol}> ▼</span>}
        </span>

        {openTypes && (
          <div className={style.docs_nested}>
            <Types types={mainTypes as ReadonlyArray<IntrospectionType>} />
          </div>
        )}
        <span>
          <button
            className={`${style.docs_link} ${style.docs_base}`}
            onClick={() => {
              setOpenQueries(!openQueries);
            }}
          >
            {dictionary.docs.query}
          </button>
          {!openQueries && <span className={style.docs_symbol}> ▼</span>}
        </span>

        {openQueries && (
          <div className={style.docs_nested}>
            <Queries queries={queryType as IntrospectionObjectType} />
          </div>
        )}
      </div>
    )
  );
};

export default Documentation;
