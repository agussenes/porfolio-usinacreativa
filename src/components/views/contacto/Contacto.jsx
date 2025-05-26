// 📁 src/components/views/contacto/Contacto.jsx
import BannerPortadas from '../../reutilizables/bannerPortadas/BannerPortadas';
import './Contacto.css';

// import de imagenes 

import imgPortada from '../../../assets/image/contacto/portada.jpg'

function Contacto() {
  return (
    <>
      <BannerPortadas
        imagen={imgPortada}
        titulo="Contactanos"
      />

      <section className="contacto-section container py-5">
        <div className="row">
          <div className="col-md-6 mb-4">
            <h2>¿En qué podemos ayudarte?</h2>
            <p className="lead">
              Escribinos para proyectos, consultas o presupuestos. Te responderemos a la brevedad.
            </p>

            <ul className="list-unstyled">
              <li><strong>Email:</strong> contacto@usinacreativa.com.ar</li>
              <li><strong>Teléfono:</strong> +54 351 123-4567</li>
              <li><strong>Dirección:</strong> Córdoba, Argentina</li>
            </ul>

            <div className="mt-3">
              <a href="https://wa.me/543511234567" target="_blank" rel="noreferrer" className="btn btn-success">
                📱 Chatear por WhatsApp
              </a>
            </div>
          </div>

          <div className="col-md-6">
            <form className="contact-form">
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Correo electrónico</label>
                <input type="email" className="form-control" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Mensaje</label>
                <textarea className="form-control" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-dark">Enviar mensaje</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contacto;
