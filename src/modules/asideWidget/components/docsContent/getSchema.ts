import { getIntrospectionQuery } from "graphql";

export const getSchema = async (url: string) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: getIntrospectionQuery(),
    }),
  });
  const result = await res.json();
  const schema = result.data.__schema;
  return schema;
};
