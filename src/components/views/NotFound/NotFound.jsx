import { Link } from 'react-router-dom';
import SEO from '../../../seo/SEO';
import './NotFound.css';

function NotFound() {
  return (
    <>
      <SEO 
        title="404 - Página No Encontrada"
        description="Lo sentimos, la página que estás buscando no existe en Luz y Fuerza Córdoba."
        url="http://localhost:5173/404"
        image="https://tusitio.com/img/404-og-image.jpg"
      />

      <section className="notfound d-flex flex-column align-items-center justify-content-center text-center py-5">
        
        {/* Número 404 animado */}
        <h1 className="display-1 fw-bold animate__animated animate__bounceIn">
          404
        </h1>

        {/* Mensaje animado */}
        <p className="lead animate__animated animate__fadeInUp mt-3">
          La página que buscás no fue encontrada.
        </p>

        {/* Botón de regreso animado */}
        <Link 
          to="/" 
          className="btn btn-primary mt-4 animate__animated animate__lightSpeedInRight"
        >
          Volver al Inicio
        </Link>
        
      </section>
    </>
  );
}

export default NotFound;
