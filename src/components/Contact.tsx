import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

interface ContactProps {
  onWhatsAppClick: () => void;
}

export default function Contact({ onWhatsAppClick }: ContactProps) {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    correo: '',
    tipoReforma: 'reformas-integrales',
    mensaje: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        nombre: '',
        telefono: '',
        correo: '',
        tipoReforma: 'reformas-integrales',
        mensaje: '',
      });
      // Reset success status after 5s
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contacto" className="section section-dark" style={{ borderTop: '1px solid var(--gray-border-dark)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Contacto</span>
          <h2 className="section-title">Hablemos de tu Proyecto</h2>
          <p className="section-subtitle">
            Pide tu presupuesto sin compromiso. Cuéntanos qué necesitas y nos pondremos en contacto contigo a la brevedad.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid-2">
          
          {/* Left Column: Form */}
          <div
            className="glass"
            style={{
              padding: '40px',
              borderRadius: '16px',
            }}
          >
            {isSubmitted ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  textAlign: 'center',
                  gap: '16px',
                  color: '#ffffff',
                }}
              >
                <CheckCircle2 size={60} style={{ color: 'var(--primary)' }} />
                <h3 style={{ fontSize: '24px' }}>¡Mensaje Enviado!</h3>
                <p style={{ fontSize: '15px', color: 'var(--text-light-p)', maxWidth: '300px' }}>
                  Hemos recibido tus datos correctamente. Un asesor técnico se pondrá en contacto contigo en menos de 24 horas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="nombre" style={{ fontSize: '14px', fontWeight: 600, color: '#ffffff' }}>
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Ej. Juan Pérez"
                    className="form-input"
                  />
                </div>

                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="telefono" style={{ fontSize: '14px', fontWeight: 600, color: '#ffffff' }}>
                      Teléfono de Contacto *
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      required
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="Ej. 600 000 000"
                      className="form-input"
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="correo" style={{ fontSize: '14px', fontWeight: 600, color: '#ffffff' }}>
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      id="correo"
                      name="correo"
                      required
                      value={formData.correo}
                      onChange={handleChange}
                      placeholder="Ej. juan@correo.com"
                      className="form-input"
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="tipoReforma" style={{ fontSize: '14px', fontWeight: 600, color: '#ffffff' }}>
                    Tipo de Reforma
                  </label>
                  <select
                    id="tipoReforma"
                    name="tipoReforma"
                    value={formData.tipoReforma}
                    onChange={handleChange}
                    className="form-input"
                    style={{ appearance: 'none', backgroundImage: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%23a3a8b4\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center', backgroundSize: '16px' }}
                  >
                    <option value="reformas-integrales">Reformas Integrales</option>
                    <option value="banos">Baños y Fontanería</option>
                    <option value="cocinas">Cocinas</option>
                    <option value="obra">Obra y Albañilería</option>
                    <option value="electricidad">Instalaciones Eléctricas</option>
                    <option value="pladur">Pladur y Techos</option>
                    <option value="interiorismo">Mobiliario e Interiorismo</option>
                    <option value="otros">Otros Proyectos</option>
                  </select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="mensaje" style={{ fontSize: '14px', fontWeight: 600, color: '#ffffff' }}>
                    Cuéntanos más sobre tu idea *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={4}
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Describe brevemente las dimensiones de la reforma, materiales de interés, plazos previstos..."
                    className="form-input"
                    style={{ resize: 'vertical' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    padding: '14px',
                    fontSize: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    opacity: isSubmitting ? 0.7 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  }}
                >
                  {isSubmitting ? 'Enviando...' : (
                    <>
                      Enviar Mensaje <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact Info & Maps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            
            {/* Info Cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
              }}
              className="info-cards-grid"
            >
              <div
                className="glass"
                style={{
                  padding: '24px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                }}
              >
                <div style={{ color: 'var(--primary)' }}><Phone size={20} /></div>
                <div>
                  <h4 style={{ fontSize: '15px', color: '#ffffff', marginBottom: '4px' }}>Teléfono</h4>
                  <a href="tel:+45501884005" style={{ fontSize: '14px', color: 'var(--text-light-p)' }}>+45 50 18 84 05</a>
                </div>
              </div>

              <div
                className="glass"
                style={{
                  padding: '24px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                }}
              >
                <div style={{ color: 'var(--primary)' }}><Mail size={20} /></div>
                <div>
                  <h4 style={{ fontSize: '15px', color: '#ffffff', marginBottom: '4px' }}>Email</h4>
                  <a href="mailto:info@reformasmd.es" style={{ fontSize: '14px', color: 'var(--text-light-p)' }}>info@reformasmd.es</a>
                </div>
              </div>

              <div
                className="glass"
                style={{
                  padding: '24px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                }}
              >
                <div style={{ color: 'var(--primary)' }}><MapPin size={20} /></div>
                <div>
                  <h4 style={{ fontSize: '15px', color: '#ffffff', marginBottom: '4px' }}>Ubicación</h4>
                  <p style={{ fontSize: '14px', color: 'var(--text-light-p)' }}>Valencia y alrededores</p>
                </div>
              </div>

              <div
                className="glass"
                style={{
                  padding: '24px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                }}
              >
                <div style={{ color: 'var(--primary)' }}><Clock size={20} /></div>
                <div>
                  <h4 style={{ fontSize: '15px', color: '#ffffff', marginBottom: '4px' }}>Horario</h4>
                  <p style={{ fontSize: '14px', color: 'var(--text-light-p)', lineHeight: 1.4 }}>
                    L-V: 8:00 - 19:00<br />
                    S: 9:00 - 14:00
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map Embedded Iframe */}
            <div
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid var(--gray-border-dark)',
                height: '240px',
                position: 'relative',
              }}
            >
              <iframe
                title="Ubicación de Reformas M&D - Valencia"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99127.13577856117!2d-0.4378277!3d39.4699075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f4cf0efb06f%3A0xb4a351011f7f1d39!2sValencia%2C%20Spain!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) invert(0.9) opacity(0.8)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Sticky WhatsApp Floating / Highlight Box */}
            <div
              className="glass"
              style={{
                padding: '24px',
                borderRadius: '16px',
                border: '1px solid rgba(37, 211, 102, 0.2)',
                background: 'rgba(37, 211, 102, 0.03)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px',
              }}
            >
              <div>
                <h4 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 600, marginBottom: '4px' }}>
                  ¿Prefieres hablar por WhatsApp?
                </h4>
                <p style={{ fontSize: '13px', color: 'var(--text-light-p)' }}>
                  Escríbenos directamente y te responderemos al instante.
                </p>
              </div>
              <button
                onClick={onWhatsAppClick}
                className="btn btn-whatsapp"
                style={{
                  padding: '12px 24px',
                  fontSize: '14px',
                  fontWeight: 700,
                  width: 'auto',
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                  style={{ marginRight: '6px' }}
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.731-1.464L0 24zm6.59-4.846c1.6.95 3.197 1.451 4.786 1.452 5.535 0 10.04-4.509 10.043-10.048.002-2.684-1.04-5.207-2.935-7.105C16.647 1.554 14.126.51 11.44.51 5.908.51 1.403 5.018 1.4 10.556c-.001 1.687.453 3.328 1.311 4.743L1.683 21.03l5.964-1.564zM17.674 14.6c-.326-.164-1.93-.954-2.227-1.063-.297-.109-.513-.164-.73.164-.216.327-.838 1.063-1.026 1.28-.189.217-.378.245-.705.082-.326-.164-1.379-.508-2.628-1.622-.972-.867-1.628-1.938-1.819-2.265-.19-.327-.02-.504.143-.667.147-.146.327-.382.49-.573.163-.19.217-.327.326-.545.109-.217.055-.409-.028-.572-.082-.164-.73-1.76-.999-2.413-.263-.637-.53-.55-.73-.56h-.624c-.217 0-.57.082-.87.409-.3.327-1.14 1.118-1.14 2.727 0 1.61 1.17 3.163 1.33 3.382.163.217 2.307 3.524 5.59 4.945.78.338 1.39.54 1.867.69.784.25 1.5.214 2.066.13.629-.094 1.93-.79 2.2-1.513.271-.723.271-1.342.19-1.472-.082-.13-.298-.218-.624-.38z" />
                </svg>
                Chatear ahora
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .form-input {
          width: 100%;
          padding: 12px 16px;
          border-radius: 8px;
          background-color: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--gray-border-dark);
          color: #ffffff;
          font-family: var(--font-body);
          font-size: 14px;
          transition: var(--transition-fast);
          outline: none;
        }
        .form-input:focus {
          border-color: var(--primary);
          background-color: rgba(255, 255, 255, 0.06);
          box-shadow: 0 0 0 2px rgba(45, 138, 99, 0.2);
        }
        .form-input::placeholder {
          color: rgba(255, 255, 255, 0.3);
        }
        @media (max-width: 600px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
          .info-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
