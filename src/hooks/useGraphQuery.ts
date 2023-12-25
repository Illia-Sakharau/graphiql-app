import { useState } from "react";

import { createBody, createHeaders, getResponse } from "../api/graphiQL";
import { showToastMessage } from "../modules/forms/util/showToastMessage";
import { GraphQueryValue, ResponseData } from "../types/graphQuery";
import { useAppSelector } from "./redux";
import { useLocalization } from "./useLocalization";

export const useGraphQuery = (): GraphQueryValue => {
  const dictionary = useLocalization();
  const url = useAppSelector((state) => state.apiReducer.currentApi);

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
      showToastMessage(dictionary.empty_body, "red");
    }

    if (!url) {
      showToastMessage(dictionary.empty_url, "red");
    }

    setIsLoading(true);
    try {
      const headers = createHeaders(headersValue);
      const body = createBody(query, variablesValue);

      if (body) {
        const { data, errors, statusCode } = await getResponse(
          url,
          body,
          headers,
        );

        setResponse({ data, errors, statusCode });
      }
    } catch (error) {
      if (error instanceof SyntaxError) {
        showToastMessage(error.message, "red");
      }
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
