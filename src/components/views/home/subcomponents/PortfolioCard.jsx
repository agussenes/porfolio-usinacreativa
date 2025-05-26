import { Link } from 'react-router-dom';
import './PortfolioCard.css';

function PortfolioCard({ project }) {
  return (
    <div
      className="portfolio-card-inner"
      style={{
        backgroundImage: `url(${project.coverImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        aspectRatio: '1 / 1',
        position: 'relative',
        color: 'white',
      }}
    >
      <div className="overlay d-flex flex-column justify-content-center align-items-center text-center">
        <h5 className="fw-bold">{project.title}</h5>
        <p className="small">{project.shortDescription}</p>
        <Link to={`/portfolio/${project.slug}`} className="btn btn-sm btn-outline-light mt-2">
          Ver más
        </Link>
      </div>
    </div>
  );
}

export default PortfolioCard;
