import "./content.css";

// import Carrusel from "../carrusel/carrusel"

import js from "../../assets/img-js.png";
import react from "../../assets/react.png";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import redux from "../../assets/redux.png";
import boo from "../../assets/boo.png";

// import imagen22 from '../../assets/about.jpg';
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import project01 from "../../assets/project-01.png";
// import project02 from '../../assets/project-02.png';
import imagen2 from "../../assets/project-02.png";
import project03 from "../../assets/project-03.png";
import project04 from "../../assets/project-04.png";
import project08 from "../../assets/project-08.png";
import project09 from "../../assets/project-09.png";
import imagen5 from "../../assets/project-05.png";
import imagen6 from "../../assets/project-06.png";
// import Marquee from 'react-fast-marquee';
import education from "../../assets/3.png";
import education3 from "../../assets/2.png";
import education2 from "../../assets/4.png";
import education4 from "../../assets/5.png";
// import { useLocation } from 'react-router-dom';
// import React, { useEffect } from 'react';

function content() {
  const navigate = useNavigate();

  const redirectToServicesPage = () => {
    navigate("/services"); // Reemplaza '/services' con la ruta a tu página de servicios
  };

  const redirectToContactPage = () => {
    navigate("/contact"); // Reemplaza '/contact' con la ruta a tu página de contacto
  };

  const redirectToProyectPage = () => {
    navigate("/projects"); // Reemplaza '/services' con la ruta a tu página de servicios
  };

  return (
    <>
      <header className="hero">
        <div className="blur-circle blur1"></div>
        <div className="blur-circle blur2"></div>
        <div className="hero-container">
          <h3 className="hero-name">Anadeska Meléndez</h3>

          <h1 className="hero-title">
            Diseño web que conecta con tu audiencia
          </h1>

          <p className="hero-description">
            Creo experiencias digitales excepcionales que combinan diseño
            elegante con funcionalidad perfecta para hacer crecer tu negocio.
          </p>

          <div className="hero-buttons">
            <button
              className="btn-primary px-5"
              onClick={redirectToContactPage}
            >
              {" "}
              Contáctame{" "}
            </button>
            <button
              className="btn-outline px-5"
              onClick={redirectToProyectPage}
            >
              {" "}
              Ver trabajos{" "}
            </button>
          </div>
        </div>
      </header>

      <section className="service" id="id-service">
        <div className=" service-titulo">
          <h1 className="titulo-service ">
            Servicios que transforman tu presencia digital
          </h1>

          <p className="p-service">
            Ofrecemos soluciones integrales de diseño y desarrollo web,
            adaptadas a las necesidades únicas de tu negocio.
          </p>
        </div>
        <div className="container-services">
          <div className="item">
            <div>
              <i
                className="fa fa-user-circle icono-service"
                aria-hidden="true"
              ></i>
            </div>
            <h3 className="titulo-servicio">
              Desarrollo de interfaces de usuario (UI){" "}
            </h3>
            <p className="descripcion-servicio">
              Creación de la apariencia visual de una aplicación web o móvil
              utilizando tecnologías como HTML, CSS y JavaScript.
            </p>
            {/* <div><button className='button-service' onClick={openModal}><i className="fa fa-eye" aria-hidden="true"></i></button></div> */}
          </div>
          <div className="item">
            <div>
              <i className="fa fa-mobile icono-service" aria-hidden="true"></i>
            </div>
            <h3 className="titulo-servicio">Sitios web responsivos</h3>
            <p className="descripcion-servicio">
              Desarrollo de sitios web que se adaptan y funcionan bien en una
              variedad de dispositivos y tamaños de pantalla, incluyendo
              computadoras de escritorio, tabletas y teléfonos móviles.
            </p>
            {/* <div><button className='button-service' onClick={openModal2}><i className="fa fa-eye" aria-hidden="true"></i></button></div> */}
          </div>
          <div className="item">
            <div>
              <i
                className="fa fa-line-chart icono-service"
                aria-hidden="true"
              ></i>
            </div>
            <h3 className="titulo-servicio">Optimización de rendimiento</h3>
            <p className="descripcion-servicio">
              {" "}
              Mejora del rendimiento de la aplicación optimizando el código
              frontend, el tiempo de carga de la página y la eficiencia de los
              recursos.
            </p>
            {/* <div><button className='button-service' onClick={openModal3}><i className="fa fa-eye" aria-hidden="true"></i></button></div> */}
          </div>
          <div className="item">
            <div>
              <i className="fa fa-cloud icono-service" aria-hidden="true"></i>
            </div>
            <h3 className="titulo-servicio">Integración de API </h3>
            <p className="descripcion-servicio">
              {" "}
              Conexión de la interfaz de usuario con servicios externos y APIs
              para acceder y mostrar datos dinámicos en la aplicación.
            </p>
            {/* <div><button className='button-service' onClick={openModal4}><i className="fa fa-eye" aria-hidden="true"></i></button></div> */}
          </div>
          <div className="item">
            <div>
              <i className="fa fa-cogs icono-service" aria-hidden="true"></i>
            </div>
            <h3 className="titulo-servicio">Mantenimiento y actualización</h3>
            <p className="descripcion-servicio">
              {" "}
              Realización de tareas de mantenimiento continuo, corrección de
              errores y actualización de la interfaz de usuario.
            </p>
            {/* <div><button className='button-service' onClick={openModal5}><i className="fa fa-eye" aria-hidden="true"></i></button></div> */}
          </div>
          <div className="item">
            <div>
              <i
                className="fa fa-location-arrow icono-service"
                aria-hidden="true"
              ></i>
            </div>

            <h3 className="titulo-servicio">
              {" "}
              Des. de experiencia del usuario (UX)
            </h3>
            <p className="descripcion-servicio">
              {" "}
              Mejoro la experiencia del usuario creando interfaces intuitivas,
              navegaciones fluidas y diseños atractivos que impulsan la
              conversión y usabilidad.
            </p>
            {/* <div><button className='button-service' onClick={openModal1}><i className="fa fa-eye" aria-hidden="true"></i></button></div> */}
          </div>
        </div>
      </section>

      <section className="proyect">
        <div className="album">
          <h1 className="display-4">Algunos Proyectos</h1>
          <p className="fs-5 project-subtitule">
            Cada proyecto es una historia de éxito. Descubre cómo hemos ayudado
            a nuestros clientes a alcanzar sus objetivos digitales.
          </p>
          <button className="px-5 btn-outline" onClick={redirectToProyectPage}>
            Ver más proyectos
          </button>

          <div className="container-project d-flex justify-content-center align-items-center">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">

              <div className="col mb-3 ">
                <div className="card-container g-3">
                  <div className="card shadow-sm">
                    <NavLink to="#">
                      <img
                        src={project08}
                        className="img-fluid border project-image"
                        alt="Project 3"
                      />
                    </NavLink>
                    <div className="card_hover">
                      <NavLink to="https://gabriela-parada.vercel.app/">
                        <button className="boton1">
                          <i
                            className="fa fa-external-link"
                            aria-hidden="true"
                          ></i>
                        </button>
                      </NavLink>
                    </div>
                  </div>
                  <h3 className="project-titule py-2">
                    Landing Page de Marca Personal y Conversión de Servicios
                  </h3>
                  <p className="descripción-project px-2">
                    Diseño y desarrollo de una plataforma centrada en el usuario
                    para una profesional de la salud. El objetivo principal fue
                    centralizar la propuesta de valor y facilitar la reserva de
                    citas. Implementé una interfaz intuitiva con altos
                    estándares
                  </p>
                </div>
              </div>

              <div className="col mb-3 ">
                <div className="card-container g-3">
                  <div className="card shadow-sm">
                    <NavLink to="#">
                      <img
                        src={project09}
                        className="img-fluid border project-image"
                        alt="Project 3"
                      />
                    </NavLink>
                    <div className="card_hover">
                      <NavLink to="https://arepagrill.vercel.app/">
                        <button className="boton1">
                          <i
                            className="fa fa-external-link"
                            aria-hidden="true"
                          ></i>
                        </button>
                      </NavLink>
                    </div>
                  </div>
                  <h3 className="project-titule py-2">
                    Aplicación Fullstack para Gestión de Negocio Gastronómico
                  </h3>
                  <p className="descripción-project px-2">
                  Solución Fullstack gastronómica con backend. Digitalicé el menú y optimicé pedidos,
                   resolviendo necesidades operativas reales. Un producto funcional 
                   que une lógica de negocio con una interfaz eficiente.
                  </p>
                </div>
              </div>

              <div className="col mb-3">
                <div className="card-container g-3">
                  <div className="card shadow-sm">
                    <NavLink to="https://impresion3-d.vercel.app/">
                      <img
                        src={imagen5}
                        className="img-fluid border project-image"
                        alt="Project 5"
                      />
                    </NavLink>
                    <div className="card_hover">
                      <NavLink to="https://impresion3-d.vercel.app/">
                        <button className="boton1">
                          <i
                            className="fa fa-external-link"
                            aria-hidden="true"
                          ></i>
                        </button>
                      </NavLink>
                    </div>
                  </div>
                  <h3 className="project-titule py-2">
                    Landing Page para Servicios Tecnológicos y Proyectos 3D
                  </h3>
                  <p className="descripción-project px-2">
                    Sitio web corporativo para servicios 3D. Implementé una arquitectura liviana que prioriza imágenes de alta 
                    calidad sin sacrificar velocidad. Creé un canal de contacto profesional alineado con una estética tecnológica.
                  </p>
                </div>
              </div>
              {/* 
              <div className="col mb-3">
                <div className="card-container g-3">
                  <div className="card shadow-sm">
                    <NavLink to="https://bijaorestaurant.com/">
                      <img
                        src={imagen6}
                        className="img-fluid border project-image"
                        alt="Project 5"
                      />
                    </NavLink>
                    <div className="card_hover">
                      <NavLink to="https://bijaorestaurant.com/">
                        <button className="boton1">
                          <i
                            className="fa fa-external-link"
                            aria-hidden="true"
                          ></i>
                        </button>
                      </NavLink>
                    </div>
                  </div>
                  <h3 className="project-titule py-2">Bijao</h3>
                  <p className="descripción-project">Wordpress y Elementor</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="contact-home">
        <div className="row">
          <div className="col-12">
            <h3>¿Listo para transformar tu presencia digital?</h3>
            <p>
              Conversemos sobre tu proyecto. Ofrecemos una consulta gratuita
              para entender tus necesidades y proponer la mejor solución.
            </p>

            <button
              className="btn3 px-5 btn-primary"
              onClick={redirectToContactPage}
            >
              Contáctame
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default content;
