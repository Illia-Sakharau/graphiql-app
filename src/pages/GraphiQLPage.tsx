import { Link } from "react-router-dom";
import { logout } from "../components/forms/firebase/firebase";
import { NavRoutes } from "../utils/router/routes";

export const GraphiQLPage = () => (
  <div>
    <h1>GraphiQL Page</h1>
    <Link to={NavRoutes.mainPagePath}>mainPagePath</Link>
    <button onClick={logout}>Выйти</button>
  </div>
);
