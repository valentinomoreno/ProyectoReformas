import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      style={{
        backgroundColor: '#0b0c0e',
        borderTop: '1px solid var(--gray-border-dark)',
        padding: '60px 0 30px',
        color: 'var(--text-light-p)',
      }}
    >
      <div className="container">
        
        {/* Top Footer */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '40px',
            marginBottom: '40px',
            borderBottom: '1px solid var(--gray-border-dark)',
            paddingBottom: '40px',
          }}
          className="footer-top"
        >
          {/* Logo Column */}
          <div>
            <a href="#inicio" style={{ display: 'inline-block', marginBottom: '16px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '24px',
                  fontWeight: 800,
                  color: '#ffffff',
                }}
              >
                REFORMAS <span style={{ color: 'var(--primary)' }}>M&D</span>
              </span>
            </a>
            <p style={{ fontSize: '14px', maxWidth: '300px', lineHeight: 1.6 }}>
              Creamos espacios funcionales y sofisticados que mejoran tu calidad de vida. Profesionalidad y confianza en cada detalle.
            </p>
          </div>

          {/* Quick Links Column */}
          <div style={{ display: 'flex', gap: '40px' }} className="footer-links-container">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h4 style={{ fontSize: '15px', color: '#ffffff', fontWeight: 600 }}>Navegación</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
                <li><a href="#inicio" className="footer-link">Inicio</a></li>
                <li><a href="#servicios" className="footer-link">Servicios</a></li>
                <li><a href="#trabajos" className="footer-link">Trabajos</a></li>
                <li><a href="#nosotros" className="footer-link">Nosotros</a></li>
                <li><a href="#contacto" className="footer-link">Contacto</a></li>
              </ul>
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }} className="footer-social-column">
            <h4 style={{ fontSize: '15px', color: '#ffffff', fontWeight: 600 }}>Síguenos</h4>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: '10px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--gray-border-dark)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'var(--transition-smooth)',
                }}
                className="social-btn"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: '10px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--gray-border-dark)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'var(--transition-smooth)',
                }}
                className="social-btn"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: '10px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--gray-border-dark)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'var(--transition-smooth)',
                }}
                className="social-btn"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px',
            fontSize: '13px',
          }}
        >
          <p>© {new Date().getFullYear()} Reformas M&D. Todos los derechos reservados.</p>
          
          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            style={{
              background: 'var(--primary-glow)',
              border: '1px solid rgba(45, 138, 99, 0.3)',
              color: 'var(--primary)',
              padding: '10px 14px',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontWeight: 600,
              fontSize: '13px',
              transition: 'var(--transition-smooth)',
            }}
            className="back-to-top-btn"
          >
            Volver arriba <ArrowUp size={16} />
          </button>
        </div>
      </div>

      <style>{`
        .footer-link {
          transition: var(--transition-fast);
        }
        .footer-link:hover {
          color: var(--primary);
        }
        .social-btn:hover {
          background-color: var(--primary) !important;
          border-color: var(--primary) !important;
          color: #ffffff !important;
          transform: translateY(-3px);
        }
        .back-to-top-btn:hover {
          background-color: var(--primary) !important;
          color: #ffffff !important;
          box-shadow: 0 4px 10px rgba(45, 138, 99, 0.3);
        }
        @media (max-width: 768px) {
          .footer-top {
            flex-direction: column;
            align-items: flex-start !important;
            gap: 30px;
          }
          .footer-links-container {
            width: 100%;
            justify-content: space-between;
          }
          .footer-social-column {
            width: 100%;
          }
        }
      `}</style>
    </footer>
  );
}
