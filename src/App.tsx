import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Works from './components/Works';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '3534415089'; // Teléfono de Reformas M&D
    const text = 'Hola Reformas M&D, me gustaría solicitar un presupuesto sin compromiso para una reforma.';
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
  };

  // Reveal elements on scroll animation logic
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const handleScrollReveal = () => {
      const windowHeight = window.innerHeight;
      revealElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (elementTop < windowHeight - revealPoint) {
          el.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScrollReveal);
    // Initial check on mount
    handleScrollReveal();

    return () => window.removeEventListener('scroll', handleScrollReveal);
  }, []);

  return (
    <>
      {/* Navigation */}
      <Navbar onWhatsAppClick={handleWhatsAppClick} />

      {/* Main Sections */}
      <Hero onWhatsAppClick={handleWhatsAppClick} />
      
      <div className="reveal">
        <Services />
      </div>
      
      <div className="reveal">
        <Works />
      </div>
      
      <div className="reveal">
        <About />
      </div>
      
      <div className="reveal">
        <Contact onWhatsAppClick={handleWhatsAppClick} />
      </div>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: 'var(--whatsapp)',
          color: '#ffffff',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
          zIndex: 99,
          transition: 'var(--transition-smooth)',
        }}
        className="whatsapp-float-btn"
        title="Contactar por WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          width="32"
          height="32"
          fill="currentColor"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.731-1.464L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.786 1.452 5.535 0 10.04-4.509 10.043-10.048.002-2.684-1.04-5.207-2.935-7.105C16.647 1.554 14.126.51 11.44.51 5.908.51 1.403 5.018 1.4 10.556c-.001 1.687.453 3.328 1.311 4.743L1.683 21.03l5.964-1.564zM17.674 14.6c-.326-.164-1.93-.954-2.227-1.063-.297-.109-.513-.164-.73.164-.216.327-.838 1.063-1.026 1.28-.189.217-.378.245-.705.082-.326-.164-1.379-.508-2.628-1.622-.972-.867-1.628-1.938-1.819-2.265-.19-.327-.02-.504.143-.667.147-.146.327-.382.49-.573.163-.19.217-.327.326-.545.109-.217.055-.409-.028-.572-.082-.164-.73-1.76-.999-2.413-.263-.637-.53-.55-.73-.56h-.624c-.217 0-.57.082-.87.409-.3.327-1.14 1.118-1.14 2.727 0 1.61 1.17 3.163 1.33 3.382.163.217 2.307 3.524 5.59 4.945.78.338 1.39.54 1.867.69.784.25 1.5.214 2.066.13.629-.094 1.93-.79 2.2-1.513.271-.723.271-1.342.19-1.472-.082-.13-.298-.218-.624-.38z" />
        </svg>
      </button>

      <style>{`
        .whatsapp-float-btn:hover {
          transform: scale(1.1) rotate(5deg);
          background-color: #20ba5a !important;
          box-shadow: 0 12px 30px rgba(37, 211, 102, 0.6) !important;
        }
        @media (max-width: 768px) {
          .whatsapp-float-btn {
            bottom: 20px !important;
            right: 20px !important;
            width: 50px !important;
            height: 50px !important;
          }
          .whatsapp-float-btn svg {
            width: 26px !important;
            height: 26px !important;
          }
        }
      `}</style>
    </>
  );
}

export default App;
