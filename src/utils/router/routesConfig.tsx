import { createBrowserRouter } from "react-router-dom";
import Auth from "../../components/Auth";
import { GraphiQLPage } from "../../pages/GraphiQLPage";
import { LoginPage } from "../../pages/LoginPage";
import { MainPage } from "../../pages/MainPage";
import { NotFoundPage } from "../../pages/NotFoundPage";
import { RegistrationPage } from "../../pages/RegistrationPage";
import RootLayout from "../../components/RoorLayout";
import { NavRoutes } from "./routes";

export const routesConfig = createBrowserRouter([
  {
    path: NavRoutes.mainPagePath,
    element: <RootLayout />,
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
