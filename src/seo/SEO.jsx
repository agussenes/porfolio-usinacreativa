import { Helmet } from 'react-helmet-async';

function SEO({
  title = 'Luz y Fuerza Córdoba',
  description = 'Sindicato de Luz y Fuerza Córdoba - Defendiendo los derechos de los trabajadores de la energía.',
  keywords = 'sindicato, luz, fuerza, córdoba, energía, electricidad',
  author = 'Luz y Fuerza Córdoba',
  image = 'https://tusitio.com/img/og-image.jpg',
  url = 'https://tusitio.com/'
}) {
  return (
    <Helmet>
      {/* Título y descripción */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      {/* OpenGraph para compartir en redes */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}

export default SEO;
