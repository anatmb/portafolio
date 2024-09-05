import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const location = useLocation(); // Obtén la ubicación actual

  useEffect(() => {
    window.scrollTo(0, 0); // Hace scroll al inicio de la página cada vez que la ruta cambie
  }, [location]);

  return null; // Este componente no necesita renderizar nada
}

export default ScrollToTop;