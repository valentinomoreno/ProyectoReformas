import { Shield, Sparkles, Clock } from 'lucide-react';

interface HeroProps {
  onWhatsAppClick: () => void;
}

export default function Hero({ onWhatsAppClick }: HeroProps) {
  return (
    <header
      id="inicio"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(rgba(18, 20, 23, 0.75), rgba(18, 20, 23, 0.85)), url("images/hero_renovation.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        padding: '120px 0 80px',
        overflow: 'hidden',
      }}
    >
      {/* Decorative gradient overlay */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '150px',
          background: 'linear-gradient(to top, var(--gray-dark), transparent)',
          zIndex: 1,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '28px' }}>
          
          {/* Badge */}
          <div
            className="animate-fade-in"
            style={{
              alignSelf: 'flex-start',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '8px 16px',
              borderRadius: '100px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--primary)',
              fontSize: '14px',
              fontWeight: 600,
            }}
          >
            <Sparkles size={16} />
            <span>ESTÉTICA Y CALIDAD SIN COMPROMISOS</span>
          </div>

          {/* Heading */}
          <h1
            className="animate-fade-in"
            style={{
              fontSize: 'clamp(40px, 6vw, 68px)',
              fontWeight: 800,
              letterSpacing: '-1.5px',
              lineHeight: 1.1,
              color: '#ffffff',
            }}
          >
            Transformamos espacios, <br />
            <span style={{ color: 'var(--primary)' }}>creamos hogares.</span>
          </h1>

          {/* Subtitle */}
          <p
            className="animate-fade-in"
            style={{
              fontSize: 'clamp(16px, 2vw, 19px)',
              color: 'var(--text-light-p)',
              maxWidth: '650px',
              lineHeight: 1.6,
            }}
          >
            Especialistas en reformas integrales premium. Convertimos tu piso o local comercial en un espacio moderno, funcional y con acabados de la más alta calidad.
          </p>

          {/* CTAs */}
          <div
            className="animate-fade-in"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              marginTop: '12px',
            }}
          >
            <button
              onClick={onWhatsAppClick}
              className="btn btn-primary"
              style={{ padding: '16px 36px', fontSize: '16px' }}
            >
              Pedir Presupuesto Gratis
            </button>
            <a
              href="#trabajos"
              className="btn btn-secondary"
              style={{ padding: '16px 36px', fontSize: '16px' }}
            >
              Ver Proyectos Realizados
            </a>
          </div>

          {/* Trust points */}
          <div
            className="animate-fade-in"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '30px',
              marginTop: '40px',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              paddingTop: '30px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  background: 'var(--primary-glow)',
                  padding: '10px',
                  borderRadius: '8px',
                  color: 'var(--primary)',
                }}
              >
                <Shield size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '15px', color: '#ffffff', fontWeight: 600 }}>Garantía de Calidad</h4>
                <p style={{ fontSize: '13px', color: 'var(--text-light-p)' }}>Materiales premium garantizados</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  background: 'var(--primary-glow)',
                  padding: '10px',
                  borderRadius: '8px',
                  color: 'var(--primary)',
                }}
              >
                <Clock size={20} />
              </div>
              <div>
                <h4 style={{ fontSize: '15px', color: '#ffffff', fontWeight: 600 }}>Cumplimiento de Plazos</h4>
                <p style={{ fontSize: '13px', color: 'var(--text-light-p)' }}>Sin sorpresas ni retrasos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
