import { useState } from "react";

import { getResponse, setOptions } from "../api/graphiQL";
import { GraphQueryValue, ResponseData } from "../types/graphQuery";

export const useGraphQuery = (): GraphQueryValue => {
  const [query, setQuery] = useState("");
  const [headersValue, setHeaders] = useState("");
  const [variablesValue, setVariables] = useState("");
  const [response, setResponse] = useState<ResponseData>({
    data: null,
    errors: null,
    statusCode: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = async () => {
    if (!query) {
      //необходимо выбросить ошибку пользователю
    }

    const { variables, headers } = setOptions(variablesValue, headersValue);
    setIsLoading(true);
    try {
      const { data, errors, statusCode } = await getResponse(
        query,
        variables,
        headers
      );
      console.log(data, statusCode);
      setResponse({ data, errors, statusCode });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    request: {
      query,
      setQuery,
      headers: headersValue,
      setHeaders,
      variables: variablesValue,
      setVariables,
    },
    sendRequest,
    isLoading,
    response,
  };
};
