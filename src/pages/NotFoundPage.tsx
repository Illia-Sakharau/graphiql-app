import { Link } from "react-router-dom";
import { NavRoutes } from "../utils/router/routes";

export const NotFoundPage = () => (
  <div>
    <h1>Not Found Page</h1>
    <p>Sorry, the page you requested was not found...</p>
    <Link to={NavRoutes.mainPagePath}>Go To Home</Link>
  </div>
);
