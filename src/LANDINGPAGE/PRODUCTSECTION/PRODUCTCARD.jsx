import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function PRODUCTCARD({ title, description, image }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="col-12 col-md-12 col-lg-12 d-flex">
        <motion.div
          className="card shadow-lg product-card animate__animated animate__fadeInUp w-100"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="image-container"
            onClick={() => setShowModal(true)}
            style={{ cursor: "pointer" }}
          >
            <img src={image} className="card-img-top" alt={title} />
            <div className="overlay"></div>
          </div>

          <div className="card-body d-flex flex-column">
            <h5 className="card-title text-truncate">{title}</h5>
            <p className="card-text text-truncate-multiline">{description}</p>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.img
              src={image}
              alt={title}
              className="modal-image"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .product-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          border-radius: 12px;
          overflow: hidden;
          transition: box-shadow 0.3s ease;
        }

        .product-card:hover {
          box-shadow: 0 12px 24px rgba(0,0,0,0.2);
        }

        .image-container {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.15);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .image-container:hover .overlay {
          opacity: 1;
        }

        .card-title {
          font-size: 1.2rem;
          font-weight: bold;
          color: brown;
          margin-bottom: 0.5rem;
        }

        .text-truncate-multiline {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 0.95rem;
        }

        .modal-backdrop {
          position: fixed;
          inset: 0; /* cubre toda la pantalla */
          background: rgba(0,0,0,0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1050;
        }

        .modal-image {
          max-width: 90%;
          max-height: 90%;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.5);
        }

        @media (max-width: 768px) {
          .image-container {
            aspect-ratio: 3 / 2;
          }
          .card-title {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
}

export default PRODUCTCARD;
