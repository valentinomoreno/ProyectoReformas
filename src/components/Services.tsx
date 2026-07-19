import { Home, Droplets, Utensils, Hammer, Zap, Layers, Compass, ArrowRight } from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

export default function Services() {
  const services: ServiceItem[] = [
    {
      id: 'reformas-integrales',
      title: 'Reformas Integrales Completas',
      description: 'Nos encargamos de todo el proceso de reforma de tu vivienda. Desde el diseño inicial hasta la entrega final, gestionamos cada detalle para que tú solo tengas que disfrutar del resultado.',
      image: 'images/reforms_living.jpg',
      icon: <Home size={24} />,
    },
    {
      id: 'banos',
      title: 'Baños y Fontanería',
      description: 'Especialistas en reformas completas de baño, instalaciones sanitarias, fontanería, mamparas y acabados de alta calidad.',
      image: 'images/bathroom.jpg',
      icon: <Droplets size={24} />,
    },
    {
      id: 'cocinas',
      title: 'Cocinas',
      description: 'Diseñamos cocinas funcionales y modernas, realizando instalaciones completas de mobiliario, electrodomésticos, electricidad y fontanería.',
      image: 'images/kitchen.jpg',
      icon: <Utensils size={24} />,
    },
    {
      id: 'albañileria',
      title: 'Obra y Albañilería',
      description: 'Realizamos todo tipo de trabajos de albañilería, estructuras, tabiques, revestimientos y acabados profesionales.',
      image: 'images/construction.jpg',
      icon: <Hammer size={24} />,
    },
    {
      id: 'electricidad',
      title: 'Instalaciones Eléctricas',
      description: 'Instalaciones nuevas, reformas eléctricas, iluminación y certificaciones conforme a la normativa vigente.',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80',
      icon: <Zap size={24} />,
    },
    {
      id: 'pladur',
      title: 'Pladur y Techos',
      description: 'Construcción de tabiques, falsos techos y soluciones de pladur con acabados de máxima calidad.',
      image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=600&q=80',
      icon: <Layers size={24} />,
    },
    {
      id: 'interiorismo',
      title: 'Mobiliario e Interiorismo',
      description: 'Asesoramiento, diseño e instalación de mobiliario e interiorismo personalizado para cada proyecto.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80',
      icon: <Compass size={24} />,
    },
  ];

  return (
    <section id="servicios" className="section section-light">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Servicios</span>
          <h2 className="section-title">¿Qué hacemos por ti?</h2>
          <p className="section-subtitle">
            Ofrecemos soluciones integrales y especializadas para la reforma de tu vivienda o local. Calidad garantizada.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          className="grid-3"
          style={{
            marginTop: '20px',
          }}
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              className="card service-card"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--gray-border)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                opacity: 0,
                transform: 'translateY(20px)',
                animation: `fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s forwards`,
              }}
            >
              {/* Image Container */}
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                <img
                  src={service.image}
                  alt={service.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'var(--transition-smooth)',
                  }}
                  className="service-img"
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    background: 'var(--primary)',
                    color: '#ffffff',
                    padding: '12px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 10px rgba(45, 138, 99, 0.3)',
                    zIndex: 2,
                  }}
                >
                  {service.icon}
                </div>
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)',
                    zIndex: 1,
                  }}
                />
              </div>

              {/* Content */}
              <div
                style={{
                  padding: '30px',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  gap: '12px',
                }}
              >
                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    color: 'var(--text-dark-h)',
                    lineHeight: 1.3,
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: 'var(--text-dark-p)',
                    lineHeight: 1.6,
                    flexGrow: 1,
                  }}
                >
                  {service.description}
                </p>
                <a
                  href="#contacto"
                  className="service-link"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: 'var(--primary)',
                    alignSelf: 'flex-start',
                    marginTop: '12px',
                    transition: 'var(--transition-fast)',
                  }}
                >
                  Consultar Proyecto <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Embedded styles for hovers */}
      <style>{`
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .service-card {
          transition: var(--transition-smooth) !important;
        }
        .service-card:hover {
          transform: translateY(-8px) scale(1.01) !important;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;
          border-color: rgba(45, 138, 99, 0.2) !important;
        }
        .service-card:hover .service-img {
          transform: scale(1.08);
        }
        .service-link:hover {
          color: #3b9b73 !important;
          gap: 10px !important;
        }
      `}</style>
    </section>
  );
}
