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
      <header className="container-content ">
        <div className="texto-derecha">
          <h3>Anadeska Meléndez</h3>
          <h1>Diseño web que conecta con tu audiencia</h1>
          <p>
            Creo experiencias digitales excepcionales que combinan diseño
            elegante con funcionalidad perfecta para hacer crecer tu negocio.
          </p>
          <div className="btn">
            <button className="btn-primary px-5" onClick={redirectToContactPage}>
              Contáctame
            </button>
            <button className="btn-outline px-5" onClick={redirectToProyectPage}>
              Ver trabajos
            </button>
          </div>
        </div>
      </header>
      {/*               
            <section className=" tecnologias d-flex justify-content-center align-items-center flex-column">
                   <h1 className="text-center titulo-tecnologia">Herramientas que utilizo</h1>
                <div className="grid-container1">
                    <div className="item2" style={{ backgroundColor: '#0E1975' , borderRadius: '8px'  }}>
                    <img src={js} alt="JavaScript" />
                    </div>
                    <div className="item2" style={{ backgroundColor: '#0E1975', borderRadius: '8px' }}>
                    <img src={react} alt="React" />
                    </div>
                    <div className="item2" style={{ backgroundColor: '#0E1975', borderRadius: '8px' }}>
                    <img src={html} alt="HTML" />
                    </div>
                    <div className="item2" style={{ backgroundColor: '#0E1975', borderRadius: '8px' }}>
                    <img src={css} alt="CSS" />
                    </div>
                    <div className="item2" style={{ backgroundColor: '#0E1975', borderRadius: '8px' }}>
                    <img src={redux} alt="CSS" />
                    </div>
                     <div className="item2" style={{ backgroundColor: '#0E1975', borderRadius: '8px' }}>
                    <img src={boo} alt="CSS" />
                    </div>
                </div>
            </section> */}
      {/* <div className="col-12 col-lg-10 m-auto py-5 p-4">
              
                <ul className="nav nav-pills nav-fill rounded border border-2 border-black mb-5">
                    <li className="nav-item">
                        <button className="nav-link active titule-habilidades" data-bs-toggle="pill" data-bs-target="#tab-1">Metodología de trabajo</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link titule-habilidades" data-bs-toggle="pill" data-bs-target="#tab-2">Habilidades Técnicas</button>
                    </li>
                </ul>
                <div className="tab-content">

                    <div id="tab-1" className="tab-pane fade show active">
                        <div className="row gy-4">

                            <div className="col-md-6 text-bg">
                                <h6>Planificación y Análisis de Requisitos</h6>
                                <ul className="list">
                                    <li>Reunión con el equipo o cliente para discutir los objetivos del proyecto.</li>
                                    <li>Análisis de diseños, wireframes, y especificaciones técnicas.</li>
                                    <li>Definición de tecnologías y herramientas (React, Bootstrap, etc.).</li>
                                    <li>Establecimiento de un cronograma de desarrollo.</li>
                                </ul>
                            </div>
                            <div className="col-md-6 text-bg">
                                <h6>Diseño y Prototipado</h6>
                                <ul className="list">
                                    <li>Colaboración con diseñadores UX/UI para crear prototipos.</li>
                                    <li>Garantizar que el diseño sea responsivo y accesible.</li>
                                    <li>Recepción de retroalimentación y ajustes según sea necesario.</li>
                                    <li>Documentación de decisiones de diseño para referencia futura.</li>
                                </ul>
                            </div>
                            <div className="col-md-6 text-bg">
                                <h6>Desarrollo</h6>
                                <ul className="list">
                                    <li>Escritura de código HTML, CSS, y JavaScript según el diseño aprobado.</li>
                                    <li>Implementación de componentes reutilizables.</li>
                                    <li>Pruebas de compatibilidad en diferentes navegadores y dispositivos.</li>
                                    <li>Iteración rápida basada en pruebas y revisiones internas.</li>
                                </ul>
                            </div>
                            <div className="col-md-6 text-bg">
                                <h6>Pruebas, Optimización y Entrega</h6>
                                <ul className="list">
                                    <li>Realización de pruebas unitarias y de integración.</li>
                                    <li>Optimización del rendimiento del sitio web o aplicación.</li>
                                    <li>Solución de errores detectados durante las pruebas.</li>
                                    <li>Preparación y entrega final del proyecto, incluida la documentación.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div id="tab-2" className="tab-pane fade">
                        <div className="row gy-4">
                            <div className="col-md-6 text-bg list">
                                <h6>React, Redux, CSS3, JavaScript, Node, Express, PostgreSQL, Sequelize</h6>
                                <p>Refuerzo de conocimientos en 2024</p>
                            </div>
                            <div className="col-md-6 text-bg list">
                                <h6>React, Redux, CSS3, JavaScript, Node, Express, PostgreSQL, Sequelize</h6>
                                <p>Experiencia adquirida en 2023</p>
                            </div>
                            <div className="col-md-6 text-bg list">
                                <h6>Angular, CSS3, Bootstrap, Node, Spring Boot, Java, MySQL</h6>
                                <p>Experiencia adquirida en 2022</p>
                            </div>
                            <div className="col-md-6 text-bg list">
                                <h6>Gestión de Proyectos</h6>
                                <p>Experiencia en 2021</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         */}

      {/* <div className="formacion" id="educacion">
                <div className="educacion1 container-educacion">
                    <h1 className="text-center titulo-formacion">Formación académica</h1>
                    <br /><br />
                    <div className="educacion">
                        <div className="cont-expert">
                            <img src={education} alt="" />
                            <br />
                            <h3 className="n-expert subtitulo">UDO</h3>
                            <p className="parrafo">Ingeníera en Computación</p>
                        </div>
                        <div className="cont-expert">
                            <img src={education2} alt="" />
                             <br />
                            <h3 className="n-expert subtitulo">Alura</h3>
                            <p className="parrafo">Desarrollador web</p>
                        </div>
                        <div className="cont-expert">
                            <img src={education3} alt="" />
                             <br />
                            <h3 className="n-expert subtitulo">Cessi</h3>
                            <p className="parrafo">Developer Full Stack</p>
                        </div>
                        <div className="cont-expert">
                            <img src={education4} alt="" />
                             <br />
                            <h3 className="n-expert subtitulo">Henry</h3>
                            <p className="parrafo">Developer Full Stack</p>
                        </div>
                    </div>
                </div>
            </div> */}
      <section className="service" id="id-service">
        <div className="col-8 service-titulo">
          <h1 className="titulo-service ">Servicios que transforman tu presencia digital</h1>

          <p className="p-service">
           Ofrecemos soluciones integrales de diseño y desarrollo web, adaptadas a las necesidades únicas de tu negocio.
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
          <h1 className="display-4">
            Algunos Proyectos
          </h1>
          <p className="fs-5 project-subtitule">
           Cada proyecto es una historia de éxito. Descubre cómo hemos ayudado a nuestros clientes a alcanzar sus objetivos digitales.
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
                        src={project01}
                        className="img-fluid project-image"
                        alt="Project 1"
                      />
                    </NavLink>
                    <div className="card_hover">
                      <NavLink to="https://shoe-kingdom-ae164.web.app/index.html">
                        <button className="boton1">
                          <i
                            className="fa fa-external-link"
                            aria-hidden="true"
                          ></i>
                        </button>
                      </NavLink>
                    </div>
                  </div>
                  <h3 className="project-titule py-2">E-ecommerce</h3>
                  <p className="descripción-project">
                    React, Bootstrap, Redux, HTML, CSS, Express, Postgresql
                  </p>
                </div>
              </div>

              <div className="col mb-3 ">
                <div className="card-container g-3">
                  <div className="card shadow-sm">
                    <NavLink to="#">
                      <img
                        src={project03}
                        className="img-fluid border project-image"
                        alt="Project 3"
                      />
                    </NavLink>
                    <div className="card_hover">
                      <NavLink to="https://frontendfinal-d212e.web.app/">
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
                    Proyecto academico(Portafolio)
                  </h3>
                  <p className="descripción-project">
                    Angular, Bootstrap, springBoot, MySql
                  </p>
                </div>
              </div>

              <div className="col mb-3">
                <div className="card-container g-3">
                  <div className="card shadow-sm">
                    <NavLink to="https://pi-dogs-main-rose.vercel.app/">
                      <img
                        src={project04}
                        className="img-fluid border project-image"
                        alt="Project 4"
                      />
                    </NavLink>
                    <div className="card_hover">
                      <NavLink to="https://pi-dogs-main-rose.vercel.app/">
                        <button className="boton1">
                          <i
                            className="fa fa-external-link"
                            aria-hidden="true"
                          ></i>
                        </button>
                      </NavLink>
                    </div>
                  </div>
                  <h3 className="project-titule py-2">Acceso api TheDogApi</h3>
                  <p className="descripción-project">
                    React, redux, Bootstrap, HTML, CSS, Sequelize, PostgreSQL
                  </p>
                </div>
              </div>
              <div className="col mb-3">
                <div className="card-container g-3">
                  <div className="card shadow-sm">
                    <NavLink to="#">
                      <img
                        src={imagen2}
                        className="img-fluid border project-image"
                        alt="Project 2"
                      />
                    </NavLink>
                    <div className="card_hover">
                      <NavLink to="https://anatmb.github.io/Escueladecostura/">
                        <button className="boton1">
                          <i
                            className="fa fa-external-link"
                            aria-hidden="true"
                          ></i>
                        </button>
                      </NavLink>
                    </div>
                  </div>
                  <h3 className="project-titule py-2">One Page</h3>
                  <p className="descripción-project">HTML, CSS y JavaScript</p>
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
                    Landing page Hexalamp3D
                  </h3>
                  <p className="descripción-project">HTML, CSS, JavaScript</p>
                </div>
              </div>

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
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-home">
        <div className="row">
          <div className="col-12">
            <h3>¿Listo para transformar tu presencia digital?</h3>
            <p>
            Conversemos sobre tu proyecto. Ofrecemos una consulta gratuita para entender tus necesidades y proponer la mejor solución.
            </p>

            <button className="btn3 px-5 btn-primary" onClick={redirectToContactPage}>
              Contáctame
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default content;
