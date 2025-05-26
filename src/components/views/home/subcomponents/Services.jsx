// 📁 src/views/home/components/Services.jsx
import './Services.css';

const services = [
  { icon: 'bi-easel', title: 'Diseño Gráfico', desc: 'Identidad, editorial, flyers y más.' },
  { icon: 'bi-camera-reels', title: 'Audiovisual', desc: 'Documentales, spots, animación.' },
  { icon: 'bi-building', title: 'Institucional', desc: 'Estrategias y comunicación pública.' },
  { icon: 'bi-bullseye', title: 'Campañas', desc: 'Acciones de comunicación multicanal.' },
  { icon: 'bi-laptop', title: 'Web & Digital', desc: 'Sitios, redes, marketing y pauta.' },
  { icon: 'bi-camera', title: 'Fotografía', desc: 'Producción de fotos para productos y eventos.' },
];

function Services() {
  return (
    <section className="services py-5">
      <div className="container">
        <h2 className="text-center mb-5">Servicios</h2>
        <div className="row g-4">
          {services.map((s, i) => (
            <div className="col-md-4 text-center" key={i}>
              <i className={`bi ${s.icon} fs-1 mb-3`}></i>
              <h5>{s.title}</h5>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
