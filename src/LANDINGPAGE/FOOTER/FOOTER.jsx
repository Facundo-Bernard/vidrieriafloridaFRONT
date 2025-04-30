import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./FOOTER.css";

function FOOTER() {
  return (
    <footer id="contacto" className="footer bg-dark text-white py-4 animate__animated animate__fadeInUp">
      <div className="container text-center">
        <h5 className="mb-3">¿Cómo contactarnos?</h5>
        <p>Usá nuestro número o redes sociales:</p>
        <p className="fw-bold">📞 +54 11 2713 5239</p>
        <div className="d-flex justify-content-center gap-4 mt-3">
          <a href="https://wa.me/54111527135239" target="_blank" rel="noopener noreferrer" className="text-white fs-3">
            <FaWhatsapp />
          </a>
          <a href="https://instagram.com/cristalesflorida" target="_blank" rel="noopener noreferrer" className="text-white fs-3">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer> 
  );
}

export default FOOTER;
