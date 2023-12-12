import { Link } from "react-router-dom";
import { NavRoutes } from "../utils/router/routes";

export const NotFoundPage = () => (
  <div>
    <h2>Not Found Page</h2>
    <p>Sorry, the page you requested was not found...</p>
    <Link to={NavRoutes.mainPagePath}>Go To Home</Link>
  </div>
);
