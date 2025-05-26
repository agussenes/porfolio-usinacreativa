import { useState } from 'react';

import HeroSwiper from '../../reutilizables/HeroSwiper/HeroSwiper';
import SEO from '../../../seo/SEO';
import slides from './slides';

import CategoryFilters from './subcomponents/CategoryFilters';
import PortfolioGrid from './subcomponents/PortfolioGrid';
import AboutUs from './subcomponents/AboutUs';
import Services from './subcomponents/Services';
import ClientsCarousel from './subcomponents/ClientsCarousel';
import ContactBanner from '../../reutilizables/ContactBanner/ContactBanner';

function Home() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  return (
    <>
      <SEO
        title="Inicio - Usina Creativa"
        description="Agencia creativa en Córdoba: gráfica, audiovisual, institucional y más."
        url="https://usinacreativa.com.ar/"
        image="https://usinacreativa.com.ar/img/home-og-image.jpg"
      />

      <HeroSwiper slides={slides} />
      <CategoryFilters selected={selectedCategory} setSelected={setSelectedCategory} />
      <PortfolioGrid selectedCategory={selectedCategory} />
      <AboutUs />
      <Services />
      <ClientsCarousel />
      <ContactBanner />
    </>
  );
}

export default Home;
