import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LightboxGallery.css';

function LightboxGallery({ images = [] }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="lightbox-gallery d-flex flex-wrap gap-3">
        {images.map((img, idx) => (
          <div className="thumb-wrapper text-center" key={idx}>
            <img
              src={img.src}
              alt={img.caption}
              className="thumb"
              height={70}
              onClick={() => setSelectedImage(img)}
            />
            <p className="caption small mt-2">{img.caption}</p>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content">
            <img src={selectedImage.src} alt={selectedImage.caption} className="img-fluid" />
            <p className="caption text-white mt-3">{selectedImage.caption}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default LightboxGallery;
