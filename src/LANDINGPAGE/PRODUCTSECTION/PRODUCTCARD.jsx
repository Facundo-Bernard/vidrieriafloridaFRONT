function PRODUCTCARD({ title, description, image }) {
    return (
      <div className="card h-100 shadow-lg product-card animate__animated animate__fadeInUp">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    );
  }
  
  export default PRODUCTCARD;
  