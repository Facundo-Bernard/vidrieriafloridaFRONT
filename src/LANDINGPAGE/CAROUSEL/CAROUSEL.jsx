import CAROUSEL1 from "../../assets/CAROUSEL1.jpg";
import CAROUSEL3 from "../../assets/CAROUSEL3.jpg";
import carouselirlfoto from "../../assets/carouselirlfoto.jpeg";

function CAROUSEL() {
  return (
    <section className="position-relative">
      {/* Overlay con degradado para dar contraste */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
 
      />

      {/* Texto principal sobre el carrusel */}
      <div
        className="position-absolute top-50 start-50 translate-middle text-center text-white p-5 shadow-lg"
        style={{
          zIndex: 10,
          backdropFilter: "blur(12px)",
          background: "rgba(0, 0, 0, 0.41)",
          borderRadius: "0.5rem",
          maxWidth: "90%",
          animation: "fadeIn 1.5s ease-in-out",
        }}
      >
        <h1
          className="display-3 fw-bold mb-3"
          style={{ textShadow: "0 4px 15px rgba(0,0,0,0.6)" }}
        >
          Vidriería Florida
        </h1>
        <p className="lead mb-4" style={{ fontSize: "1.3rem" }}>
          Expertos en vidrio templado, espejos decorativos y DVH para tu hogar o empresa.
        </p>
        <a
          href="#productos"
          className="btn btn-lg px-5 py-3"
          style={{
            backgroundColor: "#8B0000",
            color: "white",
            boxShadow: "0 6px 20px rgba(0,0,0,0.5)",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#a30000")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#8B0000")}
        >
          Ver productos
        </a>
      </div>

      {/* Carousel */}
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="4000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={CAROUSEL1}
              className="d-block w-100"
              alt="Vidrio"
              style={{ height: "70vh", objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={carouselirlfoto}
              className="d-block w-100"
              alt="Espejo"
              style={{ height: "70vh", objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={CAROUSEL3}
              className="d-block w-100"
              alt="DVH"
              style={{ height: "70vh", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Botones de navegación personalizados */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
          style={{ zIndex: 20 }}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
            style={{
              filter: "invert(1) drop-shadow(0 0 5px rgba(255,255,255,0.8))",
            }}
          />
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
          style={{ zIndex: 20 }}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
            style={{
              filter: "invert(1) drop-shadow(0 0 5px rgba(255,255,255,0.8))",
            }}
          />
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </section>
  );
}

export default CAROUSEL;
