import React, { useEffect, useRef } from "react";
import "./NAVBAR.css";
import logo from "./../../assets/logoimagen.png";
import { Link, useNavigate } from "react-router-dom";

function NAVBAR() {
  const navigate = useNavigate();
  const navRef = useRef(null);

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

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    // Ajusta body paddingTop para que el contenido no quede debajo del navbar cuando nosotros aplicamos fixed en mobile.
    function adjustForMobile() {
      const isMobile = window.innerWidth <= 768;
      if (isMobile) {
        nav.classList.add("navbar-fixed-mobile");
        // usar la altura real del nav (incluye posible navbar expandido)
        const navHeight = nav.getBoundingClientRect().height;
        document.body.style.paddingTop = `${navHeight}px`;
      } else {
        nav.classList.remove("navbar-fixed-mobile");
        // limpiamos padding si lo pusimos
        if (document.body.style.paddingTop) {
          document.body.style.paddingTop = "";
        }
      }
    }

    // Chequeo rápido de ancestros que rompen sticky en móviles
    function warnIfAncestorHasTransform() {
      let el = nav.parentElement;
      while (el) {
        const s = getComputedStyle(el);
        if ((s.transform && s.transform !== "none") ||
            (s.filter && s.filter !== "none") ||
            (s.backdropFilter && s.backdropFilter !== "none")) {
          console.warn(
            "Sticky puede fallar en móviles: un ancestro tiene transform/filter/backdrop-filter. Elemento:",
            el
          );
          break;
        }
        el = el.parentElement;
      }
    }

    // init
    adjustForMobile();
    warnIfAncestorHasTransform();

    // listeners
    window.addEventListener("resize", adjustForMobile);
    window.addEventListener("orientationchange", adjustForMobile);

    // si el collapse cambia altura (ej. al abrir el menu), recalculamos padding
    const observer = new MutationObserver(() => {
      // recalcula por si el menú colapsable cambió el tamaño del navbar
      if (nav.classList.contains("navbar-fixed-mobile")) {
        const navHeight = nav.getBoundingClientRect().height;
        document.body.style.paddingTop = `${navHeight}px`;
      }
    });
    observer.observe(nav, { childList: true, subtree: true, attributes: true });

    return () => {
      window.removeEventListener("resize", adjustForMobile);
      window.removeEventListener("orientationchange", adjustForMobile);
      if (observer) observer.disconnect();
      // limpieza: quitar padding si quedó
      if (document.body.style.paddingTop) document.body.style.paddingTop = "";
    };
  }, []);

  return (
    <nav ref={navRef} className="navbar navbar-expand-lg sticky-top shadow-sm">
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
