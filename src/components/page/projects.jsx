import React, { useState } from "react";
import "./projects.css";
import { NavLink, useNavigate } from "react-router-dom";
import imagen from "../../assets/project-01.png";
import imagen2 from "../../assets/project-02.png";
import imagen3 from "../../assets/project-03.png";
import imagen4 from "../../assets/project-04.png";
import imagen5 from "../../assets/project-05.png";
import imagen6 from '../../assets/project-06.png';
import imagen7 from '../../assets/project-07.png';
import project08 from "../../assets/project-08.png";
import project09 from "../../assets/project-09.png";

function Projects() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profesionales"); // pestaña activa por defecto

  const redirectToContactPage = () => {
    navigate("/contact");
  };

  return (
    <div>
      <div className="bg-body-tertiary">
        <h1 className="display-4 fw-normal text-body-emphasis">
          Algunos de mis proyectos
        </h1>
        <p className="fs-5 text-body-secondary">
          Realizados con tecnologías modernas y mejores prácticas de desarrollo
          web
        </p>

        {/* 🔹 Nav Tabs */}
        <ul className="nav nav-tabs justify-content-center mb-4">
          <li className="nav-item">
            <button
              className={`nav-link ${
                activeTab === "profesionales" ? "active" : ""
              }`}
              onClick={() => setActiveTab("profesionales")}
            >
              Profesionales
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${
                activeTab === "academicos" ? "active" : ""
              }`}
              onClick={() => setActiveTab("academicos")}
            >
              Académicos
            </button>
          </li>
        </ul>

        {/* 🔹 Contenido dinámico según pestaña */}
        <div className="container-project d-flex justify-content-center align-items-center">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
            {/* PROYECTOS PROFESIONALES */}
            {activeTab === "profesionales" && (
              <>
                {/* <div className="col mb-3">
                  <div className="card-container g-3">
                    <div className="card shadow-sm">
                      <NavLink to="#">
                        <img
                          src={imagen}
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
                    <p className="project-subtitule">
                      React, Bootstrap, Redux, Express, Postgresql
                    </p>
                  </div>
                </div> */}

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
                                   Landing page
                                  </h3>
                                  <p className="descripción-project">
                                    Gabriela Parada
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
                    <p className="project-subtitule">HTML, CSS, JavaScript</p>
                  </div>
                </div>

                <div className="col mb-3">
                  <div className="card-container g-3">
                    <div className="card shadow-sm">
                      <NavLink to="https://anatmb.github.io/Escueladecostura/">
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
                    <h3 className="project-titule py-2">Diseño de Interfaz (UI) para Servicios de Confección</h3>
                    <p className="project-subtitule px-2">Desarrollé el diseño integral centrado en la experiencia del usuario. Estructuré secciones estratégicas
                       para resaltar la calidad del trabajo artesanal, optimizando el flujo desde el interés hasta el contacto</p>
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
                    <p className="project-subtitule">Wordpress y Elementor</p>
                  </div>
                </div>
              </>
            )}

            {/* PROYECTOS ACADÉMICOS */}
            {activeTab === "academicos" && (
              <>
                    <div className="col mb-3">
                  <div className="card-container g-3">
                    <div className="card shadow-sm">
                      <NavLink to="https://frontendmentorcar.vercel.app/">
                        <img
                          src={imagen7}
                          className="img-fluid border project-image"
                          alt="Project 3"
                        />
                      </NavLink>
                      <div className="card_hover">
                        <NavLink to="https://frontendmentorcar.vercel.app/">
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
                      Lista de productos / carrito de compras
                    </h3>
                    <p className="project-subtitule">
                      React, CSS, Node js, Etc..
                    </p>
                  </div>
                </div>


                 <div className="col mb-3">
                  <div className="card-container g-3">
                    <div className="card shadow-sm">
                      <NavLink to="#">
                        <img
                          src={imagen}
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
                    <p className="project-subtitule">
                      React, Bootstrap, Redux, Express, Postgresql
                    </p>
                  </div>
                </div>

                
                <div className="col mb-3">
                  <div className="card-container g-3">
                    <div className="card shadow-sm">
                      <NavLink to="https://frontendfinal-d212e.web.app/">
                        <img
                          src={imagen3}
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
                      Proyecto académico (Portafolio)
                    </h3>
                    <p className="project-subtitule">
                      Angular, Bootstrap, SpringBoot, MySql
                    </p>
                  </div>
                </div>

                <div className="col mb-3">
                  <div className="card-container g-3">
                    <div className="card shadow-sm">
                      <NavLink to="https://pi-dogs-main-rose.vercel.app/">
                        <img
                          src={imagen4}
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
                    <h3 className="project-titule py-2">
                      App con API TheDogApi
                    </h3>
                    <p className="project-subtitule">
                      React, Redux, Sequelize, PostgreSQL
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* 🔹 Sección contacto */}
      <section className="contact-home">
        <div className="row">
          <div className="col-12">
            <h3>¿Listo para transformar tus ideas?</h3>
            <p>
              Estaré encantada de ayudarte a digitalizar con éxito tu negocio
            </p>
            <button className="btn-primary  px-5" onClick={redirectToContactPage}>
              Contáctame
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
