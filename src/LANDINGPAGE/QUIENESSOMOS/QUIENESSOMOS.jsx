import React, { useEffect, useState } from 'react';

const API_URL = 'https://vidrieriafloridabackend-production.up.railway.app';

function QUIENESSOMOS() {
  const [presentacion, setPresentacion] = useState({
    textoPrincipal: '',
    textoSecundario: ''
  });

  useEffect(() => {
    fetch(API_URL)
      .then(res => {
        if (!res.ok) throw new Error('Error al obtener la presentación');
        return res.json();
      })
      .then(data => {
        setPresentacion({
          textoPrincipal: data.textoPrincipal || '',
          textoSecundario: data.textoSecundario || ''
        });
      })
      .catch(err => {
        console.log('No se pudo obtener la presentación:', err);
        // Si hay un error, podrías dejar un texto por defecto
        setPresentacion({
          textoPrincipal: "En Vidriería Florida somos un equipo apasionado por brindar soluciones en vidrio con excelencia y compromiso. Con más de 20 años de trayectoria, nos especializamos en vidrio templado, espejos decorativos y doble vidriado hermético (DVH).",
          textoSecundario: "Nuestra misión es transformar tus espacios en lugares más seguros, modernos y elegantes. Trabajamos con materiales de primera calidad y un trato cercano para que vivas una experiencia única en cada proyecto."
        });
      });
  }, []);

  return (
    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }} id="quienes-somos">
      <div className="container animate__animated animate__fadeInUp">
        <div className="text-center mb-4">
          <h2 className="fw-bold">¿Quiénes Somos?</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <p className="lead text-center">{presentacion.textoPrincipal}</p>
            <p className="text-center">{presentacion.textoSecundario}</p>
            <div className="text-center mt-4">
              <a
          href="#productos"
          className="btn btn-lg px-3 py-2"
          style={{
            backgroundColor: "#8B0000",
            color: "white",
            boxShadow: "0 6px 20px rgba(0,0,0,0.5)",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#a30000")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#8B0000")}
        >
          Conocé nuestros productos
        </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QUIENESSOMOS;
