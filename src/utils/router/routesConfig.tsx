import { GraphiQLPage } from "../../pages/GraphiQLPage";
import { LoginPage } from "../../pages/LoginPage";
import { MainPage } from "../../pages/MainPage";
import { NotFoundPage } from "../../pages/NotFoundPage";
import { RegistrationPage } from "../../pages/RegistrationPage";
import { NavRoutes } from "./routes";

export const routesConfig = [
  {
    path: NavRoutes.mainPagePath,
    element: <MainPage />,
  },
  {
    path: NavRoutes.loginPagePath,
    element: <LoginPage />,
  },
  {
    path: NavRoutes.registrationPagePath,
    element: <RegistrationPage />,
  },
  {
    path: NavRoutes.graphiQL,
    element: <GraphiQLPage />,
  },
  {
    path: NavRoutes.notFoundPagePath,
    element: <NotFoundPage />,
  },
];
