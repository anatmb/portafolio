import React from 'react'
import imagen from '../../assets/about.jpg';
import imagen2 from '../../assets/responsive-web-design.png';
import education from '../../assets/3.png';
import education3 from '../../assets/2.png';
import education2 from '../../assets/4.png';
import education4 from '../../assets/5.png';

import './about.css'
import { useNavigate } from 'react-router-dom';


function about() {

  const navigate = useNavigate();

  const redirectToContactPage = () => {
    navigate('/contact'); // Reemplaza '/contact' con la ruta a tu página de contacto
  };



  const redirectToServicesPage = () => {
    navigate('/services'); // Reemplaza '/services' con la ruta a tu página de servicios
  };


  return (
    <main className="container-about ">
      <div className='row'>

        <div className='col-lg-6 right-about '>
          <img className="photo-about" src={imagen} alt="" />
        </div>
        <div className='col-lg-6 left-about p-4'>

          <h1 className='title-about'>
            <span className='titule-about'>Hola</span><span className='exclamacion-about'>!</span></h1>
          <p className='paragraph-about align-items-center ' >
            Soy una frontend developer y disfruto transformar
            ideas en experiencias digitales efectivas y atractivas para los usuarios. Tengo  habilidad comprobada
            para trabajar en equipo y gestionar proyectos de manera efectiva.
            {/* Soy una apasionada desarrolladora web con una conexión única entre la tecnología y mi amor
            por viajar.&emsp;Además de codificar, disfruto explorando nuevos lugares con mi hijo,
            fusionando mi mundo digital con las maravillas del mundo real. */}
          </p>
          <p className='paragraph-about' >
            {/* Mi rol de madre agrega una perspectiva valiosa a mi vida, equilibrando el
            código con las alegrías cotidianas de ser mamá. */}
            Me preocupo por ti y por tus resultados.
          </p>
          <br />
          <div className="d-flex align-items-center"> {/* Contenedor para alinear horizontalmente los elementos */}
            <button className="btn1 custom-btn-secondary px-5" onClick={redirectToContactPage}>Contáctame</button>
          </div>
        </div>


      </div>



    

      <div className='container '>
        <div className='row'>

          <div className='col-lg-6 py-5'>
            <h2 className='titule-about' >Experiencia laboral</h2>
      
            <div class="accordion" id="accordionExample">


              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Freelancer / Henry Bootcamp, Proyecto Académico (03/2024)-(04/2024)
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>Desarrollador web full stack junior </strong>▪	Desarrollo de una plataforma de comercio electrónico con React y Redux, enfocada en la optimización de la experiencia de usuario.
                    ▪	Implementación de funcionalidades clave como el carrito de compras y la búsqueda avanzada de productos.
                    ▪	Integración del frontend con un backend basado en Node.js y Express, asegurando una comunicación fluida y segura.

                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Desarrollador web full stack junior  (07/2023)-(12/2023)
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>Freelancer / Proanzoategui S.A, Venezuela</strong> ▪	Desarrollo e implementación de un módulo de compras en un sistema administrativo utilizando Bootstrap y Laravel.
                    ▪	Diseño y optimización de la interfaz de usuario, logrando una mejora del 20% en la experiencia de compra.
                    ▪	Implementación de la generación automática de documentos PDF, lo que facilitó la administración documental.
                    ▪	Colaboración en la creación del modelo entidad-relación y en la optimización de consultas SQL.

                  </div>
                </div>
              </div>


              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Planificador de Proyecto (10/2013)-(03/2019)
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>Dependencia / Proinver Ralt, Venezuela  </strong>▪	Liderazgo en la planificación y seguimiento de proyectos, asegurando la entrega a tiempo y dentro del presupuesto.
                    ▪	Gestión de recursos y logísticas para optimizar la ejecución del proyecto.
                    ▪	Coordinación en la elaboración y control de valuaciones y facturación del proyecto

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6 py-5'>
          <h2 className='titule-about' >Habilidades y Metodologia</h2>
     
            <ul className="nav nav-pills nav-fill rounded border border-2 border-black mb-5 text-bg">
              <li className="nav-item">
                <button className="nav-link w-100 py-2 fs-6 active" data-bs-toggle="pill" data-bs-target="#tab-1"> Metodología de trabajo</button>
              </li>
              <li className="nav-item">
                <button className="nav-link w-100 py-2 fs-6" data-bs-toggle="pill" data-bs-target="#tab-2">Habilidades Ténicas</button>
              </li>
            </ul>

            <div className="tab-content">
              <div id="tab-1" className="tab-pane fade show p-0 active">
                <div className="row gy-5">
                  <div className="col-sm-6 text-bg">
                    <h6>Planificación y Análisis de Requisitos</h6>

                    {/* <p className="text-primary mb-1">Conversamos sobre tus necesidades y objetivos.</p> */}
                    <ul className="text-align-left mb-1 list">
                      <li>Reunirse con el equipo o cliente para discutir los objetivos del proyecto.</li>
                      <li>Analizar los diseños, wireframes, y especificaciones técnicas.</li>
                      <li>Definir las tecnologías y herramientas que se utilizarán (por ejemplo, React, Bootstrap).</li>
                      <li>Establecer un cronograma de desarrollo.</li>
                    </ul>
                  </div>
                  <div className="col-sm-6 text-bg">
                    <h6>Diseño y Prototipado</h6>

                    <ul className="text-align-left list">
                      <li>Colaborar con diseñadores UX/UI para crear prototipos interactivos o estáticos.</li>
                      <li>Asegurarse de que el diseño sea responsivo y accesible.</li>
                      <li>Recibir retroalimentación sobre el prototipo y realizar ajustes según sea necesario.</li>
                      <li>Documentar las decisiones de diseño para referencia futura.</li>
                    </ul>
                  </div>
                  <div className="col-sm-6 text-bg">
                    <h6>Desarrollo</h6> 
                    <ul className="text-align-left  list">
                      <li>Escribir el código HTML, CSS, y JavaScript según el diseño aprobado.</li>
                      <li>Implementar componentes reutilizables y modular el código para facilitar su mantenimiento.</li>
                      <li>Realizar pruebas de compatibilidad en diferentes navegadores y dispositivos.</li>
                      <li>Iterar rápidamente basándose en pruebas y revisiones internas.</li>
                    </ul>
                  </div>
                  <div className="col-sm-6 text-bg">
                    <h6>Pruebas, Optimización y Entrega</h6>

                    <ul className="text-align-left list">
                      <li>Realizar pruebas unitarias y de integración para asegurar la funcionalidad.</li>
                      <li>Optimizar el rendimiento del sitio web o aplicación.</li>
                      <li>Solucionar cualquier error o problema detectado durante las pruebas.</li>
                      <li>Preparar la entrega final del proyecto, incluyendo la documentación y capacitación si es necesario.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div id="tab-2" className="tab-pane fade p-0">
                <div className="row gy-5">
                  <div className="col-sm-6 text-bg">
                    <h6>Reforzar conocimiento React, Redux, CSS3, javaScript, Node, Express, PostgreSQL y Sequelize.</h6>

                    <p className="text-primary mb-1">2024</p>
                  </div>
                  <div className="col-sm-6 text-bg">
                    <h6>React, Redux, CSS3, javaScript, Node, Express, PostgreSQL y Sequelize.</h6>

                    <p className="text-primary mb-1">2023</p>
                  </div>
                  <div className="col-sm-6 text-bg">
                    <h6>Angular, CSS3, Bootstrap, Node, Spring Boot, Java, Mysql </h6>

                    <p className="text-primary mb-1">2022</p>
                  </div>
                  <div className="col-sm-6 text-bg">
                    <h6> Gestión de Proyectos.</h6>

                    <p className="text-primary mb-1"><i className="bi bi-arrow-left"></i> 2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>


      <section className='contact-home'>
        <div className="row">

          <div className="col-12">

            <h3 >¿Listo para transformar tus ideas?</h3>
            <p>Estaré encantada de ayudarte a digitalizar con éxito tus negocio</p>

            <button className="btn2 px-5">Contáctame</button>
          </div>

        </div>
      </section>

    </main>
  )
}

export default about