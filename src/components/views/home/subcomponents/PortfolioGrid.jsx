import { useEffect, useRef } from 'react';
import { clients } from '../../../../data/clients';
import PortfolioCard from './PortfolioCard';
import { motion } from 'framer-motion';
import useIsotope from '../../../../hooks/useIsotope'; // IMPORTANTE
import './PortfolioGrid.css';

function PortfolioGrid({ selectedCategory }) {
  const gridRef = useRef(null);
  useIsotope(gridRef, '.portfolio-card', selectedCategory);

  // No filtramos manualmente, lo hace Isotope por CSS
  return (
    <section className="portfolio-grid px-3 py-5">
      <h2 className="text-center mb-4">Nuestros Trabajos</h2>


      <motion.div
        ref={gridRef}
        className="portfolio-grid-wrapper"
        layout
      >
        {clients.map((project) => (
          <motion.div
            key={project.id}
            className={`portfolio-grid-item portfolio-card ${project.category.toLowerCase().replaceAll(' ', '-')}`}

            layout
            layoutId={project.id.toString()}
          >
            <PortfolioCard project={project} />
          </motion.div>

        ))}
      </motion.div>


    </section>
  );
}

export default PortfolioGrid;
