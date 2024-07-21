import React from 'react'
import './projects.css'
import { NavLink } from 'react-router-dom'
import imagen from '../../assets/project-01.png';
import imagen2 from '../../assets/project-02.png';
import imagen3 from '../../assets/project-03.png';
import imagen4 from '../../assets/project-04.png';

function projects() {
  return (
    <div>
    <div className="album py-5 bg-body-tertiary">
      <h1 className="display-4 fw-normal text-body-emphasis">Algunos de mis proyectos</h1>
      <p className="fs-5 text-body-secondary">Realizados con tecnologías modernas y mejores prácticas de desarrollo web</p>
      <div className="container-project d-flex justify-content-center align-items-center">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
          <div className="col mb-3 ">
            <div className='card-container g-3'>
            <div className="card shadow-sm">
              <NavLink to="#"><img src={imagen} className="img-fluid project-image" alt="Project 1" /></NavLink>
              <div className='card_hover'>
                <NavLink to="https://shoe-kingdom-ae164.web.app/index.html"><button className='boton1'><i className="fa fa-external-link" aria-hidden="true"></i></button></NavLink>
              </div>
            </div>
            <h3 className='project-titule py-2'>E-ecommerce</h3>
            <p className='project-subtitule'>React, Bootstrap, Redux, HTML, CSS, Sequelize, Express, Postgresql</p>

            </div>
          
          </div>

          <div className="col mb-3">
            <div  className="card-container g-3">
            <div className="card shadow-sm">
              <NavLink to="#"><img src={imagen2} className="img-fluid border project-image" alt="Project 2" /></NavLink>
              <div className='card_hover'>
                <NavLink to="https://anatmb.github.io/Escueladecostura/"><button className='boton1'><i className="fa fa-external-link" aria-hidden="true"></i></button></NavLink>
              </div>
            </div>
            <h3 className='project-titule py-2'>One Page</h3>
            <p className='project-subtitule'>HTML, CSS y JavaScript</p>

            </div>
        
          </div>

          <div className="col mb-3 ">
            <div className="card-container g-3">
            <div className="card shadow-sm">
              <NavLink to="#"><img src={imagen3} className="img-fluid border project-image" alt="Project 3" /></NavLink>
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
              <NavLink to="https://pi-dogs-main-rose.vercel.app/"><img src={imagen4} className="img-fluid border project-image" alt="Project 4" /></NavLink>
              <div className='card_hover'>
                <NavLink to="https://pi-dogs-main-rose.vercel.app/"><button className='boton1'><i className="fa fa-external-link" aria-hidden="true"></i></button></NavLink>
              </div>
            </div>
            <h3 className='project-titule py-2'>Aplicación con acceso api TheDogApi</h3>
            <p className='project-subtitule'>React, redux, Bootstrap, HTML, CSS, Sequelize, PostgreSQL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default projects