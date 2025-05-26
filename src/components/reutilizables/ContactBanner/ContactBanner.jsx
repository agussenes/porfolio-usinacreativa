// 📁 src/components/reutilizables/ContactBanner/ContactBanner.jsx
import { Link } from 'react-router-dom';
import './ContactBanner.css';

function ContactBanner() {
  return (
    <section className="contact-banner text-white text-center py-5" style={{ background: 'linear-gradient(to right, #111, #444)' }}>
      <div className="container">
        <h2 className="mb-3">¿Querés trabajar con nosotros?</h2>
        <p className="lead">Contanos tu idea y diseñamos juntos una solución creativa.</p>
        <Link to="/contacto" className="btn btn-outline-light mt-3">
          Ir al contacto
        </Link>
      </div>
    </section>
  );
}

export default ContactBanner;
