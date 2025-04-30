import React, { useEffect, useState } from "react";

function PROCESOSECTION() {
  const [faqList, setFaqList] = useState([]);

  // Llama al backend para obtener las preguntas frecuentes
  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await fetch("https://vidrieriaflorida-front-u98r.vercel.app/api/faq");
        const data = await response.json();
        setFaqList(data);
      } catch (error) {
        console.error("Error al obtener las preguntas frecuentes:", error);
      }
    };

    fetchFaqs();
  }, []);

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="card shadow-lg p-4 animate__animated animate__fadeIn">
          {/* Sección de instalación */}
          <div className="row g-0 align-items-center">
            <div className="col-md-12 text-center">
              <h2 className="fw-bold mb-3">Instalación Profesional y Confianza Garantizada</h2>
              <p className="lead">
                En <strong>Vidriería Florida</strong>, no solo ofrecemos productos de alta calidad,
                sino también un proceso de instalación seguro, rápido y limpio.
              </p>
              <p>
                Nuestro equipo de expertos se encarga de cada detalle, asegurando una colocación perfecta
                de vidrios templados, espejos decorativos y sistemas DVH.
              </p>
              <p>
                <strong>¿Por qué elegirnos?</strong><br />
                ✔️ Más de 20 años de experiencia<br />
                ✔️ Garantía en todos los trabajos<br />
                ✔️ Atención personalizada<br />
                ✔️ Presupuestos sin cargo
              </p>
            </div>
          </div>

          {/* Sección de preguntas frecuentes */}
          <div className="accordion mt-5" id="faqAccordion">
            {faqList.length === 0 ? (
              <p className="text-center">Cargando preguntas frecuentes...</p>
            ) : (
              faqList.map((faq, index) => (
                <div className="accordion-item mb-3" key={index}>
                  <h5 className="accordion-header" id={`heading-${index}`}>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse-${index}`}
                      aria-expanded="false"
                      aria-controls={`collapse-${index}`}
                    >
                      {faq.pregunta}
                    </button>
                  </h5>
                  <div
                    id={`collapse-${index}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`heading-${index}`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      {faq.respuesta}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PROCESOSECTION;
