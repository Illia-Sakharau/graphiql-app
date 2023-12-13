import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { NavRoutes } from "../utils/router/routes";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../components/forms/firebase/firebase";

const Auth = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) navigate(NavRoutes.graphiQL);
  }, [user]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default Auth;
