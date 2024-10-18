import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  //   isRouteErrorResponse(error);

  return (
    <>
      <h1>Ops... qualcosa è andato storto</h1>
      <p>
        {isRouteErrorResponse(error)
          ? "Pagina nno trovata"
          : "Errore inaspettato"}
      </p>
      <hr />
      <Link to="/">Torna alla home</Link>
    </>
  );
};

export default ErrorPage;
