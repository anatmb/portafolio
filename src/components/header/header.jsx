import { NavLink, Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import "./header.css";
import logo from "../../assets/logo1.png";

import {
  faInstagramSquare,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  const navigate = useNavigate();
  const [scrollTarget, setScrollTarget] = useState(null);
  const navbarRef = useRef(null); // Referencia al menú colapsable

  useEffect(() => {
    if (scrollTarget) {
      const element = document.getElementById(scrollTarget);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setScrollTarget(null); // Limpiar el objetivo después de hacer scroll
    }
  }, [scrollTarget]);

  const handleScrollTo = (id) => {
    if (window.location.pathname !== "/") {
      navigate("/");
    }
    setScrollTarget(id); // Establece el objetivo de scroll
  };

  const handleLinkClick = (id) => {
    handleScrollTo(id); // Ejecuta el desplazamiento
    closeMenu(); // Cierra el menú
  };

  const closeMenu = () => {
    const navbar = navbarRef.current;
    if (navbar && navbar.classList.contains("show")) {
      navbar.classList.remove("show"); // Elimina la clase 'show' para cerrar el menú
    }
  };

  return (
 <header className="header">
  {/* Barra superior */}
  <div className="top-bar">
    <div className="container d-flex justify-content-between align-items-center">
      
      <span className="email">✉ akseweb@gmail.com</span>

      <div className="social-icons">
        {/* <a href="https://github.com/anatmb" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a> */}

        <a href="https://www.linkedin.com/in/anadeska-frontend/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>

        <a href="https://www.instagram.com/akseweb/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagramSquare} />
        </a>
      </div>

    </div>
  </div>

  {/* Navbar */}
  <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
    <div className="container">

      <Link className="navbar-brand" to="/" onClick={() => handleLinkClick("top")}>
        <img src={logo} alt="logo" className="logo" />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
        ref={navbarRef}
      >
        <ul className="navbar-nav">

          <li className="nav-item">
            <a
              className="nav-link"
              href="#id-about"
              onClick={() => handleLinkClick("id-about")}
            >
              Acerca
            </a>
          </li>

          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/projects"
              onClick={closeMenu}
            >
              Proyectos
            </NavLink>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              href="#id-service"
              onClick={() => handleLinkClick("id-service")}
            >
              Servicios
            </a>
          </li>

          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              to="/contact"
              onClick={closeMenu}
            >
              Contáctame
            </NavLink>
          </li>

        </ul>
      </div>

    </div>
  </nav>
</header>
  );
}

export default Header;
