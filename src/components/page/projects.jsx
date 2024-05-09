import React from 'react'
import './projects.css'
import { NavLink } from 'react-router-dom'
import imagen from '../../assets/project-01.png';
import imagen2 from '../../assets/project-02.png';
import imagen3 from '../../assets/project-03.png';
import imagen4 from '../../assets/project-04.png';

function projects() {
  return (
    <div className='colorr'>
        <div class="album py-5 bg-body-tertiary">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
     
        <div class="col">
          <div class="card shadow-sm">
          {/* <img src={imagen} alt="" /> */}
          < NavLink to="#"><img src={imagen} className="img-fluid border project-image" /></NavLink>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          < NavLink to="#"><img src={imagen2} className="img-fluid border project-image" /></NavLink>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          < NavLink to="#"><img src={imagen3} className="img-fluid border project-image" /></NavLink>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          < NavLink to="#"><img src={imagen4} className="img-fluid border project-image" /></NavLink>
          </div>
        </div> 

      </div>
    </div>
  </div>
    </div>
  )
}

export default projects