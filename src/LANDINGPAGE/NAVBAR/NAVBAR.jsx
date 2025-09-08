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
    }, 50); // pequeño delay para que se renderice la home
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark pt-3 fixed-top shadow">
      <div className="container">
        <Link to="/" className="d-flex align-items-center text-decoration-none">
          <img
            src={logo}
            alt="Logo"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              height: "80px",
              overflow: "hidden",
              borderRadius: "4px",
            }}
          />
          <span className="navbar-brand fs-3 fw-bold ms-2">Vidriería Florida</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
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
