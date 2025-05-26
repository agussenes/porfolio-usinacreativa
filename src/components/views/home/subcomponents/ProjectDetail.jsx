// 📁 src/views/portfolio/ProjectDetail.jsx
import { useParams, Link } from 'react-router-dom';
import { clients } from '../../../../data/clients';
import { useEffect } from 'react';

function ProjectDetail() {
  const { slug } = useParams();
  const project = clients.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) return <p className="text-center mt-5">Proyecto no encontrado</p>;

  return (
    <div className="container py-5">
      <Link to="/" className="btn btn-outline-dark mb-4">← Volver</Link>

      <h1 className="mb-3">{project.title}</h1>
      <p className="lead">{project.fullDescription}</p>

      <div className="row my-4">
        {project.gallery.map((img, i) => (
          <div className="col-md-4 mb-3" key={i}>
            <img src={img} alt={`imagen-${i}`} className="img-fluid rounded" />
          </div>
        ))}
      </div>

      {project.videoUrl && (
        <div className="ratio ratio-16x9 mb-4">
          <iframe
            src={project.videoUrl}
            title="Video"
            allowFullScreen
          ></iframe>
        </div>
      )}

      <p><strong>Cliente:</strong> {project.client}</p>
      <p><strong>Año:</strong> {project.year}</p>
    </div>
  );
}

export default ProjectDetail;
