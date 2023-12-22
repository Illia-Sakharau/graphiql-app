import { getIntrospectionQuery } from "graphql";
import { authMessagesType } from "../../../../types/localization";
import { showToastMessage } from "../../../forms/util/showToastMessage";

export const getSchema = async (url: string, dictionary: authMessagesType) => {
  try {
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

    return schema
  } catch (e) {
    showToastMessage(dictionary.docs, "red");
  }
};
