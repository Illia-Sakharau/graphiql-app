import { createBrowserRouter } from "react-router-dom";
import Auth from "../../pages/Auth";
import { GraphiQLPage } from "../../pages/GraphiQLPage";
import { LoginPage } from "../../pages/LoginPage";
import { MainPage } from "../../pages/MainPage";
import { NotFoundPage } from "../../pages/NotFoundPage";
import { RegistrationPage } from "../../pages/RegistrationPage";
import RootLayout from "../../pages/RoorLayout";
import { NavRoutes } from "./routes";
import { ErrorPage } from "../../pages/ErrorPage";

export const routesConfig = createBrowserRouter([
  {
    path: NavRoutes.mainPagePath,
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: NavRoutes.authPath,
        element: <Auth />,
        children: [
          {
            path: NavRoutes.loginPagePath,
            element: <LoginPage />,
          },
          {
            path: NavRoutes.registrationPagePath,
            element: <RegistrationPage />,
          },
        ],
      },
      {
        path: NavRoutes.graphiQL,
        element: <GraphiQLPage />,
      },
      {
        path: NavRoutes.notFoundPagePath,
        element: <NotFoundPage />,
      },
    ],
  },
]);
