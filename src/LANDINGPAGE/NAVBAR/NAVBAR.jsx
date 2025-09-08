import "./NAVBAR.css";
import logo from "./../../assets/logoimagen.png";
import { Link, useNavigate } from "react-router-dom";

function NAVBAR() {
  const navigate = useNavigate();

  const handleProductosClick = (e) => {
    e.preventDefault();
    navigate("/"); // navegamos a home primero
    setTimeout(() => {
      const element = document.getElementById("productos");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top shadow-sm">
      <div className="container">
        {/* Logo + Brand */}
        <Link to="/" className="d-flex align-items-center text-decoration-none">
          <img
            src={logo}
            alt="Logo"
            className="navbar-logo"
          />
          <span className="navbar-brand ms-2">Vidriería Florida</span>
        </Link>

        {/* Botón toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href="/#productos"
                onClick={handleProductosClick}
              >
                Productos
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactanos">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NAVBAR;
