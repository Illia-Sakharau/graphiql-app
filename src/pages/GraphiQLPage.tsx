
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { NavRoutes } from "../utils/router/routes";
import { useAppSelector } from "../hooks/redux-hooks";

export const GraphiQLPage = () => {
  const navigate = useNavigate();
  const isLogged = useAppSelector((state) => state.user.isLogged)

  useEffect(() => {
    if (!isLogged) navigate(NavRoutes.loginPagePath);
  }, [isLogged, navigate]);

  return (
    <div>
      <h1>GraphiQL Page</h1>
    </div>
  )
}


