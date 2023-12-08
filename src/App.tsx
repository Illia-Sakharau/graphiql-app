import "./App.css";
import React from "react";
import { RouterProvider } from "react-router";
import { routesConfig } from "./utils/router/routesConfig";

function App() {
  return (
    <RouterProvider router={routesConfig} />
  )
}

export default App;
