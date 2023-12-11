import { Link } from "react-router-dom";
import { NavRoutes } from "../utils/router/routes";

export const MainPage = () => (
  <div>
    <h1>Main Page</h1>
    <Link to={NavRoutes.graphiQL}>graphiQL</Link>
  </div>
);
