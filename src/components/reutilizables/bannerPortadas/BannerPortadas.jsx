import './BannerPortadas.css';

function BannerPortadas({ imagen, titulo }) {
  return (
    <section className="portada d-flex align-items-center justify-content-center text-center">
      <div className="bannerGif-img">
        <img src={imagen} alt={`Banner ${titulo}`} loading="lazy" />
        {/* <div className="overlay-text">
          <h1 className="text-uppercase">{titulo}</h1>
        </div> */}
      </div>
    </section>
  );
}

export default BannerPortadas;
