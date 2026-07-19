import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onWhatsAppClick: () => void;
}

export default function Navbar({ onWhatsAppClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-dark/85 backdrop-blur-md border-b border-gray-border-dark py-4'
          : 'bg-transparent py-6'
      }`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 50,
        transition: 'var(--transition-smooth)',
        backgroundColor: isScrolled ? 'rgba(18, 20, 23, 0.85)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--gray-border-dark)' : '1px solid transparent',
        padding: isScrolled ? '12px 0' : '20px 0',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo */}
        <a href="#inicio" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '28px',
              fontWeight: 800,
              letterSpacing: '-0.5px',
              color: '#ffffff',
            }}
          >
            REFORMAS <span style={{ color: 'var(--primary)' }}>M&D</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div
          className="desktop-menu"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
          }}
        >
          <ul
            style={{
              display: 'flex',
              listStyle: 'none',
              gap: '32px',
              fontSize: '15px',
              fontWeight: 500,
              color: '#ffffff',
            }}
          >
            <li>
              <a href="#inicio" className="nav-link" style={{ transition: 'var(--transition-fast)' }}>
                Inicio
              </a>
            </li>
            <li>
              <a href="#servicios" className="nav-link">
                Servicios
              </a>
            </li>
            <li>
              <a href="#trabajos" className="nav-link">
                Trabajos
              </a>
            </li>
            <li>
              <a href="#nosotros" className="nav-link">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#contacto" className="nav-link">
                Contacto
              </a>
            </li>
          </ul>

          <button
            onClick={onWhatsAppClick}
            className="btn btn-whatsapp"
            style={{
              padding: '10px 20px',
              fontSize: '14px',
              borderRadius: '6px',
            }}
          >
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="currentColor"
              style={{ marginRight: '4px' }}
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.731-1.464L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.786 1.452 5.535 0 10.04-4.509 10.043-10.048.002-2.684-1.04-5.207-2.935-7.105C16.647 1.554 14.126.51 11.44.51 5.908.51 1.403 5.018 1.4 10.556c-.001 1.687.453 3.328 1.311 4.743L1.683 21.03l5.964-1.564zM17.674 14.6c-.326-.164-1.93-.954-2.227-1.063-.297-.109-.513-.164-.73.164-.216.327-.838 1.063-1.026 1.28-.189.217-.378.245-.705.082-.326-.164-1.379-.508-2.628-1.622-.972-.867-1.628-1.938-1.819-2.265-.19-.327-.02-.504.143-.667.147-.146.327-.382.49-.573.163-.19.217-.327.326-.545.109-.217.055-.409-.028-.572-.082-.164-.73-1.76-.999-2.413-.263-.637-.53-.55-.73-.56h-.624c-.217 0-.57.082-.87.409-.3.327-1.14 1.118-1.14 2.727 0 1.61 1.17 3.163 1.33 3.382.163.217 2.307 3.524 5.59 4.945.78.338 1.39.54 1.867.69.784.25 1.5.214 2.066.13.629-.094 1.93-.79 2.2-1.513.271-.723.271-1.342.19-1.472-.082-.13-.298-.218-.624-.38z" />
            </svg>
            WhatsApp
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMobileMenu}
          className="mobile-menu-btn"
          style={{
            background: 'none',
            border: 'none',
            color: '#ffffff',
            cursor: 'pointer',
            display: 'none', // Overridden in custom media query
          }}
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            backgroundColor: 'var(--gray-card)',
            borderBottom: '1px solid var(--gray-border-dark)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            zIndex: 49,
          }}
        >
          <ul
            style={{
              display: 'flex',
              flexDirection: 'column',
              listStyle: 'none',
              gap: '20px',
              fontSize: '16px',
              fontWeight: 500,
            }}
          >
            <li>
              <a href="#inicio" onClick={toggleMobileMenu} style={{ color: '#ffffff', display: 'block' }}>
                Inicio
              </a>
            </li>
            <li>
              <a href="#servicios" onClick={toggleMobileMenu} style={{ color: '#ffffff', display: 'block' }}>
                Servicios
              </a>
            </li>
            <li>
              <a href="#trabajos" onClick={toggleMobileMenu} style={{ color: '#ffffff', display: 'block' }}>
                Trabajos
              </a>
            </li>
            <li>
              <a href="#nosotros" onClick={toggleMobileMenu} style={{ color: '#ffffff', display: 'block' }}>
                Nosotros
              </a>
            </li>
            <li>
              <a href="#contacto" onClick={toggleMobileMenu} style={{ color: '#ffffff', display: 'block' }}>
                Contacto
              </a>
            </li>
          </ul>
          <button
            onClick={() => {
              toggleMobileMenu();
              onWhatsAppClick();
            }}
            className="btn btn-whatsapp"
            style={{ width: '100%' }}
          >
            WhatsApp
          </button>
        </div>
      )}

      {/* Inline styles for responsive hamburger */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
        .nav-link {
          position: relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: var(--primary);
          transition: var(--transition-fast);
        }
        .nav-link:hover {
          color: var(--primary) !important;
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
    </nav>
  );
}
