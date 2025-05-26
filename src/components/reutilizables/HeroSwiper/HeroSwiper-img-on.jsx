import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import './HeroSwiper.css';

function HeroSwiper({ slides }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="hero-swiper-container">
      <Swiper
        modules={[Autoplay, Pagination]}
        className="hero-swiper"
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        {slides.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="bannerGif-img">
              <img
                src={isMobile ? item.imgMobile : item.img}
                alt={item.titulo}
                className="hero-img"
              />
              <div className="hero-slide-overlay">
                <h1 className="hero-slide-title">{item.titulo}</h1>
                <p className="hero-slide-text">{item.bajada}</p>
                <div className="contenedorBotonHeroSwipper">
                  <Link to={item.link} className="btn btn-outline-light mt-3 botonHeroSwiper">
                    {item.boton} <i className="bi bi-arrow-right-short"></i>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HeroSwiper;
