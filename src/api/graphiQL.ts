export const getResponse = async (
  body: string,
  variables: Record<string, unknown> = {},
  headers: Record<string, unknown> = {},
) => {
  const url = "https://rickandmortyapi.com/graphql";

  console.log(url, body);
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers },
    body: JSON.stringify({ query: body, variables }),
  });
  const statusCode = response.status;

  const { data, errors } = await response.json();

  return { data, errors, statusCode };
};

export const setOptions = (variablesValue: string, headersValue: string) => {
  let headers;
  let variables;

  try {
    variables = variablesValue ? JSON.parse(variablesValue) : {};
    headers = headersValue ? JSON.parse(headersValue) : {};
  } catch {
    //необходимо выбросить ошибку пользователю
  }

  return { variables, headers };
};
