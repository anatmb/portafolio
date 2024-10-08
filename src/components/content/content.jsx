
import './content.css'
import imagen from '../../assets/perfil.jpg';
import imagen2 from '../../assets/perfil1.png';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import project01 from '../../assets/project-01.png';
import project02 from '../../assets/project-02.png';
import project03 from '../../assets/project-03.png';
import project04 from '../../assets/project-04.png';
import Marquee from 'react-fast-marquee';
import education from '../../assets/3.png';
import education3 from '../../assets/2.png';
import education2 from '../../assets/4.png';
import education4 from '../../assets/5.png';
import { useState } from "react";
import Modal from '../modal/modal';
import { useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';



function content() {

    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
    const [showModal4, setShowModal4] = useState(false);
    const [showModal5, setShowModal5] = useState(false);



    const openModal = () => setShowModal(true); // Función para abrir el modal
    const closeModal = () => setShowModal(false); // Función para cerrar el modal

    const openModal1 = () => setShowModal1(true); // Función para abrir el modal
    const closeModal1 = () => setShowModal1(false); // Función para cerrar el modal

    const openModal2 = () => setShowModal2(true); // Función para abrir el modal
    const closeModal2 = () => setShowModal2(false); // Función para cerrar el modal

    const openModal3 = () => setShowModal3(true); // Función para abrir el modal
    const closeModal3 = () => setShowModal3(false); // Función para cerrar el modal

    const openModal4 = () => setShowModal4(true); // Función para abrir el modal
    const closeModal4 = () => setShowModal4(false); // Función para cerrar el modal

    const openModal5 = () => setShowModal5(true); // Función para abrir el modal
    const closeModal5 = () => setShowModal5(false); // Función para cerrar el modal

    const redirectToServicesPage = () => {
        navigate('/services'); // Reemplaza '/services' con la ruta a tu página de servicios
    };

    const redirectToContactPage = () => {
        navigate('/contact'); // Reemplaza '/contact' con la ruta a tu página de contacto
    };

    const redirectToProyectPage = () => {
        navigate('/projects'); // Reemplaza '/services' con la ruta a tu página de servicios
    };


    return (
        <>

            <main className="container-content" id="top">
                <div className='row '>
                    <div className='col-lg-6 mb-4   right-content'>
                        <img className="photo-content" src={imagen} alt="" />
                    </div>
                    <div className=' col-lg-6 left-content'>
                        <h1 className='title-content'>
                            Anadeska Meléndez
                        </h1>

                        <h2 className='d-flex justify-content-center align-items-center'><span className='paragraph-nombre'> Desarrollador Frontend </span></h2>
                        {/* <p className='paragraph-content'>
                            Como desarrollador frontend, mi pasión radica en convertir ideas en experiencias digitales cautivadoras y funcionales, con un enfoque en la creación de interfaces de usuario atractivas y fáciles de usar.
                        </p> */}
                        <div className='row'>
                            <div className='col-12 col-lg-12' >
                                <ul className="list-unstyled d-flex justify-content-center align-items-center">
                                    <li className="me-3">
                                        <a href="https://github.com/anatmb" target="_blank" rel="noopener noreferrer" className='iconos'>
                                            <i className="fa fa-github-square " aria-hidden="true"></i>
                                        </a>
                                    </li>

                                    <li className="me-3">
                                        <a href="https://www.linkedin.com/in/anadeska-mel%C3%A9ndez-a134841b2/" target="_blank" rel="noopener noreferrer" className='iconos'>
                                            <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <a
                                href="public/cv.pdf" // Reemplaza esto con la ruta a tu archivo
                                download="cv.pdf" // Nombre con el que se descargará el archivo
                            >
                                <button className="btn1 px-4 mr-2" >
                                    Descargar CV
                                </button>
                            </a>
                            <button className="btn1  px-4" onClick={redirectToContactPage}>Contáctame</button>
                        </div>
                    </div>

                </div>
            </main>

            <section className='about pt-5' id='id-about'>
                <div className='row  container ' >
                    <div className=" col-12  col-lg-6 left-main justify-content-center align-items-center">
                        <h1 className='title-main-about'>Anadeska Meléndez</h1>
                        <p className='paragraph-main-about' >Al elegir mis servicios, puedes esperar un sitio web que no solo impresionará a tus visitantes desde el primer momento, sino que también estará optimizado para la velocidad, la accesibilidad y el SEO.</p>
                        <br />
                        <div className="d-flex align-items-center justify-content-center ">

                            <button className="btn2 px-5" onClick={redirectToContactPage} >Contáctame</button>

                        </div>
                    </div>

                    <div className='col-12 col-lg-6 p-4 '>
                        <img className="photo-main" src={imagen2} alt="" />
                    </div>


                </div>
            </section>

            <div className="col-12 col-lg-10 m-auto py-5">
                <h2 className="titule-habilidades">Habilidades y Metodología</h2>


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

            <div className="formacion" id="educacion">
                <div className="educacion1 container-educacion">
                    <h1 className="text-center titulo-formacion">Formación académica</h1>
                    <br /><br />
                    <div className="educacion">
                        <div className="cont-expert">
                            <img src={education} alt="" />
                            <h3 className="n-expert subtitulo">UDO</h3>
                            <p className="parrafo">Ingeníera en Computación</p>
                        </div>
                        <div className="cont-expert">
                            <img src={education2} alt="" />
                            <h3 className="n-expert subtitulo">Alura</h3>
                            <p className="parrafo">Desarrollador web</p>
                        </div>
                        <div className="cont-expert">
                            <img src={education3} alt="" />
                            <h3 className="n-expert subtitulo">Cessi</h3>
                            <p className="parrafo">Developer Full Stack</p>
                        </div>
                        <div className="cont-expert">
                            <img src={education4} alt="" />
                            <h3 className="n-expert subtitulo">Henry</h3>
                            <p className="parrafo">Developer Full Stack</p>
                        </div>
                    </div>
                </div>
            </div>


            <section className='proyect'>
                <div className="album py-5 bg-body-tertiary">
                    <h1 className="display-4 fw-normal text-body-emphasis proyect-titule">Algunos Proyectos</h1>
                    <p className="fs-5 text-body-black">Realizados con tecnologías modernas y mejores prácticas de desarrollo web</p>
                    <div className="container-project d-flex justify-content-center align-items-center">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                            <div className="col mb-3 ">
                                <div className='card-container g-3'>
                                    <div className="card shadow-sm">
                                        <NavLink to="#"><img src={project01} className="img-fluid project-image" alt="Project 1" /></NavLink>
                                        <div className='card_hover'>
                                            <NavLink to="https://shoe-kingdom-ae164.web.app/index.html"><button className='boton1'><i className="fa fa-external-link" aria-hidden="true"></i></button></NavLink>
                                        </div>
                                    </div>
                                    <h3 className='project-titule py-2'>E-ecommerce</h3>
                                    <p className='project-subtitule'>React, Bootstrap, Redux, HTML, CSS, Express, Postgresql</p>
                                </div>
                            </div>

                            <div className="col mb-3 ">
                                <div className="card-container g-3">
                                    <div className="card shadow-sm">
                                        <NavLink to="#"><img src={project03} className="img-fluid border project-image" alt="Project 3" /></NavLink>
                                        <div className='card_hover'>
                                            <NavLink to="https://frontendfinal-d212e.web.app/"><button className='boton1'><i className="fa fa-external-link" aria-hidden="true"></i></button></NavLink>
                                        </div>
                                    </div>
                                    <h3 className='project-titule py-2'>Proyecto academico(Portafolio)</h3>
                                    <p className='project-subtitule'>Angular, Bootstrap, springBoot, MySql</p>
                                </div>
                            </div>

                            <div className="col mb-3">
                                <div className="card-container g-3">
                                    <div className="card shadow-sm">
                                        <NavLink to="https://pi-dogs-main-rose.vercel.app/"><img src={project04} className="img-fluid border project-image" alt="Project 4" /></NavLink>
                                        <div className='card_hover'>
                                            <NavLink to="https://pi-dogs-main-rose.vercel.app/"><button className='boton1'><i className="fa fa-external-link" aria-hidden="true"></i></button></NavLink>
                                        </div>
                                    </div>
                                    <h3 className='project-titule py-2'>Acceso api TheDogApi</h3>
                                    <p className='project-subtitule'>React, redux, Bootstrap, HTML, CSS, Sequelize, PostgreSQL</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="d-flex justify-content-center align-items-center">

                        <button className="btn1  px-4" onClick={redirectToProyectPage}>Ver más</button>
                    </div>


                </div>

            </section>


            {/* <section className='marque-wrapper banner'>
                <div className="container">
                    <div className="row justify-content-center m-0 m-0">
                        <div className="col-12 col-md-8">
                            <div className="marquee-inner-wrapper card-wrapper">
                                <Marquee gradientWidth={60} className='d-flex'>
                                    <div className='mx-4 w-35'>
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" alt="react logo" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" height="40" alt="angularjs logo" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" alt="nodejs logo" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" height="40" alt="redux logo" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height="40" alt="express logo" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" height="40" alt="postgresql logo" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" height="40" alt="sequelize logo" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40" alt="html5 logo" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="40" alt="css3 logo" />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" height="40" alt="bootstrap logo" />
                                    </div>
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className='service py-4' id='id-service'>
                <div className="col-12 service-titulo">
                    <h1 className="titulo-service ">Puedo ayudarte</h1>

                    <p className="about-service">
                        Construir experiencias digitales que inspiran y conectan.
                    </p>
                </div>
                <div className="container-services">
                    <div className="item">
                        <div><i className="fa fa-user-circle icono-service" aria-hidden="true"></i></div>
                        Desarrollo de interfaces de usuario (UI)
                        <div><button className='button-service' onClick={openModal}><i class="fa fa-eye" aria-hidden="true"></i></button></div>
                    </div>
                    <div className="item">
                        <div><i className="fa fa-mobile icono-service" aria-hidden="true"></i></div>
                        Creación de sitios web responsivos
                        <div><button className='button-service' onClick={openModal2}><i class="fa fa-eye" aria-hidden="true"></i></button></div>
                    </div>
                    <div className="item">
                        <div><i className="fa fa-line-chart icono-service" aria-hidden="true"></i></div>
                        Optimización de rendimiento
                        <div><button className='button-service' onClick={openModal3}><i class="fa fa-eye" aria-hidden="true"></i></button></div>
                    </div>
                    <div className="item">
                        <div><i className="fa fa-cloud icono-service" aria-hidden="true"></i></div>
                        Integración de API
                        <div><button className='button-service' onClick={openModal4}><i class="fa fa-eye" aria-hidden="true"></i></button></div>
                    </div>
                    <div className="item">
                        <div><i className="fa fa-cogs icono-service" aria-hidden="true"></i></div>
                        Mantenimiento y actualización
                        <div><button className='button-service' onClick={openModal5}><i class="fa fa-eye" aria-hidden="true"></i></button></div>
                    </div>
                    <div className="item">
                        <div><i className="fa fa-location-arrow icono-service" aria-hidden="true"></i></div>

                        Desarrollo de experiencia del usuario (UX)
                        <div><button className='button-service' onClick={openModal1}><i class="fa fa-eye" aria-hidden="true"></i></button></div>
                    </div>
                </div>

                <Modal show={showModal} handleClose={closeModal}>
                    <h3>Desarrollo de interfaces de usuario (UI)</h3>
                    <p>Creación de la apariencia visual de una aplicación web o móvil utilizando tecnologías como HTML, CSS y JavaScript.</p>
                    <button className='btn2' onClick={closeModal}>Close</button>
                </Modal>


                <Modal show={showModal1} handleClose={closeModal1}>
                    <h3>Desarrollo de la experiencia del usuario (UX)</h3>
                    <p>Diseño y desarrollo de la forma en que los usuarios interactúan con una aplicación para lograr una experiencia fluida y agradable.</p>
                    <button className='btn2' onClick={closeModal1}>Close</button>
                </Modal>

                <Modal show={showModal2} handleClose={closeModal2}>
                    <h3>Creación de sitios web responsivos</h3>
                    <p>Desarrollo de sitios web que se adaptan y funcionan bien en una variedad de dispositivos y tamaños de pantalla, incluyendo computadoras de escritorio, tabletas y teléfonos móviles.</p>
                    <button className='btn2' onClick={closeModal2}>Close</button>
                </Modal>

                <Modal show={showModal3} handleClose={closeModal3}>
                    <h3>Optimización de rendimiento</h3>
                    <p> Mejora del rendimiento de la aplicación optimizando el código frontend, el tiempo de carga de la página y la eficiencia de los recursos.</p>
                    <button className='btn2' onClick={closeModal3}>Close</button>
                </Modal>


                <Modal show={showModal4} handleClose={closeModal4}>
                    <h3>Integración de API</h3>
                    <p> Conexión de la interfaz de usuario con servicios externos y APIs para acceder y mostrar datos dinámicos en la aplicación.</p>
                    <button className='btn2' onClick={closeModal4}>Close</button>
                </Modal>


                <Modal show={showModal5} handleClose={closeModal5}>
                    <h3>Mantenimiento y actualización</h3>
                    <p> Realización de tareas de mantenimiento continuo, corrección de errores y actualización de la interfaz de usuario.</p>
                    <button className='btn2' onClick={closeModal5}>Close</button>
                </Modal>
            </section>

            <section className='contact-home'>
                <div className="row">

                    <div className="col-12">

                        <h3 >¿Listo para transformar tus ideas?</h3>
                        <p>Estaré encantada de ayudarte a digitalizar con éxito tus negocio</p>

                        <button className="btn2 px-5" onClick={redirectToContactPage}>Contáctame</button>
                    </div>

                </div>
            </section>
        </>
    )
}

export default content