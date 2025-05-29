import { Link } from 'react-router-dom';

import imgEquipo from '../../../../assets/image/home/equipo/equipo.jpg'

function AboutUs() {
  return (
    <section className="about-us container py-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h2 className="mb-3">Quiénes Somos</h2>
          <p>
            Usina Creativa es un espacio de trabajo colectivo formado por profesionales del diseño, la comunicación, lo audiovisual y la producción gráfica. Apostamos a crear desde lo social, lo político y lo territorial. Nuestro enfoque está en producir mensajes con identidad y compromiso.
          </p>
          <Link to="/quienes-somos" className="btn btn-outline-dark mt-3">
           Conocenos más
        </Link>
        </div>
        <div className="col-md-6">
          <img
            src={imgEquipo}
            alt="Equipo Usina Creativa"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
