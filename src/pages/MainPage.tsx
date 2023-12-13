import { Link } from "react-router-dom";
import { NavRoutes } from "../utils/router/routes";

export const MainPage = () => (
  <div>
    <h2>Main Page</h2>
    <Link to={NavRoutes.graphiQL}>graphiQL</Link>
  </div>
);
