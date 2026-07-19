import { useState } from 'react';
import { Eye } from 'lucide-react';

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  categoryLabel: string;
  image: string;
}

export default function Works() {
  const [activeFilter, setActiveFilter] = useState('todos');

  const filters = [
    { value: 'todos', label: 'Todos' },
    { value: 'reformas', label: 'Reformas Integrales' },
    { value: 'banos', label: 'Baños' },
    { value: 'cocinas', label: 'Cocinas' },
    { value: 'obra', label: 'Obra' },
  ];

  const projects: ProjectItem[] = [
    {
      id: 1,
      title: 'Apartamento de Diseño en Chamberí',
      category: 'reformas',
      categoryLabel: 'Reformas Integrales',
      image: 'images/reforms_living.jpg',
    },
    {
      id: 2,
      title: 'Cocina Minimalista con Isla Central',
      category: 'cocinas',
      categoryLabel: 'Cocinas',
      image: 'images/kitchen.jpg',
    },
    {
      id: 3,
      title: 'Baño de Lujo en Mármol Calacatta',
      category: 'banos',
      categoryLabel: 'Baños',
      image: 'images/bathroom.jpg',
    },
    {
      id: 4,
      title: 'Revestimiento y Estructura en Chalet',
      category: 'obra',
      categoryLabel: 'Obra',
      image: 'images/construction.jpg',
    },
    {
      id: 5,
      title: 'Ático Concepto Abierto y Terraza',
      category: 'reformas',
      categoryLabel: 'Reformas Integrales',
      image: 'images/hero_renovation.jpg',
    },
    {
      id: 6,
      title: 'Baño Clásico Moderno en Suite',
      category: 'banos',
      categoryLabel: 'Baños',
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 7,
      title: 'Cocina de Estilo Industrial',
      category: 'cocinas',
      categoryLabel: 'Cocinas',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 8,
      title: 'Reforma de Oficinas Corporativas',
      category: 'obra',
      categoryLabel: 'Obra',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80',
    },
  ];

  const filteredProjects =
    activeFilter === 'todos'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="trabajos" className="section section-dark" style={{ borderTop: '1px solid var(--gray-border-dark)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Portafolio</span>
          <h2 className="section-title">Trabajos Realizados</h2>
          <p className="section-subtitle">
            Explora una selección de nuestros proyectos de reforma más recientes. Calidad y diseño materializados.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '48px',
          }}
        >
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              style={{
                padding: '10px 24px',
                borderRadius: '100px',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'var(--transition-smooth)',
                backgroundColor: activeFilter === filter.value ? 'var(--primary)' : 'rgba(255, 255, 255, 0.03)',
                color: activeFilter === filter.value ? '#ffffff' : 'var(--text-light-p)',
                border: `1px solid ${
                  activeFilter === filter.value ? 'var(--primary)' : 'var(--gray-border-dark)'
                }`,
              }}
              className="filter-btn"
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid / Works Gallery */}
        <div
          className="works-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '30px',
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card card"
              style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                aspectRatio: '4/3',
                backgroundColor: 'var(--gray-card)',
                border: '1px solid var(--gray-border-dark)',
                animation: 'fadeReveal 0.5s ease forwards',
              }}
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'var(--transition-smooth)',
                }}
                className="project-img"
              />

              {/* Hover Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(18, 20, 23, 0.95), rgba(45, 138, 99, 0.4))',
                  opacity: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '24px',
                  transition: 'var(--transition-smooth)',
                  zIndex: 2,
                }}
                className="project-overlay"
              >
                <span
                  style={{
                    color: 'var(--primary)',
                    fontSize: '12px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '6px',
                  }}
                >
                  {project.categoryLabel}
                </span>
                <h3
                  style={{
                    fontSize: '18px',
                    color: '#ffffff',
                    fontWeight: 600,
                    marginBottom: '16px',
                    lineHeight: 1.3,
                  }}
                >
                  {project.title}
                </h3>
                <a
                  href="#contacto"
                  className="btn btn-primary"
                  style={{
                    alignSelf: 'flex-start',
                    padding: '8px 16px',
                    fontSize: '13px',
                    borderRadius: '6px',
                    gap: '6px',
                  }}
                >
                  <Eye size={16} /> Ver proyecto
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeReveal {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .filter-btn:hover {
          background-color: ${activeFilter === 'todos' ? 'var(--primary)' : 'rgba(255, 255, 255, 0.08)'} !important;
          border-color: ${activeFilter === 'todos' ? 'var(--primary)' : 'rgba(255, 255, 255, 0.2)'} !important;
          color: #ffffff !important;
        }
        .project-card:hover .project-img {
          transform: scale(1.1);
        }
        .project-card:hover .project-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}
