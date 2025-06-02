// src/components/Carrusel.js

import { useState } from 'react';
import PropTypes from 'prop-types';
import './carrusel.css';

const Carrusel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const index = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const index = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  return (
    <div className="carrusel">
      <button className="carrusel-button prev" onClick={prevSlide}>‹</button>
      <div className="carrusel-content">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carrusel-item ${index === currentIndex ? 'active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>
      <button className="carrusel-button next" onClick={nextSlide}>›</button>
    </div>
  );
};

// ✅ Validación de props
Carrusel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Carrusel;