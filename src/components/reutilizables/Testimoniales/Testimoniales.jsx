// src/components/views/clientes/subcomponents/Testimoniales.jsx
import './Testimoniales.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

const testimonios = [
  {
    nombre: 'María López',
    texto: 'Trabajar con Usina Creativa fue una experiencia transformadora. Su equipo es profesional, atento y creativo.',
    imagen: 'https://randomuser.me/api/portraits/women/44.jpg',
    cargo: 'Directora de ONG Mujeres Presentes'
  },
  {
    nombre: 'Carlos Fernández',
    texto: 'Lograron captar nuestra identidad en cada diseño. Superaron nuestras expectativas.',
    imagen: 'https://randomuser.me/api/portraits/men/36.jpg',
    cargo: 'Coordinador de Feria Popular'
  },
  {
    nombre: 'Lucía Gómez',
    texto: 'Desde el primer contacto nos brindaron confianza y profesionalismo. 100% recomendables.',
    imagen: 'https://randomuser.me/api/portraits/women/65.jpg',
    cargo: 'Emprendedora en Panadería San Juan'
  },
  {
    nombre: 'Lucía Gómez',
    texto: 'Desde el primer contacto nos brindaron confianza y profesionalismo. 100% recomendables.',
    imagen: 'https://randomuser.me/api/portraits/women/65.jpg',
    cargo: 'Emprendedora en Panadería San Juan'
  },
  {
    nombre: 'Lucía Gómez',
    texto: 'Desde el primer contacto nos brindaron confianza y profesionalismo. 100% recomendables.',
    imagen: 'https://randomuser.me/api/portraits/women/65.jpg',
    cargo: 'Emprendedora en Panadería San Juan'
  },
  // podés seguir agregando más
];

function Testimoniales() {
  return (
    <section className="testimoniales py-5">
      <div className="container">
        <h2 className="text-center mb-5">Testimonios</h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >
          {testimonios.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="testimonial-card h-100 p-4 text-center">
                <img
                  src={t.imagen}
                  alt={t.nombre}
                  className="testimonial-img rounded-circle mb-3"
                />
                <p className="testimonial-text">“{t.texto}”</p>
                <h5 className="mt-3 mb-0 fw-bold">{t.nombre}</h5>
                <small className="text-muted">{t.cargo}</small>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimoniales;
