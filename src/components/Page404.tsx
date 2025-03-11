import { Link } from "react-router-dom";
import error404 from '.././img/404Error.jpg';

export const Page404 = () => {
  return (
    <div className="page-404-container">
      <p className="page-404-text">¡Oops! Página no encontrada</p>
      <p className="page-404-text">Parece que te has perdido...</p>
      <img
        src={error404}
        alt="Lost in movies"
        className="page-404-image"
      />
      <Link to="/" className="page-404-button">
        Volver al inicio
      </Link>
    </div>
  );
};

 
