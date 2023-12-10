import { ErrorResponse, useRouteError } from "react-router-dom";

export const ErrorPage = () => {

  const error = useRouteError() as ErrorResponse;
  console.error(error);

  return (
    <div id="error-page">
      <h2>Oops!</h2>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>

        <i>{error instanceof Error ? error.message : error.statusText}</i>
      </p>
    </div>
  )
}
