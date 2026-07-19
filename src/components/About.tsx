import { Shield, Award, Clock, Sparkles } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Shield size={32} style={{ color: 'var(--primary)' }} />,
      title: 'Confianza',
      description: 'Garantizamos total transparencia en presupuestos, materiales y ejecución para tu tranquilidad.',
    },
    {
      icon: <Award size={32} style={{ color: 'var(--primary)' }} />,
      title: 'Calidad',
      description: 'Trabajamos únicamente con materiales premium y profesionales cualificados con amplia experiencia.',
    },
    {
      icon: <Clock size={32} style={{ color: 'var(--primary)' }} />,
      title: 'Plazos Firmes',
      description: 'Nos tomamos muy en serio tu tiempo. Cumplimos los plazos acordados por contrato.',
    },
    {
      icon: <Sparkles size={32} style={{ color: 'var(--primary)' }} />,
      title: 'Trabajo Limpio',
      description: 'Cuidamos cada detalle durante la obra y entregamos tu espacio impecable y listo para disfrutar.',
    },
  ];

  return (
    <section id="nosotros" className="section section-light" style={{ borderTop: '1px solid var(--gray-border)' }}>
      <div className="container">
        
        {/* About Main Section (Grid 2 columns) */}
        <div className="grid-2" style={{ alignItems: 'center', marginBottom: '80px' }}>
          
          {/* Left Column: Team Image */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                top: '-15px',
                left: '-15px',
                width: '100%',
                height: '100%',
                border: '4px solid var(--primary)',
                borderRadius: '16px',
                zIndex: 1,
              }}
            />
            <img
              src="images/about_team.jpg"
              alt="Equipo de Reformas M&D"
              style={{
                position: 'relative',
                zIndex: 2,
                borderRadius: '16px',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                width: '100%',
                objectFit: 'cover',
                height: '420px',
              }}
            />
          </div>

          {/* Right Column: History */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <span className="section-badge" style={{ alignSelf: 'flex-start' }}>Nosotros</span>
            <h2 className="section-title" style={{ fontSize: '38px', margin: 0 }}>
              Pasión por la arquitectura, compromiso con los resultados.
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-dark-p)', lineHeight: 1.7 }}>
              En <strong>Reformas M&D</strong> llevamos años transformando ideas en realidades tangibles. Nos especializamos en reformas integrales y parciales con un enfoque centrado en la excelencia, la funcionalidad y las últimas tendencias de diseño.
            </p>
            <p style={{ fontSize: '16px', color: 'var(--text-dark-p)', lineHeight: 1.7 }}>
              Entendemos que reformar una vivienda no es solo un proceso constructivo, sino la materialización de un proyecto de vida. Por eso, nuestro equipo de arquitectos, diseñadores e instaladores trabaja codo con codo contigo para ofrecerte una atención totalmente personalizada y soluciones a tu medida.
            </p>
            
            {/* Quick Metrics */}
            <div
              style={{
                display: 'flex',
                gap: '40px',
                marginTop: '10px',
                borderTop: '1px solid var(--gray-border)',
                paddingTop: '20px',
              }}
            >
              <div>
                <span style={{ fontSize: '32px', fontWeight: 800, color: 'var(--primary)' }}>+15</span>
                <p style={{ fontSize: '14px', color: 'var(--text-dark-p)', fontWeight: 500 }}>Años de experiencia</p>
              </div>
              <div>
                <span style={{ fontSize: '32px', fontWeight: 800, color: 'var(--primary)' }}>300+</span>
                <p style={{ fontSize: '14px', color: 'var(--text-dark-p)', fontWeight: 500 }}>Reformas completadas</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Cards underneath (Grid 4 columns) */}
        <div className="grid-4" style={{ marginTop: '20px' }}>
          {values.map((val, idx) => (
            <div
              key={idx}
              className="card value-card"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--gray-border)',
                padding: '30px 24px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '14px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                transition: 'var(--transition-smooth)',
              }}
            >
              <div
                style={{
                  background: 'var(--primary-light)',
                  padding: '16px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '6px',
                }}
              >
                {val.icon}
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-dark-h)' }}>
                {val.title}
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-dark-p)', lineHeight: 1.6 }}>
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .value-card:hover {
          transform: translateY(-5px) !important;
          box-shadow: 0 15px 20px -5px rgba(0, 0, 0, 0.08) !important;
          border-color: rgba(45, 138, 99, 0.2) !important;
        }
      `}</style>
    </section>
  );
}
