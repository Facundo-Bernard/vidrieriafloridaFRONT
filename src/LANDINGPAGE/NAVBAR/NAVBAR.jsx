import "./NAVBAR.css";
import logo from "./../../assets/logoimagen.png"
import { Link } from "react-router-dom";

function NAVBAR() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark pt-3  fixed-top shadow">
        <div className="container">
          <img
      src={logo}
      alt="Logo"
      className="d-inline-block align-text-top"
      style={{
        objectFit: "cover",
        objectPosition: "center",
        height: "80px",
        overflow: "hidden",
        borderRadius: "4px"
      }}
    />
          <a className="navbar-brand fs-3 fw-bold" href="#">Vidriería Florida</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#productos">Productos</a></li>
              <li className="nav-item"><a className="nav-link" href="#contacto"><Link to="/contactanos">contacto</Link> </a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  
  export default NAVBAR;
  