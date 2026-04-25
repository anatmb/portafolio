// import React from 'react'
// import './services.css'

// function services() {
//   return (
//     <div className='container-services'>
 
//       <div className="container py-5 services" id="icon-grid">
//       <h1 className="display-4 fw-normal text-body-emphasis">Algunos de mis servicios</h1>
//         <p className="fs-5 text-body-secondary">  Relacionados con la interfaz de usuario y la experiencia del usuario en aplicaciones web y móviles </p>

//         <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
//           <div className="col d-flex align-items-start">
//            <i className="fa fa-check-square-o text-primary m-2" aria-hidden="true"></i>
//             <div>
//               <h3 className="fw-bold mb-0 fs-4 text-body-emphasis align-items-start text-start">Desarrollo de interfaces de usuario (UI) </h3>
//               <p className='text-dark align-items-start text-start'>Creación de la apariencia visual de una aplicación web o móvil utilizando tecnologías como HTML, CSS y JavaScript..</p>
//             </div>
//           </div>
//           <div className="col d-flex align-items-start">
//            <i className="fa fa-check-square-o text-primary m-2" aria-hidden="true"></i>
//             <div>
//               <h3 className="fw-bold mb-0 fs-4 text-body-emphasis align-items-start text-start">Desarrollo de la experiencia del usuario (UX)</h3>
//               <p className='text-dark align-items-start text-start'>Diseño y desarrollo de la forma en que los usuarios interactúan con una aplicación para lograr una experiencia fluida y agradable.</p>
//             </div>
//           </div>
//           <div className="col d-flex align-items-start">
//              <i className="fa fa-check-square-o text-primary m-2" aria-hidden="true"></i>
//             <div>
//               <h3 className="fw-bold mb-0 fs-4 text-body-emphasis align-items-start text-start">Creación de sitios web responsivos</h3>
//               <p className='text-dark align-items-start text-start'>Desarrollo de sitios web que se adaptan y funcionan bien en una variedad de dispositivos y tamaños de pantalla, incluyendo computadoras de escritorio, tabletas y teléfonos móviles.</p>
//             </div>
//           </div>
//           <div className="col d-flex align-items-start">
//              <i className="fa fa-check-square-o text-primary m-2" aria-hidden="true"></i>
//             <div>
//               <h3 className="fw-bold mb-0 fs-4 text-body-emphasis align-items-start text-start">Optimización de rendimiento</h3>
//               <p className='text-dark align-items-start text-start'> Mejora del rendimiento de la aplicación optimizando el código frontend, el tiempo de carga de la página y la eficiencia de los recursos.</p>
//             </div>
//           </div>
//           <div className="col d-flex align-items-start">
//              <i className="fa fa-check-square-o text-primary m-2" aria-hidden="true"></i>
//             <div>
//               <h3 className="fw-bold mb-0 fs-4 text-body-emphasis align-items-start text-start">Integración de API</h3>
//               <p className='text-dark align-items-start text-start'>Conexión de la interfaz de usuario con servicios externos y APIs para acceder y mostrar datos dinámicos en la aplicación.</p>
//             </div>
//           </div>
//           <div className="col d-flex align-items-start">
//             <i className="fa fa-check-square-o text-primary m-2" aria-hidden="true"></i>
//             <div>
//               <h3 className="fw-bold mb-0 fs-4 text-body-emphasis align-items-start text-start">Mantenimiento y actualización</h3>
//               <p className='text-dark align-items-start text-start'>Realización de tareas de mantenimiento continuo, corrección de errores y actualización de la interfaz de usuario.</p>
//             </div>
//           </div>
//              </div>
//       </div>



//     </div>


//   )
// }

// export default services

import React from "react";
import "./services.css";

export default function Services() {
  const services = [
    {
      title: "Desarrollo de interfaces UI",
      description:
        "Creación de interfaces modernas y atractivas utilizando HTML, CSS, React y JavaScript.",
    },
    {
      title: "Experiencia de usuario UX",
      description:
        "Diseño de experiencias digitales intuitivas que mejoran la interacción del usuario.",
    },
    {
      title: "Sitios web responsivos",
      description:
        "Desarrollo de sitios que funcionan perfectamente en computadoras, tablets y móviles.",
    },
    {
      title: "Optimización de rendimiento",
      description:
        "Mejora de velocidad de carga y optimización del código frontend.",
    },
    {
      title: "Integración de APIs",
      description:
        "Conexión de aplicaciones con servicios externos para mostrar datos dinámicos.",
    },
    {
      title: "Mantenimiento web",
      description:
        "Actualización, corrección de errores y mejoras continuas en aplicaciones web.",
    },
  ];

  return (
    <section className="services-section">
      <div className="services-container">

        <span className="section-tag">SERVICIOS</span>

        <h2 className="services-title">
          Algunos de mis serviciosssssssssssssssss
        </h2>

        <p className="services-subtitle">
          Desarrollo soluciones digitales modernas enfocadas en experiencia
          de usuario, rendimiento y diseño atractivo.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                <i className="fa fa-check"></i>
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}