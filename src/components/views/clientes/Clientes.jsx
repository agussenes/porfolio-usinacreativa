// 📁 src/components/views/clientes/Clientes.jsx
import SEO from '../../../seo/SEO';
import BannerPortadas from '../../reutilizables/bannerPortadas/BannerPortadas';
import ClientsCarousel from '../home/subcomponents/ClientsCarousel';
import Testimoniales from '../../reutilizables/Testimoniales/Testimoniales';

import imgPortada from '../../../assets/image/contacto/portada.jpg'
import './Clientes.css';

function Clientes() {
  return (
    <>
      <SEO
        title="Clientes - Usina Creativa"
        description="Conocé nuestros clientes y lo que dicen sobre trabajar con Usina Creativa."
        url="https://usinacreativa.com.ar/clientes"
        image="https://usinacreativa.com.ar/img/clientes-og-image.jpg"
      />

      <BannerPortadas
        imagen={imgPortada}
        titulo="Nuestros Clientes"
      />

      <section className="clientes-intro py-5 text-center container">
        <h2 className="mb-3">Confían en nosotros</h2>
        <p className="lead text-muted">
          A lo largo de los años, diferentes organizaciones y emprendimientos confiaron en nuestro trabajo.
          Este es un recorrido por las marcas que acompañamos y los testimonios que nos impulsan a seguir creando.
        </p>
      </section>

      <section className="clientes-carousel container mb-5">
        <ClientsCarousel />
      </section>

      <section className="clientes-testimonios container py-5">
        <Testimoniales />
      </section>
    </>
  );
}

export default Clientes;
