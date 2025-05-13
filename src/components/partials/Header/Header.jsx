import { Link } from 'react-router-dom';
import './Header.css'; 

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark container sticky-top">
        <div className="container-fluid">

          {/* LOGO */}
          <Link className="navbar-brand" to="/">
            <img src="/img/identidad/logoUsina.webp" alt="Logo sindicato de luz y fuerza" height="50" loading="lazy" />
          </Link>

          {/* Botón hamburguesa mobile */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContenido"
            aria-controls="navbarContenido" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Contenido del navbar */}
          <div className="collapse navbar-collapse" id="navbarContenido">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

              {/* Dropdown */}
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="dropdownMenu" role="button"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  Institucional
                </Link>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu">
                  <li><Link className="dropdown-item" to="/quienes-somos">Quienes somos</Link></li>
                  <li><Link className="dropdown-item" to="/vida-institucional">Vida institucional</Link></li>
                  <li><Link className="dropdown-item" to="/historia">Historia</Link></li>
                  <li><Link className="dropdown-item" to="/convenio-colectivo">Convenio colectivo</Link></li>
                </ul>
              </li>

              {/* Enlaces normales */}
              <li className="nav-item">
                <Link className="nav-link" to="/nuestra-lucha">Nuestra lucha</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/beneficios">Beneficios</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/novedades">Novedades</Link>
              </li>

            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
}

export default Header;
