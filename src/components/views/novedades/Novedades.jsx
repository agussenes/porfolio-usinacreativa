import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SEO from '../../../seo/SEO';
import BannerPortadas from '../../reutilizables/bannerPortadas/BannerPortadas';
import ContactBanner from '../../reutilizables/ContactBanner/ContactBanner';

import imgPortada from '../../../assets/image/contacto/portada.jpg';
import './Novedades.css';

function Novedades() {
  const [novedades, setNovedades] = useState([]);

  useEffect(() => {
    // fetch('https://tusitio.com/admin-novedades/novedades/novedades.json')
    fetch('../../../../admin-novedades/novedades/novedades.json')
      .then(res => res.json())
      .then(data => setNovedades(data))
      .catch(err => console.error('Error al cargar novedades:', err));
  }, []);

  return (
    <>
      <SEO
        title="Novedades - Usina Creativa"
        description="Conocé las últimas novedades, colaboraciones y proyectos de Usina Creativa."
        url="https://usinacreativa.com.ar/novedades"
        image="https://usinacreativa.com.ar/img/novedades-og.jpg"
      />

      <BannerPortadas
        imagen={imgPortada}
        titulo="Novedades"
      />

      <section className="novedades-listado py-5">
        <Container>
          <Row>
            {novedades.map((novedad, index) => (
              <Col key={index} xs={12} md={6} lg={4} className="mb-4">
                <div className="novedad-card h-100 p-3 shadow-sm rounded bg-white">
                  <img
                    src={`https://tusitio.com/admin-novedades/${novedad.imagen}`}
                    alt={novedad.titulo}
                    className="img-fluid rounded mb-3"
                  />
                  <h5 className="fw-bold">{novedad.titulo}</h5>
                  <p>{novedad.bajada}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <ContactBanner />
    </>
  );
}

export default Novedades;
