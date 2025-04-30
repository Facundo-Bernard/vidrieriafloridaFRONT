import CAROUSEL1 from "../../assets/CAROUSEL1.jpg";
import CAROUSEL3 from "../../assets/CAROUSEL3.jpg";
import carouselirlfoto from "../../assets/carouselirlfoto.jpeg";

function CAROUSEL() {
  return (
    <section className="position-relative">
      {/* Texto encima del carousel */}
      <div
        className="position-absolute top-50 start-50 translate-middle text-center p-4"
        style={{
          zIndex: 10,
          background: "rgba(240,240,240,0.7)",
          borderRadius: "1rem",
          maxWidth: "90%",
        }}
      >
        <h1 className="display-5 fw-bold">Vidriería Florida</h1>
        <p className="lead">
          Expertos en vidrio templado, espejos decorativos y DVH para tu hogar o empresa.
        </p>
        <a href="#productos" className="btn btn-dark btn-lg mt-2">
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
              style={{ height: "60vh", objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={carouselirlfoto}
              className="d-block w-100"
              alt="Espejo"
              style={{ height: "60vh", objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={CAROUSEL3}
              className="d-block w-100"
              alt="DVH"
              style={{ height: "60vh", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Botones de navegación */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </section>
  );
}

export default CAROUSEL;
