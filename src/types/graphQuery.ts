import { Dispatch, SetStateAction } from "react";

export type GraphQueryValue = {
  request: RequestValue;
  sendRequest: () => Promise<void>;
  isLoading: boolean;
  response: ResponseData;
};

export type RequestValue = QueryValue & HeadersValue & VariablesValue;

export type ParamsValue = HeadersValue & VariablesValue;

export type QueryValue = {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
};

export type HeadersValue = {
  headers: string;
  setHeaders: Dispatch<SetStateAction<string>>;
};

export type VariablesValue = {
  variables: string;
  setVariables: Dispatch<SetStateAction<string>>;
};

export type ResponseData = {
  data: unknown | null;
  errors: unknown | null;
  statusCode: number | null;
};
