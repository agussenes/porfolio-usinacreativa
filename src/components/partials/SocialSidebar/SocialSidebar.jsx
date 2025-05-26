import React from 'react';
import './SocialSidebar.css';

function SocialSidebar() {
  return (
    <div className="social-sidebar">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="icon facebook">
        <i className="bi bi-facebook"></i>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon twitter">
        <i className="bi bi-twitter"></i>
      </a>
      <a href="mailto:contacto@tudominio.com" className="icon email">
        <i className="bi bi-envelope-fill"></i>
      </a>
      <a href="https://wa.me/5493510000000" target="_blank" rel="noopener noreferrer" className="icon whatsapp">
        <i className="bi bi-whatsapp"></i>
      </a>
      <a href="https://t.me/tucanal" target="_blank" rel="noopener noreferrer" className="icon telegram">
        <i className="bi bi-telegram"></i>
      </a>
      <a href="#" className="icon plus">
        <i className="bi bi-plus-lg"></i>
      </a>
    </div>
  );
}

export default SocialSidebar;
