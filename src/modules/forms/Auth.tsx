import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { NavRoutes } from "../../utils/router/routes";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../api/firebase";
import classes from "./auth.module.scss";
import { useLocalization } from "../../utils/hooks/useLocalization";

const Auth = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const dictionary = useLocalization();

  useEffect(() => {
    if (user) navigate(NavRoutes.graphiQL);
  }, [user]);

  return (
    <div className={classes.login}>
      <nav className={classes.navbar}>
        <NavLink
          to={NavRoutes.loginPagePath}
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          {dictionary.navigation.login}
        </NavLink>
        <NavLink
          to={NavRoutes.registrationPagePath}
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          {dictionary.navigation.registration}
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Auth;
