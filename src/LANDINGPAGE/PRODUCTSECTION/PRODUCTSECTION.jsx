import { useEffect, useState } from "react";
import PRODUCTCARD from "./PRODUCTCARD";

const backendUrl = "http://vidrieriafloridabackend-production.up.railway.app"; // cambiá esto si tu URL es distinta

function ProductsSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const intervalo = setInterval(() => {
      fetch(`${backendUrl}/product`)
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => console.error("Error al cargar productos:", err));
    }, 2000); // cada 2 segundos

    return () => clearInterval(intervalo); // limpiar intervalo al desmontar
  }, []);

  return (
    <section id="productos" className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="mb-4">Nuestros Productos</h2>
        <div className="row">
          {products.map((p, idx) => (
            <div className="col-md-4 mb-4" key={idx}>
              <PRODUCTCARD title={p.title} description={p.description} image={p.image} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;
