import './CategoryFilters.css';

const categories = [
  "Todos",
  "Gráfica",
  "Branding",
  "Arquigrafía",
  "Editorial",
  "Impresiones",
  "Institucional",
  "Campañas",
  "Web",
  "Audiovisual",
  "Marketing Digital",
  "Producción Fotográfica"
];

function CategoryFilters({ selected, setSelected }) {
  return (
    <section className="category-filters py-3 bg-white border-bottom">
      <div className="category-scroll-container">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`btn btn-sm mx-1 ${
              selected === cat ? 'btn-dark' : 'btn-outline-dark'
            }`}
            onClick={() => setSelected(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </section>
  );
}

export default CategoryFilters;
