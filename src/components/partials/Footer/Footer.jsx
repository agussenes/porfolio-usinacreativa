import { Link } from 'react-router-dom';
import './Footer.css'; // Estilos propios

function Footer() {
  return (
    <footer className="text-white pt-5 pb-4">
      <div className="container">
        <div className="row gy-4">

          {/* Columna 1: Logo + Descripción */}
          <div className="col-md-5">
            <div className="d-flex align-items-center mb-3">
              <img
                src="/img/identidad/logoUsina.webp"
                alt="Logo Sindicato de Luz y Fuerza de Córdoba"
                height="50"
                className="me-2"
                loading="lazy"
              />
            </div>
            <p className="text-light small">
              Desde nuestro sindicato hacemos llegar a nuestros asociados y a la comunidad en general todas las noticias relacionadas al sector, de forma ágil y democrática.
              <br />
              <Link to="/contacto" className="text-info text-decoration-none">Contáctenos!</Link>
            </p>
          </div>

          {/* Columna 2: Contacto */}
          <div className="col-md-4">
            <h5 className="fw-bold">Contacto</h5>
            <ul className="list-unstyled text-light small">
              <li className="mb-2">
                <i className="bi bi-geo-alt-fill me-2"></i> Dean Funes 672. Córdoba
              </li>
              <li>
                <i className="bi bi-envelope-fill me-2"></i> prensaluzyfuerza.cba@gmail.com
              </li>
            </ul>

            {/* Redes Sociales */}
            <div className="mt-3">
              <a href="#" className="text-light me-3 redesSo"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-light me-3 redesSo"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-light me-3 redesSo"><i className="bi bi-youtube"></i></a>
              <a href="#" className="text-light redesSo"><i className="bi bi-instagram"></i></a>
            </div>
          </div>

          {/* Columna 3: Obra Social */}
          <div className="col-md-3">
            <h5 className="fw-bold">Obra Social del Personal</h5>
            <ul className="list-unstyled text-light small">
              <li>
                <Link to="/obra-social" className="text-info text-decoration-none">&gt; Luz y Fuerza Cba Salud</Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Línea divisoria */}
        <hr className="border-light my-4" />

        {/* Copyright */}
        <div className="text-center small text-light d-flex justify-content-center align-items-center">
          Desarrollado por
          <a href="https://usinacreativa.com.ar/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 0.2rem' }}>
            <img
              src="/img/identidad/logoUsina.webp"
              alt="Logo Usina Creativa - Agencia de comunicación y desarrollo del sitio web del sindicato Luz y Fuerza Córdoba"
              loading="lazy"
              height="25"
            />
          </a>
          © 2025 todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
}

export default Footer;
