import { Link } from "react-router-dom";
import { NavRoutes } from "../utils/router/routes";
import { logout } from "./forms/firebase/firebase";

export const Header = () => (
  <div>
    <h1>Header</h1>
    <div><Link to={NavRoutes.loginPagePath}>Login</Link></div>
    <Link to={NavRoutes.registrationPagePath}>Registration</Link>
    <button onClick={logout}>Выйти</button>
  </div>
);
