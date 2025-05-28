import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './ClientsCarousel.css';

const logos = [
  '/img/identidad/logoUsinaG.png',
  '/img/identidad/logoUsinaG.png',
  '/img/identidad/logoUsinaG.png',
  '/img/identidad/logoUsinaG.png',
  '/img/identidad/logoUsinaG.png',
  '/img/identidad/logoUsinaG.png',
  '/img/identidad/logoUsinaG.png',
];

function ClientsCarousel() {
  return (
    <section className="clients-carousel py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Las siguientes empresas, instituciones y organizaciones han confiado en nuestra capacidad de trabajo y la calidad de nuestro servicio.</h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 4 },
            992: { slidesPerView: 5 }
          }}
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="d-flex justify-content-center">
                <img src={logo} alt={`cliente-${index}`} className="img-fluid logo-img" style={{ maxHeight: 80 }} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ClientsCarousel;
