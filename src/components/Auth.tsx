import { Outlet, useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/redux-hooks";
import { useEffect } from "react";
import { NavRoutes } from "../utils/router/routes";

const Auth = () => {
  const navigate = useNavigate();
  const isLogged = useAppSelector((state) => state.user.isLogged);

  useEffect(() => {
    if (isLogged) navigate(NavRoutes.graphiQL);
  }, [navigate, isLogged]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default Auth;
