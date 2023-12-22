import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { apiReducer } from "./reducers/ApiSlice";

const rootReducer = combineReducers({
  apiReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispath = AppStore["dispatch"];
