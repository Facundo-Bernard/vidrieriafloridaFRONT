import React, { useEffect, useState } from 'react';

const API_URL = 'http://localhost:8080/api/presentacion';

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
              <a href="#productos" className="btn btn-dark">
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
